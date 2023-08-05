const tasks = [
  {
    id: 1,
    task: "Do something nice for someone I care about",
    status: "finished",
    userId: 1,
  },
  {
    id: 2,
    task: "2Do something nice for someone I care about",
    status: "not started",
    userId: 1,
  },
  {
    id: 3,
    task: "3Do something nice for someone I care about",
    status: "on going",
    userId: 2,
  },
  {
    id: 4,
    task: "4Do something nice for someone I care about",
    status: "on going",
    userId: 3,
  },
];

const users = [
  {
    id: 1,
    userName: "Carlo",
    email: "carlo@gmail.com",
    password: "lunamc",
  },
  {
    id: 2,
    userName: "Carlo2",
    email: "carlo2@gmail.com",
    password: "lunamc",
  },
  {
    id: 3,
    userName: "Carlo3",
    email: "carlo3@gmail.com",
    password: "lunamc",
  },
];

module.exports = { tasks, users };
