import React from 'react'
import PizzaButton from './PizzaButton'
import styles from './Mesero.module.css'
import data from '../../Data/data'
import { useState, useReducer } from 'react'

const pizzas = data.pizza;
//console.log(pizzas)



const Mesero = () => {
  const [cliente, setCliente] = useState('');
  const [especific, setEspecific] = useState('');
  const [precio, setPrecio] = useState('');
  const [nombre, setNombre] = useState('');
 const [contador, setContador] = useState(0);
 

  console.log(precio, nombre, contador);
  const handleInputCorreo= e =>  {
    e.preventDefault();
    const {value} = e.target;
    setCliente(value);
  }

  const handleInputEspecific= e =>  {
    e.preventDefault();
    const {value} = e.target;
    setEspecific(value);
  }

  const increase = () => {
    setContador(count => count + 1);
  };
 
  const decrease = () => {
    setContador(count => count - 1);
  };



  return ( 
    <>
  <h1 className={styles.titulo} > Crea un nuevo pedido </h1>
    <div className={styles.orden} >
    <div className={styles.flavorDiv} >
     
      <div className={styles.flavor} > {pizzas.map((pizza, i) =>{
        
            return(
              <PizzaButton 
              id={pizza.id} 
              price = {pizza.price} 
              pizza = {pizza.name}
              precio = {precio} 
              nombre = {nombre}
              setPrecio = {setPrecio} 
              setNombre = {setNombre}
              />
              )})}
              
        
      </div>
        <textarea value= {especific}  onChange={handleInputEspecific} placeholder='Ingresa aqui especificaciones' className={styles.textEnter} type="text" />
    </div>
    <div className={styles.ticket}>
      <input value= {cliente}  onChange={handleInputCorreo} placeholder='Ingresa aqui el nombre del cliente' className={styles.textEnter}></input>
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
        
             <tr  >
         
                <td className={styles.linea}>{nombre}  </td>
                <td> {contador}pz</td>
                <td> ${precio}</td>
                <td><button onClick={increase} > + </button></td>
                <td><button onClick={decrease} > - </button></td>
                <td><button  > Borrar </button></td>
              </tr>
  
             
             
        </tbody>
      </table>
      <div className={styles.infoTicket}>
      <div className={styles.sendKitchen}>
        <button className={styles.btnSend}> Enviar a cocina </button>
      <h3>{cliente}</h3> 
      <h3>{especific}</h3> 
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