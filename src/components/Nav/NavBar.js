import React from 'react'
import styles from './Nav.css'
import { useNavigate } from "react-router-dom";
import entrega  from './entrega.png'

const Navbar = ({onPress}) => {
const navigate = useNavigate();
  const SingIn = (e) =>  {
    e.preventDefault();
      navigate("/login"); 
    }

  return (
<>
<div className="blog-post-navbar">
      <div className="blog-post-brand">
        <a>
          <img  
            src={entrega}
            alt="logo"
            width={50}
            height={50}
            margin={10}
          />
        </a>
      </div>
      <ul>
        <li><a href="#">Sobre nosotros</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Horarios</a></li>
        <li><a href="#">Bebidas</a></li>
        <li><button  onClick={SingIn}className='inicio'> Iniciar sesion </button></li>
      </ul>
    </div>
</>
  )
}

export default Navbar