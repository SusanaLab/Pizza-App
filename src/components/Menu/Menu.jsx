import React from 'react'
import {useState, useEffect} from 'react';
import data from '../../Data/data';
import styles from './Menu.module.css'

const pizzas = data.pizza;
console.log(pizzas)

const Menu = (props) => {

  return (
    <>
    <h1 className={styles.titulo} > Menu </h1>
     <div className={styles.container} >{pizzas.map((pizza) =>{ 
            return(
           
            <ul className={styles.pizzaItem } key={pizza.id}>
              <div className={styles.list } > 
              <li>{pizza.name}................</li>
              <li>{pizza.description}</li>
              </div>
              <li className={styles.precio }>{pizza.price}</li>
            </ul>
            
          )})}
          </div>
    </>
  );
}

export default Menu