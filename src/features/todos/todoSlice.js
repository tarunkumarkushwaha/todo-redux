import { createSlice } from '@reduxjs/toolkit'

const initialState = {todoes : JSON.parse(localStorage.getItem('items')) || []}


export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoes.push(action.payload)
    },
    deletetodo: (state, action) => {
      state.todoes.splice( action.payload, 1);
      localStorage.setItem('items', JSON.stringify(state.todoes));
    },
    deleteall: (state) => {
      state.todoes = []
    },
    modTodo: (state,action) => {
      console.log("bada load ba",action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo ,deletetodo,deleteall,modTodo } = todoSlice.actions

export default todoSlice.reducer