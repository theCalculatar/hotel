import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box, Container, List, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
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
            name:'Reversation',
            route:'/reversation'
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
    const links = [
        {
            name:'facebook',
            icon:<Facebook/>,
            link:'https://facebook.com'
        },
        {
            name:'twitter',
            icon:<Twitter/>,
            link:'https://twitter.com'
        },
        {
            name:'instagram',
            icon:<Instagram/>,
            link:'https:instagram.com'
        }
    ]
  return (
    <Container maxWidth={'xl'} sx={{p:0,py:4,m:0,bgcolor:'black',textAlign:'center',color:'white'}}>
        <Link style={{
            textTransform:'capitalize',

            fontSize:32,
            textDecoration:'none',
            color:'white',
            fontWeight:600
        }}>
            Monalisa Hotel
        </Link>
        <Stack direction={'row'} justifyContent={'center'}>
            <List sx={{ display:'flex',justifyContent:'start',maxWidth:'max-content'}} alignItems={'center'}>
                {
                    menuRight.map((value,key) =>{
                        return(<ListItem key={key}>
                            <Link style={{color:'white',minWidth:'max-content',textDecoration:'none',fontSize:14,fontWeight:600}} to={value.route}>{value.name}</Link>
                        </ListItem>)
                        })
                }
                {
                    menuLeft.map((value,key) =>{
                        return(<ListItem key={key}>
                            <Link style={{color:'white',minWidth:'max-content',textDecoration:'none',fontSize:14,fontWeight:600}} to={value.route}>{value.name}</Link>
                        </ListItem>)
                        }
                    )
                }
            </List>
        </Stack>
        <Stack justifyContent={'center'} direction={'column'}>
            <List sx={{display:'flex',width:'fit-content'}}>
                {
                    links.map((value,key)=>{
                        return(<ListItem key={key} sx={{color:'#3F9BC0'}}>
                            {value.icon}
                        </ListItem>)
                    })
                }
            </List>
        </Stack>
        <Typography color='#737373'>
            copyright c2024 All Rights reserved | This template is made with ❤️ by lee
        </Typography>
    </Container>
  )
}

export default Footer