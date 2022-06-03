import React from 'react'
import pizza  from './pizza.png'
import styles from './Mesero.module.css'
import data from '../../Data/data';



const PizzaButton = ({name}) => {
return (   
    <div>
    <button className={styles.btnPizza}>
    <img className={styles.btnImage}  src={pizza} alt="img" />  
     {pizza.name}  pollo </button>
       
    </div>
  )
}

export default PizzaButton