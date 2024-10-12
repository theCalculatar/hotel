import React, { useEffect } from 'react'
import ReservationHero from './Hero'
import ForYou from './ForYou'
import Overview from './Overview'
import { Box, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getReservations } from '../../store/roomSlice'

function Reservation() {
  const dispacth = useDispatch()
  useEffect(()=>{
    dispacth(getReservations())
  },[])

  return (
    <Box >
        <ReservationHero/>
        <ForYou/>
        <Overview/>
        <Box display={'flex'} justifyContent={'center'} my={7}>
          <Button variant='contained'>checkout</Button>
        </Box>
    </Box>
  )
}

export default Reservation