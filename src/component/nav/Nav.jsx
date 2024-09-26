import { Box, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

    const navCss = {
        height: '90px',
        display:'flex',
        boxShadow: '0px 25px 25px -25px rgba(0, 0, 0, 0.25)',
        bgColor:'white'
    }
    const menuLeft = [
        {
            name:'Home',
            route:'/'
        },
        {
            name:'Our room',
            route:'room'
        },
        {
            name:'About us',
            route:'/about'
        }
    ]
    const menuRight = [
        {
            name:'Reservation',
            route:'/reservation'
        },
        {
            name:'Blog',
            route:'/blog'
        },
        {
            name:'Contact',
            route:'/contact'
        }
    ]
  return (
    <Box sx={navCss} justifyContent={'space-between'} px={15} alignItems={'center'}>
        <List sx={{display:'flex',justifyContent:'start',maxWidth:'max-content'}}>
            {   
                menuLeft.map((value,key) =>{
                    return(<ListItem key={key}>
                        <Link style={{color:'black',minWidth:'max-content',textDecoration:'none',fontSize:14,fontWeight:600}} to={value.route}>{value.name}</Link>
                    </ListItem>)
                    }
                )
            }
        </List>
        <Link style={{textDecoration:'none',color:'black',cursor:'pointer'}} >        
            <Box>
                <Typography fontSize={20} fontWeight={700} >
                    Monalisa
                </Typography>
                <Typography fontSize={14} fontWeight={600}>
                    Hotel&Resort
                </Typography>
            </Box>
        </Link>
        <List sx={{ display:'flex',justifyContent:'start',maxWidth:'max-content'}} alignItems={'center'}>
            {   
                menuRight.map((value,key) =>{
                    return(<ListItem key={key}>
                        <Link style={{color:'black',minWidth:'max-content',textDecoration:'none',fontSize:14,fontWeight:600}} to={value.route}>{value.name}</Link>
                    </ListItem>)
                    }
                )
            }
        </List>
    </Box>
  )
}

export default Nav