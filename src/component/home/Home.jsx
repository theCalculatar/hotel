import { Box } from '@mui/material'
import React from 'react'
import Hero from '../hero/Hero'
import Clients from '../clients/Clients'
import About from './About'
import Contact from '../Contact'
import Footer from '../Footer'
import Room from './Room'

function Home() {
  return (
    <Box>
        <Hero/>
        <About/>
        <Room/>
        <Clients/>
        <Contact/>
    </Box>
  )
}

export default Home