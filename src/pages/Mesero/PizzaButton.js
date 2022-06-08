import React from 'react'
import icono  from './pizza.png'
import styles from './Mesero.module.css'
import { useState, useReducer } from 'react'



const PizzaButton = ({pizza, id, price, precio, nombre, setPrecio, setNombre, handleClick}) => {


const handleSend = e =>  {
  handleClick(pizza)
  e.preventDefault();
  setPrecio(price)
  setNombre(pizza)
 console.log("numero" + id + pizza + price)  
 console.log(pizza)
 //console.log(precio, nombre, contador);
};

return (   
    <div >
    <button id={pizza.id}className={styles.btnPizza} onClick = {handleSend}>
    <img className={styles.btnImage}  src={icono} alt="img" />  
     {pizza} </button>
    </div>
  )
}

export default PizzaButton