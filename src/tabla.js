import React, { Component } from "react";

class Tabla extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                    </tr>
                </thead>
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
            </table>
        )
    }
}
export default Tabla




