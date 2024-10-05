import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addDoc, collection, doc, getDocs, query, setDoc, updateDoc, where, } from 'firebase/firestore'
import { db } from '../firebase/config'


const initialState = {
    rooms:[],
    display:[],
    reservation:[],
    reviews:[]
}

export const reserveRoom = createAsyncThunk('room/reserveRooom',async (roomId)=>{
  // const ref = 
  try {
    const res = await addDoc(collection(db,'users','sumUser','reservation'),
      {
        roomId:roomId
      }
    )
      return {res:res.id,roomId}

  } catch (error) {
    console.log(error)
  }
})

export const getRoomReviews = createAsyncThunk('room/getReviews',async (roomId)=>{
  const q = query(collection(db,'reviews'),where('roomId','==',roomId))
  try {
    const res = await getDocs(q)
    const reviews = res.docs.map(doc=>{return doc.data()})
    console.log("stupid",reviews)
    return reviews
  } catch (error) {
    console.log("stupid",error)
    return error
  }
},{
  condition:(roomId,{getState})=>{
    const state = getState()
    return (
      !state
      .rooms
      .reviews
      .some((element)=>{
        return element.roomId==roomId
      }))
  }
})

export const roomSlice =  createSlice({
  name: 'room',
  initialState,
  reducers: {
    initData: (state,action) => {
      const display = action.payload.map(({id,name,picture,price})=>{
        return {id,name,picture,price}
      })
      state.rooms.push(...action.payload)
      state.display.push(...display)
    }
  },
  extraReducers: (bundle) =>{
    bundle.addCase(getRoomReviews.fulfilled,(state,action) => {
      state.reviews = [...action.payload]
    })
    bundle.addCase(reserveRoom.fulfilled,(state,action) => {
      state.reservation = state.rooms.includes(action.payload.roomId)
    })
  }
})

// Action creators are generated for each case reducer function
export const { initData } = roomSlice.actions

export default roomSlice.reducer