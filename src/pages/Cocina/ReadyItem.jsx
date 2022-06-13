import React from 'react'
import styles from './Cocina.module.css'

const ReadyItem = () => {
   let tasks= ['task1', 'task2', 'task3', 'task4', 'task5', 'task6'];
  return (
    <div className={styles.deliveryItem}> 
     <h2> Hora de pedido: </h2>
     <h2> Hora de entrega: </h2> 
     <ul>
        <li>{tasks[0]}</li>
        <li>{tasks[1]}</li>
        <li>{tasks[2]}</li>
     </ul>
   
     <h2> Nombre: </h2>
     <h2> Extra info: </h2>
    </div>
  )
}

export default ReadyItem