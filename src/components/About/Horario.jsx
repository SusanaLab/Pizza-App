import React from 'react'
import styles from './About.module.css'

const Horario = () => {
  return (
    <div className={styles.back}>
        <h1 className={styles.titul}> Horarios!!</h1>
    <h2 className={styles.dias}>Lunes a Domingo </h2>
    <h2 className={styles.horario}> 10:00 A.M a 7:30 P.M </h2>
    </div>
  )
}

export default Horario