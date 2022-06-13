import React from 'react'
import robot  from './robot.webp'
import styles from './Error.module.css'
const Error = () => {
  return (
    <div className={styles.er}>
    <h1 className={styles.error4} > 404 </h1>
    <h2 className={styles.page} >Page not found</h2>
    <h3 className={styles.des}>Lo sentimos pero la pagina que buscas no existe.</h3>
    <img className={styles.imgP}  src={robot} alt="img" /> 
    </div>
  )
}

export default Error