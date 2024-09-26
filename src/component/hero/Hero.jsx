import { Box, Stack, Typography } from '@mui/material'
import { React, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function Hero() {
    const imageList = [
       'santorini.jpg', 'beach.jpg','resort.jpg'
    ]
    const [bgImage,setBgImage] = useState(imageList[0])
    const dateRef =useRef()

    // const review = {
    //     name,picture,rating,description
    // }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>

    <Box sx={
        {  
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${bgImage})`,
            backgroundAttachment:'fixed',
            backgroundPositionY:'bottom'
        }}
             px={17} height={468}>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} height={'100%'}>
            <Box gap={3} display={'flex'}  justifyContent={'center'} flexDirection={'column'} >
                <Typography   fontWeight={500}color='white'  fontSize={64} >
                    Monalisa Hotel
                </Typography>
                <Typography width={554} color='white' fontSize={16} >
                    Cur Hotels & Resortsremain styish, modern forward ehining globallceader of hospitaity and we help maketravelingcasier winhour smart design, inovatve restaurant concepts unigue activties, nature and authentk hospitalty
                </Typography>
                <Link style={{color:'white'}}>More info</Link>
            </Box>
            <Box display={'flex'} alignItems={'center'} flexDirection={'column'} gap >
                {
                    imageList.map((value,key)=>{
                        return(
                            <img key={key}
                                width={180}
                                height={115}
                                src={value}
                                alt={value}
                                style={(value===bgImage)?{border:'4px solid white'}:
                                        {boxShadow:' 0px 5px 5px -25px rgba(0, 0, 0, 0.25)'}
                                        }
                                onClick={()=>setBgImage(value)} />
                            )
                    })
                }
            </Box>
        </Box>
        <Box sx={
            {
                width: 800,
                left: 'calc(50% - 800px/2)',
                position:'absolute',
                mt: -5,
                boxShadow:' 0px 25px 25px -25px rgba(0, 0, 0, 0.25)'
            }}
            justifyContent={'space-between'}
            bgcolor={'white'} 
            display={'flex'} 
            height={115} 
            alignItems={'center'}
            overflow={'hidden'}>
            <Stack ml={5} width={'190px'}>
                <Typography fontSize={14}>Check-in</Typography>
                <Stack direction={'row'}  spacing={1}>
                    <DatePicker />
                </Stack>
            </Stack>
            <Stack width={'190px'}>
                <Typography fontSize={14}>Check-out</Typography>
                <DatePicker />
            </Stack>
            <Stack >
                <Typography fontSize={14}>Check-in</Typography>
                <Stack >
                    <Typography fontSize={21}>26</Typography>
                </Stack>
            </Stack>
            <Box gap={1} height={'100%'} px={4} justifyContent={'center'} bgcolor={'#D9D9D9'} display={'flex'} flexDirection={'column'}>
                <Typography fontSize={12}>Have a promotion code?</Typography>
                <Typography p={1} fontSize={12} textAlign={'center'} bgcolor={'#3F9BC0'} color='white'>check availabity</Typography>
            </Box>
        </Box>
    </Box>
    </LocalizationProvider >

  )
}

export default Hero

