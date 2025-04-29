/*import reactlogo from './assets/react.svg'
import vitelogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import Titre1 from './Component/Titre1'
import Entate from './Component/Entate'
import Titre from './Component/Titre'
import Paragraphe from './Component/paragraphe'
import Peidedepage from './Component/peidedepage'
import Compteur from './Component/compteur'
import Text from './Component/Text'
import Message from './Component/Message '
const calculatesum=() =>{
    const num1=parseFloat(document.getElementById("num1").value)|| 0;
    const num2=parseFloat(document.getElementById("num2").value)|| 0;
    document.getElementById("result").textContent ='Resultat: ${num1 +num2}';
  };
  /*
  const [count, setCount] = useState(0)

  return (
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo">
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
    */
   /*return(
   <div>
   <h1>calculateur de somme</h1>
   <input type="number" id="num1" placeholder="nombre 1"/>
   <input type="number" id="num2" placeholder="nombre 2"/>
   <button onClick={calculatesum}>calculer</button>
   <p id="result">Resultat: </p>
   à
   </div>);
export default App
function App()
{
return <div><Titre1/><Titre/><Entate/><Paragraphe/> <Peidedepage/><Compteur/><Text/><Message/></div>;
}
}
export default App*/
import React from "react";

function App() {
  return (
    <div className="app">
      <h1>Application React</h1>
      <Phrase/>
      <Compteur/>
      </div>
  );
}
export default App;
