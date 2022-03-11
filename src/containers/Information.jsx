import React, {useRef, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext.js';
import '../styles/components/Information.css';

const Information = () => {

  const {state, addToBuyer} = useContext(AppContext);
  const varform = useRef(null);
  const varnavigate = useNavigate();
  const {cart} = state; // El cart viene de nuestro state

  const handleSubmit = () => {
    // Capturamos toda la informacion que esta en ese formaulario con FORMDATA
    const formData = new FormData(varform.current);
    const buyer = {
      'name': formData.get('name'),  // ('name' = la propiedad que le pusimos a cada elemento en el html
      'email': formData.get('email'),
      'address': formData.get('address'),
      'dpto': formData.get('dpto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    }
    addToBuyer(buyer);
    varnavigate('/checkout/payment')
    //console.log(buyer);

  }

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={varform}>
            <input type="text" placeholder='Nombre Completo' name='name' />
            <input type="text" placeholder='Correo Electronico' name='email' />
            <input type="text" placeholder='Dirección' name='address' />
            <input type="text" placeholder='Dpto' name='dpto' />
            <input type="text" placeholder='Ciudad' name='city' />
            <input type="text" placeholder='País' name='country' />
            <input type="text" placeholder='Estado' name='state' />
            <input type="text" placeholder='Código Postal' name='cp' />
            <input type="text" placeholder='Telefono' name='phone' />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to='/checkout'>
            Regresar
            </Link>
          </div>
          <div className="Information-next">
            <button type='button' onClick={handleSubmit}>Pagar</button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item)=> (
           <div className="Information-item" key={item.title}>
           <div className="Information-element">
             <h4>{item.title}</h4>
             <span>$ {item.price}</span>
           </div>
         </div>
        ))}
       
      </div>
    </div>
  )
}

export default Information