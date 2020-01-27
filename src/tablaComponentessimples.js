import React, { Component } from 'react';


const TablaCabezera = () => {
    return (
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
            </tr>
        </thead>
    )
}
const TablaCuerpo = () => {
    return (
        <tbody>
            <tr>
                <td>Cristian</td>
                <td>Piquero</td>
            </tr>
            <tr>
                <td>Amalla</td>
                <td>Salamanca</td>
            </tr>
            <tr>
                <td>Arturo</td>
                <td>Fernandez</td>
            </tr>
            <tr>
                <td>Arturo</td>
                <td>Bals</td>
            </tr>
        </tbody>
    )
}

class TablaComponentesSimples extends Component{
    render(){
        return(
            <table>
                <TablaCabezera />
                <TablaCuerpo />
            </table>
        )
    }
}
export default TablaComponentesSimples;
 
