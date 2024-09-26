import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import CardRoom from './CardRoom'

function Overview() {
  return (
    <Box width={"100%"} overflow={'hidden'} mb={7}>
        <Typography textAlign={'center'} fontWeight={600} fontSize={20} textTransform={'capitalize'} mt={7}>
            Your booking overview
        </Typography>
        <Box p={4} mx={17} mt={4} display={'flex'} flexDirection={"column"} gap={4} bgcolor={'white'} boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25);'}>
            <CardRoom/>
            <CardRoom/>
            <CardRoom/>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Box display={'flex'} mt={2} gap={2} alignItems={'center'}>
                    <Typography width={60} lineHeight={1.5} >
                        coupon code
                    </Typography>
                    <TextField
                    id="coupon"
                    variant='filled'
                    label="Enter your coupon code"
                    InputProps={{ disableUnderline: true }}
                    //   value={}
                    //   onChange={}
                    />
                    <Button variant='contained' sx={{py:1.5,px:3,fontSize:16}}>
                        apply
                    </Button>
                </Box>
                <Box gap={2} display={'flex'}>
                    <Box>
                        <Typography fontWeight={600} >
                            Total Price
                        </Typography>
                        <Typography >
                            (including 15% tax)
                        </Typography>
                    </Box>
                    <Typography color='#CD5454' fontSize={31} fontWeight={600} >
                        $569.00
                    </Typography>
                </Box>
            </Box>

        </Box>
    </Box>  )
}

export default Overview