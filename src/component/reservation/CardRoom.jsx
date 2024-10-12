import { Box, Card, CardContent, CardMedia, Rating, Stack, Typography } from '@mui/material'
import React from 'react'

function CardRoom({reservation}) {
  return (
    <Card sx={{display:'flex',p:0,borderRadius:0}} >
        <CardMedia
            image={reservation.picture}
            component={'img'}
            sx={{width:'9rem',height:'max-contain',objectFit:'cover'}}
        />
        <Box sx={{display:'flex'}} justifyContent={'space-between'} pt={1} px={2} width={'100%'} >
            <Box>
                <Stack direction={'row'} alignItems={'center'}>
                    <Typography fontWeight={600} fontSize={20}>
                        {reservation.name}
                    </Typography>
                    <Rating value={4} size='small'/>
                    <Typography >
                        {reservation.reviews} Reviews
                    </Typography>
                </Stack>
                <Stack direction={'row'}>
                    <Typography sx={{color:'GrayText'}}>
                        Includes:
                    </Typography>
                    <Typography color='#3F9BC0'>
                        {reservation.meal?'Breakfast':'N/a'}
                    </Typography>
                </Stack>
                <Stack direction={'row'}>
                    <Typography >
                        Bed:
                    </Typography>
                    <Typography  >
                        01
                    </Typography>
                </Stack>                       
            </Box>
            <Box>
                {/* <Box> */}
                    <Typography textAlign={'center'}  fontWeight={600} fontSize={20}>
                        Price
                    </Typography>
                    <Typography color='#CD5454' >
                        R{reservation.price}
                    </Typography>
                {/* </Box> */}
    
            </Box>           
        </Box>
    </Card>
  )
}

export default CardRoom