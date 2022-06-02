import React from 'react'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Mesero from './pages/Mesero/Mesero'
import Cocina from './pages/Cocina/Cocina'
import Administrador from './pages/Administrador/Administrador'

import { Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
<Login/>
  <Routes>

        <Route path="/" component={<Home/>} />
        <Route path="/cocina" component={<Mesero/>} />
        <Route path="/mesera" component={<Cocina/>} />
        <Route path="/administrador" component={<Administrador/>} />
        <Route path="/cocina" component={<Login/>} />
      </Routes>

    </div>
  )
}

export default App