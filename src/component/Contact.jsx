import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

function Contact() {
  return (
    <Box display={'flex'} maxHeight={440} bgcolor={'white'} >
      <img src="image.png" height={'max-content'} width={'50%'} alt="image" />
      <Box flex={1} p={6}>
        <Typography fontSize={14} textTransform={'uppercase'} >
          information
        </Typography>
        <Typography variant="h3" 
                fontSize={32}
                my={2}
                fontWeight={'bold'}>
          Contact us
        </Typography>
        <Typography mt={3} fontSize={21} color='black' >
          South Africa
        </Typography>
        <Typography mt={1}>
          269 king str, 05th floor, ultra house building Melborne. VLC 300 Australia
        </Typography>
        <Stack  mt={1} direction={'row'}>
          <Typography fontWeight={600} color='black' >
            Email:
          </Typography>
          <Typography >
            alpheusm13@gmail.com
          </Typography>
        </Stack>
        <Typography mt={3}>
          Call ready
        </Typography>
        <Typography fontWeight={600} fontSize={21}>
          +27 60 900 2005
        </Typography>

      </Box>
    </Box>
  )
}

export default Contact