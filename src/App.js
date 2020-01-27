// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import Tabla from "./tabla.js";
import TablaComponentesSimples from "./tablaComponentessimples";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>¡Funciona!</h1>
        <h2>Tabla creada mediante un componente de clase que no utiliza componentes simples</h2>
        
        <Tabla />
        <h2>Tabla creada mediante un componente de clase que utiliza componentes simples</h2>
        <TablaComponentesSimples/>
      </div>

    );
  }
}
export default App
