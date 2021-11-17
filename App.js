import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
//Importar siempre el React y useState

//Crear una variable con su valor, aqui tenemos un numero y valor 1


//Crear una function de aplicacion que luego devuelve el mensaje en la consola (en este caso suma al valor 1 + 1 = 2 y etc.)
function App() {
	//Un componente tiene que estar abajo donde estan las cosas: en una function App en el dentro
	let [numero,cambiarNumero] = useState(1);
//Function que permite a mostrar mensaje con una function de cambiar el numero 
  	function mostrarMensaje(){
    cambiarNumero(numero + 1);
    console.log(numero);
  }
//Devuelve a la pantalla en HTML con lo que cambia el numero 
  return (
    <>
      <h1>{numero}</h1>
      <button onClick={mostrarMensaje}>Click</button>
    </>
  )
}
//Devuelve un numero y el button 
export default App;
