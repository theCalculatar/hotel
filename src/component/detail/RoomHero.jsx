import { Box, Stack, Typography } from '@mui/material'
import { React, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function RoomHero() {
    const imageList = [
       'bedroom2.jpg', 'beach.jpg','resort.jpg'
    ]
    const [bgImage,setBgImage] = useState(imageList[0])
    const dateRef =useRef()
    
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>


    <Box sx={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat',backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(../${bgImage})`,
        backgroundAttachment:'fixed',  backgroundPositionY:'bottom'}} px={17} height={468}>
        <Box display={'flex'}flexDirection={'column'} justifyContent={'center'} height={'100%'}>
                <Typography   textAlign={'center'} fontWeight={500}color='white'  fontSize={64} >
                    Classic Room
                </Typography>
                <Typography textAlign={'center'} color='white' fontSize={12}>
                    {'Home>Our room>Classic room'}
                </Typography>
        </Box>
     
        <Box sx={
            {
                position: 'absolute',
                width: 800,
                left: 'calc(50% - 800px/2)',
                top: 500,
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
                    <DatePicker ref={dateRef}/>
                </Stack>
            </Stack>
            <Stack width={'190px'}>
                <Typography fontSize={14}>Check-out</Typography>
                <DatePicker ref={dateRef}/>
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
    </LocalizationProvider>

  )
}

export default RoomHero

