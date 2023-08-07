import { createSlice, configureStore } from "@reduxjs/toolkit";
import { TASK_STATUS_OPTIONS } from "../constants/tasks";

// Set the initial value of task status option to the key of 'To do' 
const TODO = Object.keys(TASK_STATUS_OPTIONS).find(
  (key) => TASK_STATUS_OPTIONS[key] === "To do"
);

const initialFormState = {
  taskTitle: "",
  taskStatus: TODO,
  taskId: null,
};

const initialModalState = {
  showModal: false,
  modalType: null,
};

const formTaskSlice = createSlice({
  name: "formTask",
  initialState: initialFormState,
  reducers: {
    setTaskTitle: (state, action) => {
      state.taskTitle = action.payload;
    },
    setTaskStatus: (state, action) => {
      state.taskStatus = action.payload;
    },
    setTaskId: (state, action) => {
      state.taskId = action.payload;
    },
    clearForm: (state) => {
      state.taskTitle = "";
      state.taskStatus = TODO;
      state.taskId = null;
    },
  },
});

const taskModalSlice = createSlice({
  name: "taskModal",
  initialState: initialModalState,
  reducers: {
    toggleTaskModal(state, action) {
      state.showModal = action.payload;
    },
    setModalType(state, action) {
      state.modalType = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    taskModal: taskModalSlice.reducer,
    formTask: formTaskSlice.reducer,
    // darkMode: darkModeSlice.reducer,
  },
});

export const formTaskActions = formTaskSlice.actions;
export const taskModalActions = taskModalSlice.actions;

export default store;
