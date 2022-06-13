import React from 'react'
import styles from './Cocina.module.css'
import check  from './check.png'

const Orden = () => {
  return (
    <div className={styles.divOrden}>
        <h2 className={styles.ordenName}> Nombre: </h2>
        <h3 className={styles.ordenTime}> Hora de pedido: </h3>
        <table className={styles.tabla} >
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
   
             <tr>
                <td className={styles.linea}>  pollo </td>
                <td> 1 pz</td>
                <td> 110$ </td>
              </tr>
      
        </tbody>
      </table>
        <p className={styles.ordenInfo}>
            Informacion adicional 
        </p> 
        <div className={styles.icono}><img className={styles.btnReady}  src={check} alt="img" />  </div>
        

    </div>
  )
}

export default Orden