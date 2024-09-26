import { ArrowForwardIos, Reviews, Translate } from '@mui/icons-material'
import { Box, Card, CardMedia, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function RoomL({room,num}) {
  // console.log(props)
  return (
    <Card elevation={0} sx={{gap:9,display:'flex',bgcolor:'transparent',alignItems:'start'}}>
      <Box bgcolor={'white'} py={5} ml={17} border={'1px #DCDCDC solid'} height={300} alignItems={'center'} justifyContent={'space-between'} gap={2} display={'flex'} flexDirection={'column'}>
        <Typography width={100} height={100} sx={{transform: 'rotate(-90deg)',textAlign:'center', display:'flex',alignItems:'center'}}>
          {room.type}
        </Typography>
        <Typography fontSize={16} fontWeight={600} >
          {num}
        </Typography>
      </Box>
      <Box sx={{py:3}}>
        <Rating value={3.3} />
        <Typography fontWeight={500} width={350} fontSize={41}>
          Luxury with ultra
          superior room
        </Typography>
        <Stack direction={'row'} spacing={1}>
          <Typography >Start from</Typography>
          <Typography color='#CB4F50'>$99.99</Typography>
          <Typography >/night</Typography>
        </Stack>
        <Typography width={350} fontSize={12} >
          Ullamcorper eros ac ultrices imperdiet Vivamus eros nibh,
          dictum sed venenatis vitae, ornare eget magna. Etiam mattis,
          felis eu interdum posuere, justo neque dictum saplen, eu
          luctus neque nulla non ante. Quisque pharetra facilisis..
        </Typography>
        <Stack mt={4} direction={'row'} justifyContent={'start'} alignItems={'center'} gap={1}>
              <Link to={`/room/${room.id}`} style={{textDecoration:'none', color:'black',fontSize:12}}>View details</Link>
              <ArrowForwardIos sx={{width:10}} />
        </Stack>
      </Box>
      <CardMedia component={'img'} image='bedroom.jpg'
        height={400} sx={{py:3}}/>

    </Card>
    )
}

export default RoomL