// store.js
import { configureStore } from '@reduxjs/toolkit';
import audioReducer from './store/audioSlice';

export default configureStore({
  reducer: {
    audio: audioReducer,
  },
});
