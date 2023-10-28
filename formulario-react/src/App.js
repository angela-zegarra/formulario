import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  
  return(
    <form action="../form-result.php" target="_blank">
      <h1>Formulario de Venta</h1>
      <div class= "elem-gropup">
        <label for= "name">Cliente</label>
        <input type="text" id="name" name="visitor_name" planceholder="Nombre de ejemplo" required></input>
      </div>
      <br></br>
      <div class= "elem-gropup">
        <label for= "name">Producto</label>
        <input type="text" id="name" name="visitor_name" planceholder="Nombre de ejemplo" required></input>
      </div>
      <br></br>
      <div class="elem-group">
        <label for="departament-selection">Fecha</label>
        <input type="date"></input>
      </div>
      <br></br>
      <table class="default">

  <tr>

    <th scope="row">Id</th>

    <th>Producto</th>

    <th>Cantidad</th>

    <th>Precio</th>

    <th>Total</th>

  </tr>

  <tr>

    <td>Camila</td>

    <td>Audifonos</td>

    <td>2</td>

    <td>S/59.90</td>

    <td>S/119.80</td>

  </tr>

</table>
 <br></br>

<tr>

<th scope="row"><h1>SUBTOTAL:  </h1></th>
<td></td>
<td>S/119.80</td>

</tr>
      
    </form>
  )
}

export default App;
