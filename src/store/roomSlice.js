import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import { addDoc, collection, doc, getDocs, query, setDoc, updateDoc, where, } from 'firebase/firestore'
import { db } from '../firebase/config'


const initialState = {
    rooms:[],
    display:[],
    reservation:[],
    reviews:[]
}

export const getReservations = createAsyncThunk('rooms/reservation',async () =>{
  try {
    const reservation = await getDocs(collection(db,'users','sumUser','reservation'))
    // console.log('this are reservation on a sliver platter')
    return reservation.docs.map((doc)=> {return doc.data()})
  } catch (error) {
    console.log(error)
    return error
  }
})

export const reserveRoom = createAsyncThunk('room/reserveRooom',async (roomId)=>{
  try {
    await setDoc(doc(db,'users','sumUser','reservation',roomId),
      {
        meal:true,
        rooms:1
      }
    )
    return {
      roomId:roomId,
      meal:true,
      rooms:1
    }

  } catch (error) {
    console.log(error)
  }
})

export const getRoomReviews = createAsyncThunk('room/getReviews',async (roomId)=>{
  const q = query(collection(db,'reviews'),where('roomId','==',roomId))
  try {
    const res = await getDocs(q)
    const reviews = res.docs.map(doc=>{return doc.data()})
    // console.log("stupid",reviews)
    return reviews
  } catch (error) {
    // console.log("stupid",error)
    return error
  }
},{
  // condition:(roomId,{getState})=>{
  //   const state = getState()
  //   return (
  //     !state
  //     .rooms
  //     .reviews
  //     .some((element)=>{
  //       return element.roomId==roomId
  //     }))
  // }
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
    // bundle.addCase(reserveRoom.fulfilled,(state,action) => {
    //   console.log(action.payload)
    //   state.reservation = state.rooms.includes(action.payload.roomId)
    // })
    bundle.addCase(getReservations.fulfilled, (state,action) => {
      const rooms = current(state.rooms)
      const reservations = rooms.reduce((acc, room, index) => {
        action.payload.some(reservation => {
          const isReserved = reservation.roomId == room.roomId
          const reviews = current(state.reviews).filter(({roomId})=>roomId==room.roomId).length
          if(isReserved){
            acc.push({...reservation,picture:room.picture,price:room.price,reviews})
          }
          return isReserved
        })
        return acc
      },[])
      state.reservation = reservations
    })
  }})

// Action creators are generated for each case reducer function
export const { initData } = roomSlice.actions

export default roomSlice.reducer