import React from 'react'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Mesero from './pages/Mesero/Mesero'
import Cocina from './pages/Cocina/Cocina'
import Administrador from './pages/Administrador/Administrador'
import Error from './pages/Error/Error'

import { Routes, Route} from "react-router-dom";
import Entregas from './pages/Cocina/Entregas'

const App = () => {
  return (
    <div className="App">
  <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/mesera" element={<Mesero/>} />
        <Route path="/cocina" element={<Cocina/>} />
        <Route path="/entregas" element={<Entregas/>} />
        <Route path="/administrador" element={<Administrador/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/*" element={<Error/>} />
      </Routes>
    </div>
  )
}

export default App