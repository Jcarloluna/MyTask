// Mongoose Models
const User = require("../models/User.js");
const Task = require("../models/Task.js");

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

// Todos Type

const TaskType = new GraphQLObjectType({
  name: "Tasks",
  fields: () => ({
    // Convert the MongoDB ObjectId to GraphQL ID
    id: { type: GraphQLID },
    taskTitle: { type: GraphQLString },
    status: { type: GraphQLString },
    password: { type: GraphQLString },
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
        return Task.find();
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
        status: {
          type: new GraphQLEnumType({
            name: "TaskStatus",
            values: {
              new: { value: "Not Started" },
              progress: { value: "In Progress" },
              finished: { value: "Completed" },
            },
          }),
          defaultValue: "Not Started",
        },
        userId: { type: new GraphQLNonNull(GraphQLID) },
      },
      async resolve(parent, args) {
        const task = new Task({
          taskTitle: args.taskTitle,
          status: args.status,
          userId: args.userId,
        });
        try {
          const savedTask = await task.save();
          return savedTask; // Return the saved user object
        } catch (error) {
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
        status: {
          type: new GraphQLEnumType({
            name: "TaskStatusUpdate",
            values: {
              new: { value: "Not Started" },
              progress: { value: "In Progress" },
              finished: { value: "Completed" },
            },
          }),
        },
      },
      resolve(parent, args) {
        return Task.findByIdAndUpdate(
          args.id,
          {
            $set: {
              taskTitle: args.taskTitle,
              status: args.status,
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
