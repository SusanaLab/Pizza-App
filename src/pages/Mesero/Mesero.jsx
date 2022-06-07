import React from 'react'
import PizzaButton from './PizzaButton'
import styles from './Mesero.module.css'
import data from '../../Data/data'
//import { useState } from 'react'

const pizzas = data.pizza;
console.log(pizzas)

const Mesero = () => {


  return ( 
    <>
  <h1 className={styles.titulo} > Crea un nuevo pedido </h1>
    <div className={styles.orden} >
    <div className={styles.flavorDiv} >
     
      <div className={styles.flavor} > {pizzas.map((pizza) =>{
        
            return(
              <PizzaButton  pizza = {pizza.name} />
          )})}
        
      </div>
        <input className={styles.textEnter} type="text" />
    </div>
    <div className={styles.ticket}>
      <input className={styles.textEnter}></input>
      <div className={styles.tableTicket}>
      <table className="tabla">
        <thead>
          <tr>
            <th>
              Sabor
            </th>
            <th>
              Cantidad
            </th>
            <th>
              Total
            </th>
          </tr>
        </thead>
        <tbody>
              <tr >
                <td>Mexicana</td>
                <td>1pz</td>
                <td> $110</td>
                <td><button>X</button></td>
              </tr>
        </tbody>
      </table>
      <div className={styles.infoTicket}>
      <div className={styles.sendKitchen}>
        <h3>Susana Garcia</h3>
        <button> Enviar a cocina </button>
      </div>
      <h3> Total $110 </h3>
      </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Mesero