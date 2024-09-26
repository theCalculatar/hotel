import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import { Box, Card, Stack, Typography, CardMedia, CardContent, Rating, Checkbox, Input, TextField, MenuItem, Button } from '@mui/material'

function AvailabeRoom() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const options = [
        {
            value:1,
            label:'01'
        },
        {
            value:2,
            label:'02'
        },
        {
            value:3,
            label:'03'
        },
]
  return (
    <Card sx={{display:'flex',justifyContent:'start',mx:17}}>
        <CardMedia component={'img'} sx={{width:'16rem',height:'10rem'}} image="bedroom.jpg" />
        <CardContent sx={{display:'flex', justifyContent:'space-between',width:'100%'}}>
            <Box>
                <Typography fontWeight={600} fontSize={20}>
                    Classic room
                </Typography>
                <Stack direction={'row'} my={1}>
                    <Rating value={4} size='small'/>
                    <Typography >
                        5 Reviews
                    </Typography>
                </Stack>
                <Stack direction={'row'}>
                    <Typography sx={{color:'GrayText'}}>
                        Deposit:
                    </Typography>
                    <Typography color='#3F9BC0'>
                        Available
                    </Typography>
                </Stack>
                <Stack direction={'row'}>
                    <Typography >
                        Bed:
                    </Typography>
                    <Typography >
                        01
                    </Typography>
                </Stack>                       
            </Box>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                <Box>
                    <Stack direction={'row'} alignItems={'center'} >
                        <Checkbox {...label} defaultChecked />
                        <Typography >
                            Start from:
                        </Typography>
                        <Typography >
                            $59.00
                        </Typography>
                        <Typography >
                            /Night
                        </Typography>
                        
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'} >
                        <Checkbox {...label} defaultChecked />
                        <Typography >
                            Includes breakfast:
                        </Typography>
                        <Typography >
                            $59.00
                        </Typography>
                        <Typography >
                            /Night
                        </Typography>
                        
                    </Stack>
                </Box>
                <Box ml={1.5} display={'flex'} justifyContent={'space-between'}>
                    <Stack direction={'row'} alignItems={'center'} spacing={2}>
                        <Typography >
                            Rooms:
                        </Typography>
                        <TextField
                            id="outlined-number"
                            type="number"
                            variant='standard'
                            defaultValue={1}
                            select
                            >
                                {options.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                    </Stack>
                    <Button startIcon={<CheckIcon/>} variant='contained'>Selected</Button>
                </Box>
            </Box>
        </CardContent>
    </Card>  )
}

export default AvailabeRoom