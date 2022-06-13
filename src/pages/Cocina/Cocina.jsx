import React from 'react'
import styles from './Cocina.module.css'
import Orden from './Orden'
import Fotter from '../../components/Fotter/Fotter'
const Cocina = () => {
  console.log("cocina")
  return (
    <div className={styles.cocina}>
  <h1 className={styles.titulo} > Pedidos </h1>
  <div className={styles.divPedidos}>
    <Orden/>
    <Orden/>
    <Orden/>
    <Orden/>
    <Orden/>
    <Orden/>
  </div>
<Fotter/>
    </div>
  )
}

export default Cocina