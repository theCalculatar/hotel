import { Box, Button, Container, Grid, Snackbar, Stack, Typography } from '@mui/material'
import { React, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import RoomHero from './RoomHero'

import PoolIcon from '@mui/icons-material/Pool';
import BedIcon from '@mui/icons-material/Bed';
import ShowerIcon from '@mui/icons-material/Shower';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import DiningIcon from '@mui/icons-material/Dining';
import ReviewCard from './ReviewCard';


function RoomDetail() {
    const imageList = [
       'santorini.jpg', 'beach.jpg','resort.jpg'
    ]
    const [isOpen,setOpen] = useState(false)
    const handleSnack = () =>{
      setOpen(!isOpen)
    }
    const [bgImage,setBgImage] = useState(imageList[0])

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
    ]

    const bookNow = () =>{
      handleSnack()
    }

    const reviews = [
      {
        name:'Alpheus Mabetlela',
        image:'../me.png',
        rating:4,
        description:'his text was recognized by the built-in Ocrad engine. A better transcription may be attained by right clicking on the selection and changing the OCR engine to "Tesseract" (under the "Language" menu). This message can be removed in the future by unchecking "OCR Disclaimer" (under the Options menu). More info: http://projectnaptha.com/ocrad'
      },
      
      {
        name:'Alpheus Mabie',
        image:'../me.png',
        rating:4,
        description:'his text was recognized by the built-in Ocrad engine. A better transcription may be attained by right clicking on the selection and changing the OCR engine to "Tesseract" (under the "Language" menu). This message can be removed in the future by unchecking "OCR Disclaimer" (under the Options menu). More info: http://projectnaptha.com/ocrad'
      },
      {
        name:'Mahlane Mabetlela',
        rating:4,
        image:'../me.png',
        description:'his text was recognized by the built-in Ocrad engine. A better transcription may be attained by right clicking on the selection and changing the OCR engine to "Tesseract" (under the "Language" menu). This message can be removed in the future by unchecking "OCR Disclaimer" (under the Options menu). More info: http://projectnaptha.com/ocrad'
      }
    ]
  return (

    <Box overflow={'hidden'}>  
        <RoomHero/>
        <Box  mx={17} height={400} display={'flex'} alignItems={'center'} justifyContent={'center'} mt={14} overflow={'hidden'} bgcolor={'white'} sx={{boxShadow:' 0px 25px 25px -25px rgba(0, 0, 0, 0.25)'}}  >
            <img style={{width:'95%',height:'85%',objectFit:'cover'}} src="../bedroom.jpg" alt="" />
        </Box>
        <Stack mt={7} direction={'row'} justifyContent={'center'} spacing={1}>
          <Typography >Start from</Typography>
          <Typography color='#CB4F50'>$99.99</Typography>
          <Typography >/night</Typography>
        </Stack>

        {/* Discription */}
        <Box bgcolor={'white'} mt={7} py={7} px={17}>
          <Typography variant="h3" fontSize={32} textAlign={'center'}>Description</Typography>
          <Typography textAlign={"center"} mt={4}> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien ringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. 
          </Typography>
        {/* AMENTIES*/}
          <Typography variant="h3" mt={7} fontSize={32} textAlign={'center'}>Amenities</Typography> 
          <Container sx={{mt:4}} maxWidth="sm">
            <Grid container spacing={2} bgcolor={'#F4F4F4'} py={2}>
              {
                icons.map((icons,key)=>{
                  return(<Grid display={'flex'} justifyContent={'center'} xs={4} md={4} xl={4} item>
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
              reviews.map((review,key)=>{
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

