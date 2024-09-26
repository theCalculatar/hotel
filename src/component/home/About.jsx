import { Box, Typography } from '@mui/material'
import React from 'react'

function About() {
  return (
    <Box
        mt={14}
        mx={17}
        justifyContent={'space-between'}
        sx={
            {
                display:{display:'flex'}
            }
        }>
        <Box display={'flex'} width={443} alignItems={'flex-end'}>
            <img src="luxurious.jpg" width={346} height={323} alt="" />
            <img src="resort.jpg" width={346} height={167} alt="" style={{marginLeft:'-131px'}}/>
        </Box>
        <Box width={443}>
            <Box width={'25%'}
                height={3}
                bgcolor={'#866D2A'} />
            <Typography 
                fontSize={12}
                color='#737373'
                mt={1}
                fontFamily={'serif'}
             >
                RAISING COMFORT TO THE GHEST LEVEL
             </Typography>
             <Typography variant="h3"
                fontSize={32}
                fontWeight={'bold'}
                my={2}
                >
                Welcome to Monalisa Hotel
             </Typography>
             <Typography 
                color='#737373'
                ml={7}
                fontFamily={'serif'}
                fontSize={16}
                >
                The HotelLuviana is the right choice forvisitors
                who are searching for a combination of chamt.
                peace, quiet and a converient posiion from
                where to explore surroundings.
             </Typography>
             <Typography textTransform={'capitalize'} mt={3} ml={7} color='white' px={2} py={1} fontSize={14} borderRadius={50} width={'fit-content'} bgcolor={'#866D2A'}>
                read more
             </Typography>
        </Box>
    </Box>
    )
}

export default About