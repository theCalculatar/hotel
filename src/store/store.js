import { configureStore } from '@reduxjs/toolkit'
import roomReducer, { getRoomReviews } from './roomSlice'
// import reservationReduce from './reservationSlice'

export const store = configureStore({
  reducer: {
    rooms: roomReducer,
    // reservation: reservationReduce,
  },
})

// store.dispatch(getRoomReviews('2'))