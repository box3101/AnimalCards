import { createSlice } from '@reduxjs/toolkit';

const audioSlice = createSlice({
  name: 'audio',
  initialState: null,
  reducers: {
    playAudio: (state, action) => {
      // 이전에 재생 중이던 오디오가 있다면 멈춘다
      if (state) {
        state.pause();
      }
      
      // // 새로운 오디오를 재생한다
      // const newAudio = new Audio(action.payload);
      // newAudio.play();
      // return newAudio;
    },
    stopAudio: (state) => {
      // 현재 재생 중인 오디오를 멈춘다
      if (state) {
        state.pause();
      }
      
      return null;
    },
  },
});

export const { playAudio, stopAudio } = audioSlice.actions;
export default audioSlice.reducer;