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
import TablaComponentesSimplesProps from "./tablaComponentesSimplesProps"
import TablaComponentesSimplesState from "./tablaComponentesSimplesState.js"
import Formulario from "./formulario.js"
// import personajes from "./personajes.json";

class App extends Component {

  /** Objeto para utilizar en state */
  // state = {
  //   personajes: [
  //     {
  //       name: "Payton Hobart"
  //     },
  //     {
  //       name: "Wendy Carr"
  //     },
  //     {
  //       name: "Mina"
  //     },
  //     {
  //       name: "Drácula"
  //     },
  //     {
  //       name: "Once"
  //     },
  //     {
  //       name: "Jim Hopper"
  //     }
  //   ]
  // }
  /** Utilizo un fichero Json con los datos de los personajes */
  /**state = { personajes }*/

  /** dojo la coleccion vacia para rellenarla mediante un formulario  */
  state = { personajes: [] }

  /** Metodo para manejar los datos del formualrio */
  manejarEnvio = personaje => {
    this.setState({ personajes: [...this.state.personajes, personaje] });
  }


  /** Método para borrar personajes */
  borrarPersonaje = indice => {
    const { personajes } = this.state;
    this.setState({
      personajes: personajes.filter((personaje, i) => {
        return i !== indice;
        /** Devuelve todas las que no tiene que borar??*/
      })
    });
  }
  render() {
    /** Colocacion de objetos con nomenclatura json para utilizar con props */
    const actoresactrices = [
      {
        nombre: "Joel",
        apellidos: "Edgtron"
      },
      {
        nombre: "Carmen",
        apellidos: "Maura"
      },
      {
        nombre: "Luis",
        apellidos: "Tosar"
      },
      {
        nombre: "Chloe",
        apellidos: "Grace Moretz"
      }
    ]
    const { personajes } = this.state
    /** Para utulizar el state */

    return (
      <div className="App">
        <h1>¡Funciona!</h1>
        <h2>Tabla creada mediante un componente de clase que no utiliza componentes simples</h2>

        <Tabla />
        <h2>Tabla creada mediante un componente de clase que utiliza componentes simples</h2>
        <TablaComponentesSimples />
        <h2>Tabla creada mediante un componente de clase que utiliza clase de parametros con props</h2>
        <TablaComponentesSimplesProps datosActoresActrices={actoresactrices} />
        <h2>Tabla creada mediante componentes simples (con state y que permite borrar elementos), que utiliza dos elementos simples</h2>
        <TablaComponentesSimplesState datosPersonajes={personajes} borrarPersonaje={this.borrarPersonaje} />
        <h2>Añadir nuevo</h2>
        <Formulario manejarEnvio={this.manejarEnvio} />
      </div>

    );
  }
}
export default App
