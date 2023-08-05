// Mongoose Models
const User = require('../models/User.js')
const Task = require('../models/Task.js')


const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLBoolean,
} = require("graphql");

// Todos Type

const TaskType = new GraphQLObjectType({
  name: "Tasks",
  fields: () => ({
    id: { type: GraphQLID },
    taskTitle: { type: GraphQLString },
    status: { type: GraphQLString },
    password: { type: GraphQLString },
    user: {
      type: UserType,
      resolve(parent, args) {
        return users.findById(parent.userId);
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
        return Task.findById(+args.id);
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
        return Users.findById(+args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
