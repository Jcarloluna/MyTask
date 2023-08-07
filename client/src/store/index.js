import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialFormState = {
  taskTitle: "",
  taskStatus: "",
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
      state.taskStatus = "";
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
    setModalType(state, action){
      state.modalType = action.payload;
    }
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
