import React from 'react';

const Product = ({ totproduct, varhandleAddToCart }) => {  // totproduct = Variable que obtenemos desde Products.jsx
  return (
    <div className='Products-item'>
        <img src={totproduct.image} alt={totproduct.title} />
        <div className="Product-item-info">
            <h2>
                {totproduct.title}
            <span>$ {totproduct.price}</span>
            </h2>
            <p>{totproduct.description}</p>
        </div>
        <button type='button' onClick={varhandleAddToCart(totproduct)}>Comprar</button>
    </div>
  )
}

export default Product;