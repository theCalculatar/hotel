import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    rooms:[],
    display:[]
}
export const roomSlice =  createSlice({
  name: 'room',
  initialState,
  reducers: {
    initData: (_,action) => {
      const display = action.payload.map(({id,name,picture,price})=>{
        return {id,name,picture,price}
      })
      return {
        rooms:action.payload,
        display:display
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { initData } = roomSlice.actions

export default roomSlice.reducer