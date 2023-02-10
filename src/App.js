import { Header } from './Componentes/Header';
import { Boton } from './Componentes/Boton';
import { Panel } from './Componentes/Panel';
import { useState } from 'react';

import './App.css';
import '../src/Estilos/Panel.css';
import './Estilos/Header.css'
import './Estilos/Boton.css'


function App() {

  const [n1, setN1] = useState(`${0}`)
  const [n2, setN2] = useState( `${0}`);
  const [esPrimer, setEsPrimer] = useState(true);
  const [concluido, setConcluido] = useState(false);
  const [op, setOp] = useState("none");
  const [hayPunto, setHayPunto] = useState(false);
  const [resultado, setResultado] = useState(0);
  //let arregloSuma = [null, null];


  
  const operacion = (op) => {
    setEsPrimer(false);
    setHayPunto(false);
    setOp(op);
  }
  const mostrarResultado = () => {
    setConcluido(true);
    let n1Int = parseFloat(n1);
    let n2Int = parseFloat(n2);
    if(op === 'suma'){
      setResultado(n1Int+n2Int);
      console.log("funciona");
    }
    else if(op === 'resta'){
      setResultado(n1Int+n2Int);
    }
    else if(op === 'multiplicacion'){
      setResultado(n1Int*n2Int);
    }
    else if(op === 'division'){
      if(n2Int > 0 || n2Int < 0){
        setResultado(n1Int/n2Int);
      }
      else{
        setResultado('SYNTAX ERROR')
      }
    }
  }
  /*
  const sumar = () =>{
    console.log("SUMA");
  }
  const restar = () => {
    console.log("RESTA");
  }
  const multiplicar = () => {
    console.log("Multiplicar");
  }
  const dividir = () =>{
    console.log("dividir");
  }*/
  
  function verificar(n, esPrimer, hayPunto){
    if(esPrimer === true){
      if(n === '.' && hayPunto === true){
        console.log("Not allowed");
      }
      else{
        if(n === '.'){
          setHayPunto(true);
        }
        if(n1 === '0' && n !== '.'){
          setN1(`${n}`);
        }
        else if(n1 === '0.'){
          setN1(`${n1}${n}`);
        }
        else{
          setN1(`${n1}${n}`);
        }
      }
    }
    else{
      if(n === '.' && hayPunto === true){
        console.log("Not allowed");
      }
      else{
        if(n === '.'){
          setHayPunto(true);
        }
        if(n2 === '0' && n !== '.'){
          setN2(`${n}`);
        }
        else if(n1 === '0.'){
          setN2(`${n2}${n}`);
        }
        else{
          setN2(`${n2}${n}`);
        }
      }
    }
    
  }
  const borrar = () => {
    setConcluido(false);
    setEsPrimer(true);
    setN1(`${0}`);
    setN2(`${0}`);
    setOp('none');
  }
  return (
    <div className="App">
      <Header/>
      <Panel
      numero1={esPrimer? n1:concluido?resultado:n2}
      />
      <div className='calculadora'>
      <Boton
        nombreOperacion="1"
        claseOperacion="estilo-btn estilo-numero"
        metodoOperacion={() => verificar(1, esPrimer)}
      />
      <Boton
        nombreOperacion="2"
        claseOperacion="estilo-btn estilo-numero"
        metodoOperacion={() => verificar(2, esPrimer)}
      />
      <Boton
        nombreOperacion="3"
        claseOperacion="estilo-btn estilo-numero"
        metodoOperacion={() => verificar(3, esPrimer)}
      />
      <Boton
        nombreOperacion = "+"
        claseOperacion = "estilo-btn estilo-operacion"
        metodoOperacion = {() => operacion('suma')}
      />
      <Boton
        nombreOperacion="4"
        claseOperacion="estilo-btn estilo-numero"
        metodoOperacion={() => verificar(4, esPrimer)}
      />
      <Boton
        nombreOperacion="5"
        claseOperacion="estilo-btn estilo-numero"
        metodoOperacion={() => verificar(5, esPrimer)}
      />
      <Boton
        nombreOperacion="6"
        claseOperacion="estilo-btn estilo-numero"
        metodoOperacion={() => verificar(6, esPrimer)}
      />
      <Boton
        nombreOperacion = "-"
        claseOperacion = "estilo-btn estilo-operacion"
        metodoOperacion = {() => operacion('resta')}
      />
      <Boton
        nombreOperacion="7"
        claseOperacion="estilo-btn estilo-numero"
        metodoOperacion={() => verificar(7, esPrimer)}
      />
      <Boton
        nombreOperacion="8"
        claseOperacion="estilo-btn estilo-numero"
        metodoOperacion={() => verificar(8, esPrimer)}
      />
      <Boton
        nombreOperacion="9"
        claseOperacion="estilo-btn estilo-numero"
        metodoOperacion={() => verificar(9, esPrimer)}
      />
      <Boton
        nombreOperacion="X"
        claseOperacion="estilo-btn estilo-operacion"
        metodoOperacion={() => {operacion('multiplicacion')}}
      />
      <Boton
        nombreOperacion="="
        claseOperacion="estilo-btn estilo-igual"
        metodoOperacion={esPrimer?()=>{borrar()}:() => {mostrarResultado()}}
      />  
      <Boton
        nombreOperacion="0"
        claseOperacion="estilo-btn estilo-numero"
        metodoOperacion={() => verificar(0, esPrimer)}
      />
      <Boton
        nombreOperacion="."
        claseOperacion="estilo-btn estilo-numero"
        metodoOperacion={() => verificar('.', esPrimer, hayPunto)}
      />
      <Boton
        nombreOperacion="÷"
        claseOperacion="estilo-btn estilo-operacion"
        metodoOperacion={() => operacion('division')}
      />
      <Boton
        nombreOperacion="C"
        claseOperacion="estilo-btn estilo-clear"
        metodoOperacion={() => borrar()}
      />
      </div>
    </div>
  );
}

export default App;
