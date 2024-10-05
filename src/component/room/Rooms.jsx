import { Box, Typography } from '@mui/material'
import React from 'react'
import Hero from '../hero/Hero'
import RoomL from './RoomLeft'
import RoomR from './RoomRight'
import { useSelector } from 'react-redux'

function Rooms() {
  const rooms = useSelector(state => state.rooms.rooms)
  return (
    <Box >
      <Hero />
      <Box mt={17} >
        {
          rooms?.map((room,key)=>{
             if(key%2==0){
              return(<RoomL room={room} key={key} num={key+1}/>)
            } else{
              return(<RoomR room={room} key={key} num={key+1}/>)
            }
          })
        }
      </Box>
      <Box display={'flex'} my={3} justifyContent={'center'}>
        <Typography px={2} py={1} fontSize={12} justifySelf={'center'} borderRadius={1} bgcolor={'#3F9BC0'} color='white' width={'fit-content'} > See more</Typography>
      </Box>
    </Box>
  )
}

export default Rooms