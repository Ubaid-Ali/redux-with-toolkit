import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userNameReducer from '../features/name/userNameSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    userName: userNameReducer,
  },
});
