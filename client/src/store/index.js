import { createSlice, configureStore } from "@reduxjs/toolkit";
import { TASK_STATUS_OPTIONS, TASK_PRIORITY_OPTIONS } from "../constants/tasks";

// Set the initial value of task status option to the key of 'To do'
const TO_DO = Object.keys(TASK_STATUS_OPTIONS).find(
  (key) => TASK_STATUS_OPTIONS[key] === "Not Started"
);
// Set the initial value of task priority option to the key of 'To do'
const LOW = Object.keys(TASK_PRIORITY_OPTIONS).find(
  (key) => TASK_PRIORITY_OPTIONS[key] === "Low Priority"
);

const initialFormState = {
  taskTitle: "",
  taskDescription: "",
  taskStatus: TO_DO,
  taskPriority: LOW,
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
    setTaskDescription: (state, action) => {
      state.taskDescription = action.payload;
    },
    setTaskStatus: (state, action) => {
      const KEY = Object.keys(TASK_STATUS_OPTIONS).find(
        (key) => TASK_STATUS_OPTIONS[key] === action.payload
      );
      state.taskStatus = KEY;
    },
    setTaskPriority: (state, action) => {
      const KEY = Object.keys(TASK_PRIORITY_OPTIONS).find(
        (key) => TASK_PRIORITY_OPTIONS[key] === action.payload
      );
      state.taskPriority = KEY;
    },
    setTaskId: (state, action) => {
      state.taskId = action.payload;
    },
    clearForm: (state) => {
      state.taskTitle = "";
      state.taskDescription = "";
      state.taskPriority = LOW;
      state.taskStatus = TO_DO;
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
