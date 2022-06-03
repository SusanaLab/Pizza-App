import React from 'react'
import Navbar from '../../components/Nav/NavBar'
import About from '../../components/About/About'
import Fotter from '../../components/Fotter/Fotter'
import Menu from '../../components/Menu/Menu'
import MenuBebidas from '../../components/Menu/MenuBebidas'
import Horario from '../../components/About/Horario'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <About/> 
         <Horario/>
        <Menu/>
        <MenuBebidas/>
      
        <Fotter/>
    </div>
  )
}

export default Home