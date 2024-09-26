import { Box, Container, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Clients() {
  return (
    <Box mx={17} marginY={7} textAlign={'center'} justifyContent={'center'} display={'flex'}>
        <Box bgcolor={'white'} py={3}  width={800}>
            <Typography fontSize={14} textTransform={'uppercase'} >
                testimonials
            </Typography>    
            <Typography variant="h3" 
                fontSize={32}
                my={2}
                fontWeight={'bold'}>
                What client say
            </Typography>
            <Typography mx={9}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
            </Typography>
            <Rating value={3.3} sx={{mt:3}}/>
            <Stack direction={'row'} justifyContent={'center'} spacing>
                <Typography >
                    Adma levine
                </Typography>
                <FiberManualRecordIcon sx={{width:10}}/>
                <Typography >
                    Review from
                </Typography>
                <Typography color='grey'>
                    TripAdvisior
                </Typography>
            </Stack>
        </Box>
    </Box>
    )
}

export default Clients