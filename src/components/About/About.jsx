import React from 'react'
import styles from './About.module.css'
import pizza  from './pizza.png'

const About = () => {
  return (
    <div className={styles.about} >
        <div className={styles.divTittle}>
        <h1 className={styles.titulo}>Mas acerca de<br></br> nosotros!!</h1>
        <p className={styles.des}> Hola somos Pizza Barro rojo,  contamos con 15 <br></br>años de experiencia en preparar pizzas de calidad <br /> ofreciendo una aplia variedad de sabores.</p>
        </div>
        <div className={styles.pizzad} >
        <img className={styles.pizza} src={pizza} alt="github"  /> 
        </div>
    </div>
  )
}

export default About