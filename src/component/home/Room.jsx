import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

function Room() {
    
    const imageList = [
        {
            image:'bedroom.jpg',
            name:'classic room',
            price:30
        },
        {
            image:'bedroom2.jpg',
            name:'Grand deluxe Room',
            price:59
        },
        {
            image:'resort.jpg',
            name:'Ultra superior Room',
            price:69
        }
    ]
    const [bgImage,setBgImage] = useState(imageList[0].image)
  return (
    <Box display={'flex'}  bgcolor={'white'} mt={7}>
        <Box>
            <Box flex={1} ml={17} py={3}>
                <Typography fontSize={12} textTransform={'uppercase'}>
                    Discover our rooms
                </Typography>
                <Typography fontWeight={600} fontSize={32}>
                    Luxury interior
                </Typography>
                <Box mr={7}>
                    <Box display={'flex'} flexDirection={'column'} gap >
                        {
                            imageList.map((value,key)=>{
                                return(
                                    <Box display={'flex'} p={1} pr={7} borderRadius={'5px'} gap sx={(value.image===bgImage)?{bgcolor:'#3F9BC0',boxShadow:' 0px 5px 5px -25px rgba(0, 0, 0, 0.25)',color:'white'}:{}
                                                }
                                        onClick={()=>setBgImage(value.image)}>
                                        <img key={key}
                                            width={129}
                                            height={80}
                                            src={value.image}
                                            alt={value}
                                            />
                                        <Stack justifyContent={'center'}>
                                            <Typography fontWeight={600} textTransform={'capitalize'}>{value.name}</Typography>
                                            <Typography >Staring from:${value.price}/night</Typography>
                                        </Stack>
                                    </Box>
                                        )
                            })
                        }
                    </Box>

                


                </Box>
            </Box>

            
        </Box>
        <Box flex={2} sx={{backgroundImage:`url(${bgImage})`,backgroundPosition:'center',backgroundSize:'fill'}}/>
    </Box>
)
}

export default Room