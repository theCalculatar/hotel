import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function Search() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={
            {
                width: 800,
                left: 'calc(50% - 800px/2)',
                mb: 10,
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
    </LocalizationProvider >

)
}

export default Search