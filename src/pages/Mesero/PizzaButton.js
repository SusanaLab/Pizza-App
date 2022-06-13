import React from 'react'
import icono  from './pizza.png'
import styles from './Mesero.module.css'
import { useState } from 'react'



const PizzaButton = ({pizza, id, price, precio, nombre, setPrecio, setNombre, setContador, handleClick}) => {



  const handleSend = e =>  {
    e.preventDefault();
    setPrecio(price)
    setNombre(pizza)
    handleClick(pizza)
   //console.log("numero" + id + pizza + price)  
   console.log(precio, nombre);
  };
  //console.log(precio, nombre, contador);

return (   
    <div >
    <button id={pizza.id}className={styles.btnPizza} onClick = {handleSend}>
    <img className={styles.btnImage}  src={icono} alt="img" />  
     {pizza} </button>
    </div>
  )
}

export default PizzaButton