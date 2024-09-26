import React from 'react'
import ReservationHero from './Hero'
import ForYou from './ForYou'
import Overview from './Overview'
import { Box, Button } from '@mui/material'

function Reservation() {
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