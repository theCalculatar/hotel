import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './component/nav/Nav'
import Home from './component/home/Home'
import './App.css'
import Rooms from './component/room/Rooms'
import Footer from './component/Footer'
import RoomDetail from './component/detail/RoomDetail'
import Reservation from './component/reservation/Reservation'

function App() {

  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/room' element={<Rooms/>}></Route>
        <Route path='/room/:id' element={<RoomDetail/>}></Route>
        <Route path='/reservation/' element={<Reservation/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App
