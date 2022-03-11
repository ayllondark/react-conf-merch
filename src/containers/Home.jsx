import React from 'react';
import Metahead from '../components/Metahead.jsx';
import Products from '../components/Products.jsx';
import initialState from '../initialState.js';

const meta = (
  <Metahead
    title="Productos"
    description="Encuentra todos tus productos favoritos"
    image="https://davecast.s3.amazonaws.com/avatarnegativo.jpg"
    url="https://reactconf.xyz/"
  />
);

const Home = () => {
  return (
    <>
    {meta}
    <Products productsJSON={initialState.productsJSON} />
    </>
  );
}

export default Home;