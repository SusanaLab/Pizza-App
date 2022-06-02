import React from 'react'
import { useState } from 'react';
import styles from './Login.module.css'
import pi  from './pi.jpg'
import firebase from 'firebase';
//import { useNavigate } from "react-router";

const Login = () => {
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    //const [userId, setUserId] = useState('');
    
    const handleInputCorreo= e =>  {
      e.preventDefault();
      const {value} = e.target;
      //console.log( value);
      setCorreo(value);
    }
    const handleInputContraseña= e =>  {
      e.preventDefault();
      const {value} = e.target;
      //console.log( value);
      setContraseña(value);
    }
console.log(correo)
console.log(contraseña)
    const SingIn = (e) =>  {
      e.preventDefault();
      firebase.auth().signInWithEmailAndPassword(correo, contraseña)
      .then((userCredential) => {
        console.log ("Signed in");
       /*  let user = userCredential.user;
        setUserId(user) */
        //navigate("/mesera"); 
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
    }; 

   return (
     <div className={styles.divLog}>
         <div className={styles.login}>
      <h1 className={styles.sing}>Bienvenido  </h1>
      <form className={styles.formRegistro}>
      <h2 className={styles.text}>Usuario</h2>
      <input  className={styles.inputL}value= {correo} onChange={handleInputCorreo}  type="text" placeholder="example@gmail.com"/>
      <h2 className={styles.text} >Contraseña</h2>
      <input className={styles.inputL} type="password" name="password" value= {contraseña}  onChange={handleInputContraseña} placeholder="**********"/>
      </form>
       <button className={styles.btnS} onClick = {SingIn} >Entrar</button>
      </div>
      <div className={styles.imgDiv}>
      <img className={styles.imgP}  src={pi} alt="img" />
      </div>
     </div>
   );
 
}

export default Login