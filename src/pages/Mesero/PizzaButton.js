import React from 'react'
import icono  from './pizza.png'
import styles from './Mesero.module.css'




const PizzaButton = ({pizza}) => {
  console.log(pizza)
return (   
    <div >
    <button className={styles.btnPizza}>
    <img className={styles.btnImage}  src={icono} alt="img" />  
     {pizza} </button>
       
    </div>
  )
}

export default PizzaButton