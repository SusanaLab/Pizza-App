import React from 'react'
import styles from './Nav.css'


const Navbar = () => {
  return (
<>
<div className="blog-post-navbar">
      <div className="blog-post-brand">
        <a>
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.directoalpaladar.com%2Fcultura-gastronomica%2Fque-se-diferencian-ocho-tipos-pizza-comunes-napolitana-a-pinsa-pasando-nueva-york&psig=AOvVaw0lEPQEYbCIYQ8kR-YoA_k5&ust=1654206666707000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPiQ-ZmejfgCFQAAAAAdAAAAABAD"
            alt="logo"
            width={80}
            height={80}
          />
        </a>
      </div>
      <ul>
        <li><a href="#">Sobre nosotros</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Horarios</a></li>
        <li><a href="#">Bebidas</a></li>
        <li><button className='inicio'> Iniciar sesion </button></li>
      </ul>
    </div>
</>
  )
}

export default Navbar