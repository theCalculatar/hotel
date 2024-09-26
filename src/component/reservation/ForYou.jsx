import { Box, Typography } from '@mui/material'
import React from 'react'
import AvailabeRoom from './AvailabeRoom'

function ForYou() {
  return (
    <Box>
        <Typography textAlign={'center'} textTransform={'capitalize'} fontSize={20} fontWeight={600} mb={4}>
            Rooms avaibale
        </Typography>
        <Box display={'flex'} flexDirection={'column'} gap={2}  >
            <AvailabeRoom/>
            <AvailabeRoom/>
            <AvailabeRoom/>
        </Box>
    </Box>
  )
}

export default ForYou