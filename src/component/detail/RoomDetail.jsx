import { Box, Button, Container, Grid, Snackbar, Stack, Typography } from '@mui/material'
import { React, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import RoomHero from './RoomHero'

import PoolIcon from '@mui/icons-material/Pool';
import BedIcon from '@mui/icons-material/Bed';
import ShowerIcon from '@mui/icons-material/Shower';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import DiningIcon from '@mui/icons-material/Dining';
import ReviewCard from './ReviewCard';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomReviews,reserveRoom } from '../../store/roomSlice';


function RoomDetail() {
  const { state } = useLocation()
  const room = state
  const [isOpen,setOpen] = useState(false)
  const handleSnack = () =>{
    setOpen(!isOpen)
  }
  const dispatch = useDispatch()

  const getreviews = (roomId) =>{
    dispatch(getRoomReviews(roomId))
  }
  const reviews = useSelector(state => state.rooms.reviews)
  useEffect(()=>{
    getreviews(room.roomId)
  },[])
  
  
  const icons = [
    {
      name:'pool',
      icon:<PoolIcon/>
    },
    {
      name:'bed',
      icon:<BedIcon/>
    },
    {
      name:'shower',
      icon:<ShowerIcon/>
    },
    {
      name:'parking',
      icon:<LocalParkingIcon/>
    },
    {
      name:'dining',
      icon:<DiningIcon/>
    },
    {
      name:'dining',
      icon:<DiningIcon/>
    }
  ].filter(amenities=>room.amenities.includes(amenities.name))

  const bookNow = () =>{
    handleSnack()
    dispatch(reserveRoom(room.roomId))
  }

  return (

    <Box overflow={'hidden'}>  
        <RoomHero room={room}/>
        <Box  mx={17} height={400} display={'flex'} alignItems={'center'} justifyContent={'center'} mt={14} overflow={'hidden'} bgcolor={'white'} sx={{boxShadow:' 0px 25px 25px -25px rgba(0, 0, 0, 0.25)'}}  >
            <img style={{width:'95%',height:'85%',objectFit:'cover'}} src={room.picture} alt="" />
        </Box>
        <Stack mt={7} direction={'row'} justifyContent={'center'} spacing={1}>
          <Typography >Start from</Typography>
          <Typography color='#CB4F50'>R{room.price}</Typography>
          <Typography >/night</Typography>
        </Stack>

        {/* Discription */}
        <Box bgcolor={'white'} mt={7} py={7} px={17}>
          <Typography variant="h3" fontSize={32} textAlign={'center'}>Description</Typography>
          <Typography textAlign={"center"} fontSize={14} mt={4}>{room.description}</Typography>
        
        {/* AMENTIES*/}
          <Typography variant="h3" mt={7} fontSize={32} textAlign={'center'}>Amenities</Typography> 
          <Container sx={{mt:4}} maxWidth="sm">
            <Grid container spacing={2} bgcolor={'#F4F4F4'} py={2}>
              {
                icons.map((icons,key)=>{
                  return(<Grid key={key} display={'flex'} justifyContent={'center'} xs={4} md={4} xl={4} item>
                      {icons.icon}
                  </Grid>)
                })
              }
            </Grid>
          </Container>
          {/* REVIEWS */}
          <Typography variant="h3" fontSize={32} textAlign={'center'} mt={7} >Reviews</Typography>
          <Stack gap={2} mt={4}>
            {
              reviews?.map((review,key)=>{
                return(<ReviewCard review={review}/>)
              })
            }
          </Stack>
      </Box>
      <Box display={'flex'} justifyContent={'center'} my={7}>
        <Button onClick={bookNow} variant="contained" sx={{bgcolor:'#3F9BC0',textTransform:'capitalize'}}>Book room now</Button>
      </Box>
      <Snackbar
        ContentProps={{sx:{bgcolor:'white',color:'GrayText'}}}
        open={isOpen}
        onClick={handleSnack}
        onClose={handleSnack}
        anchorOrigin={{horizontal:'center',vertical:'top'}}
        message={'Added room'}
      />
    </Box>

  )
}

export default RoomDetail

