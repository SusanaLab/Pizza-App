import React from 'react'
import PizzaButton from './PizzaButton'
import styles from './Mesero.module.css'
import data from '../../Data/data'
import { useState } from 'react'

const pizzas = data.pizza;
console.log(pizzas)

const Mesero = () => {
  const [name, setName] = useState();

  return (
    <div>
      <h1 className={styles.titulo} > Crea un nuevo pedido </h1>
      <div> {pizzas.map((pizza) =>{ 
            return(
              <PizzaButton />
          )})}
        
      </div>
    </div>
  )
}

export default Mesero