import { ArrowForward, ArrowForwardIos } from '@mui/icons-material'
import { Box, Card, CardMedia, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function RoomR({room,num}) {
  return (
    <Card elevation={0} sx={{gap:9,display:'flex',width:'100%',alignItems:'start'}}>
      <CardMedia component={'img'}
        image={room.image}
        sx={{py:3}}
        height={400}/>
        <Box py={3} alignItems={'end'} flex={1} display={'flex'} flexDirection={'column'}>
            <Rating value={3.3} />
            <Typography fontWeight={500} textAlign={'end'} width={350} fontSize={41}>
              {room.name}
            </Typography>
            <Stack direction={'row'} spacing={1}>
              <Typography >Start from</Typography>
              <Typography color='#CB4F50'>R{room.price}</Typography>
              <Typography >/night</Typography>
            </Stack>
            <Typography fontSize={12} textAlign={'end'}>
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

          <Box bgcolor={'white'} mr={17} height={300} border={'1px #DADADA solid'} alignItems={'center'} py={5} justifyContent={'space-between'} gap={2} display={'flex'} flexDirection={'column'}>
            <Typography width={100} height={'100px'} sx={{transform: 'rotate(-90deg)',textAlign:'center', display:'flex',alignItems:'center'}}>
              Classic room
            </Typography>
            <Typography fontSize={16} fontWeight={600} >
              {num}
            </Typography>
      </Box>
  

    </Card>
    )
}

export default RoomR