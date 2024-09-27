import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Room() {
    
    const imageList = useSelector(state=>state.rooms.display)
    const [bgImage,setBgImage] = useState({picture:''})
    useEffect(()=>{
        setBgImage(imageList[0]?.picture)
    },[imageList])
    
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
                                    <Box display={'flex'} p={1} pr={7} borderRadius={'5px'} gap sx={(value.picture===bgImage)?{bgcolor:'#3F9BC0',boxShadow:' 0px 5px 5px -25px rgba(0, 0, 0, 0.25)',color:'white'}:{}}
                                        onClick={()=>setBgImage(value.picture)}>
                                        <img key={key}
                                            width={129}
                                            height={80}
                                            src={value.picture}
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