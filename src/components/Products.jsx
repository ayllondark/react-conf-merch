import React, {useContext} from 'react';
import Product from './Product.jsx';
import AppContext from '../context/AppContext.js';
import '../styles/components/Products.css';

const Products = () => {
  // Agregamos nuestro context
  const {state, addToCart} =  useContext(AppContext);
  //Sacamos los productos del estado
  const { productsJSON } = state;

  // Funcion que se va a encargar de manejar lo que viene hacer agregar al carrito
  const handleAddToCart = (varproduct1) => () => {
    addToCart(varproduct1);
  }

  return (
    <div className="Products">
        <div className="Products-items">
            { productsJSON.map(varproduct => (
                <Product key={varproduct.id} totproduct={varproduct} varhandleAddToCart={handleAddToCart} />
            )) }
        </div>
    </div>
  )
}

export default Products;