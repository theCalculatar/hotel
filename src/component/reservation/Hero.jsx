import { Box, Card, Stack, Typography, CardMedia, CardContent, Rating, Checkbox, Input, TextField, MenuItem, Button } from '@mui/material'
import React from 'react'
import AvailabeRoom from './AvailabeRoom';
import CardRoom from './CardRoom';
import Search from '../Search';
import ForYou from './ForYou';

function ReservationHero() {


  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Typography mt={7} fontStyle={'normal'} fontWeight={600} fontSize={32} textAlign={'center'} >
            Reservation
        </Typography>
        <Typography fontSize={12} textAlign={'center'}>
            Home{">"}Reservation
        </Typography>
        <Typography textTransform={'capitalize'} mt={5} mb={2}  >
            Make a your reservation
        </Typography>

        <Search/>
    </Box>

  )
}

export default ReservationHero

