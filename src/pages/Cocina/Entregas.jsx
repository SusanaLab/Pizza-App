import React from 'react'
import styles from './Cocina.module.css'
import ReadyItem from './ReadyItem'
import Fotter from '../../components/Fotter/Fotter'
const Entregas = () => {
  return (
    <div>
        <h1 className={styles.titulo} > Entregadas </h1>
        <div className={styles.delivery}>
         <ReadyItem/>
         <ReadyItem/>
        </div>
    </div>
  )
}

export default Entregas