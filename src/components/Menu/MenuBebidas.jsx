import React from 'react'
import refresco  from './refresco.jpg'
import styles from './Menu.module.css'

const MenuBebidas = () => {
  return (
    <div className={styles.conten} >
        <img className={styles.imgP}  src={refresco} alt="img" /> 
        <div className={styles.bebidas}>
            <h1 className={styles.titulo} > Bebidas </h1>
            <div className={styles.bebida}>
                <h2 className={styles.subtitulo} > Jugo boing </h2>
                <ul className={styles.sabores}>
                    <li>Guayaba </li>
                    <li> Mango</li>
                    <li> Uva</li>
                    <li> Manzana </li>
                    <li> Fresca </li>
                </ul>
                <h3 className={styles.price} > 16$ </h3>
            </div>
            <div className={styles.bebida}>
                <h2 className={styles.subtitulo}> Refresco </h2>
                <ul className={styles.sabores} >
                    <li> Coca cola </li>
                    <li> Fresca </li>
                    <li> Fanta </li>
                    <li> Sprite </li>
                    <li> Sangria </li>
                    <li> Manzanita </li>
                </ul>
                <h3 className={styles.price}> 16$ </h3>
            </div>
        </div>
    </div>
  )
}

export default MenuBebidas