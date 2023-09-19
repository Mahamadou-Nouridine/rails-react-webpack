import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './greetings/greetingSlice';

export default configureStore({
  reducer: {
    greetings: reducer,
  },
});
