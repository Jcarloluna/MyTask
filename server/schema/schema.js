// Mongoose Models
const User = require("../models/User.js");
const Task = require("../models/Task.js");
// Momentjs
const moment = require("moment");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLEnumType,
} = require("graphql");

// TO DOs Type

const TaskType = new GraphQLObjectType({
  name: "Tasks",
  fields: () => ({
    // Convert the MongoDB ObjectId to GraphQL ID
    id: { type: GraphQLID },
    taskTitle: { type: GraphQLString },
    taskDescription: { type: GraphQLString },
    status: { type: GraphQLString },
    priority: { type: GraphQLString },
    dateCreated: { type: GraphQLString },
    user: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.userId);
      },
    },
  }),
});

// UserType

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    userName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    tasks: {
      type: new GraphQLList(TaskType),
      resolve(parent, args) {
        return Task.find().then((tasks) => {
          // Format the dateCreated field for each task
          return tasks.map((task) => ({
            ...task.toObject(),
            id: task.id.toString(), // Convert _id to string
            dateCreated: moment(task.dateCreated).format("YYYY-MM-DD HH:mm:ss"),
          }));
        });
      },
    },
    task: {
      type: TaskType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Task.findById(args.id);
      },
    },

    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find();
      },
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args.id);
      },
    },
  },
});

// Mutations

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Add User
    addUser: {
      type: UserType,
      args: {
        userName: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
        const user = new User({
          userName: args.userName,
          email: args.email,
          password: args.password,
        });
        try {
          const savedUser = await user.save();
          return savedUser; // Return the saved user object
        } catch (error) {
          throw new Error("Failed to create a new user.");
        }
      },
    },
    // Delete User
    deleteUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return User.findByIdAndRemove(args.id);
      },
    },
    // Add Task
    addTask: {
      type: TaskType,
      args: {
        taskTitle: { type: new GraphQLNonNull(GraphQLString) },
        taskDescription: { type: new GraphQLNonNull(GraphQLString) },
        status: {
          type: new GraphQLEnumType({
            name: "TaskStatus",
            values: {
              TO_DO: { value: "Not Started" },
              IN_PROGRESS: { value: "In Progress" },
              COMPLETED: { value: "Completed" },
            },
          }),
          defaultValue: "Not Started",
        },
        priority: {
          type: new GraphQLEnumType({
            name: "TaskPriority",
            values: {
              LOW: { value: "Low Priority" },
              MID: { value: "Mid Priority" },
              HIGH: { value: "High Priority" },
            },
          }),
          defaultValue: "Low Priority",
        },
        userId: { type: new GraphQLNonNull(GraphQLID) },
      },
      async resolve(parent, args) {
        const task = new Task({
          taskTitle: args.taskTitle,
          taskDescription: args.taskDescription,
          status: args.status,
          priority: args.priority,
          userId: args.userId,
        });
        console.log("task:", task);
        try {
          const savedTask = await task.save();
          console.log("[savedTask]:", savedTask);
          return savedTask;
        } catch (error) {
          console.log("error:---", error);
          throw new Error("Failed to create a new task.");
        }
      },
    },
    // Update Task
    updateTask: {
      type: TaskType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        taskTitle: { type: GraphQLString },
        taskDescription: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            name: "TaskStatusUpdate",
            values: {
              TO_DO: { value: "Not Started" },
              IN_PROGRESS: { value: "In Progress" },
              COMPLETED: { value: "Completed" },
            },
          }),
        },
        priority: {
          type: new GraphQLEnumType({
            name: "TaskPriorityUpdate",
            values: {
              LOW: { value: "Low Priority" },
              MID: { value: "Mid Priority" },
              HIGH: { value: "High Priority" },
            },
          }),
        },
      },
      resolve(parent, args) {
        const currentDate = moment().toDate();
        return Task.findByIdAndUpdate(
          args.id,
          {
            $set: {
              taskTitle: args.taskTitle,
              taskDescription: args.taskDescription,
              status: args.status,
              priority: args.priority,
              dateCreated: currentDate,
            },
          },
          { new: true } // Returns the updated document -- prop of findByIdAndUpdate
        );
      },
    },
    // Delete Task
    deleteTask: {
      type: TaskType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Task.findByIdAndRemove(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
