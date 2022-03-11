import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext.js';
import '../styles/components/Checkout.css';

const Checkout = () => {
  const { state: { cart }, removeFromCart } = useContext(AppContext);

  const handleRemove = varproduct2 => {
    removeFromCart(varproduct2);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.qty);
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
       {cart.length > 0  ?  <h3>Lista de Pedidos:</h3> : <h3>Sin Pedidos...</h3> }
       <div className="Checkout-cabecera">
        <span>Producto</span>
        <span>Cantidad</span>
        <span>Precio</span>
        <span>Total</span>
      </div>
          {cart.map(producto => (
            <div key={producto.id} className="Checkout-item"> {/* key={producto.id} = Creamos un id unico para que no salga error */}
            <div className="Checkout-element">
              <h4>{producto.title}</h4>
              <span>{producto.qty}</span>
              <span>$ {producto.price}</span>
              <span>$ {producto.price * producto.qty}</span>
            </div>
            <button type='button' onClick={() =>handleRemove(producto)}>
              <i className='fas fa-trash-alt fa-2x'></i>
            </button>
          </div>
          ))}
        
      </div>
      {cart.length > 0 &&(
        <div className="Checkout-sidebar">
        <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
        <Link to="/checkout/information">
          <button type='button'>Continuar Pedido</button>
        </Link>
      </div>
      )}
      

    </div>
  )
}

export default Checkout;