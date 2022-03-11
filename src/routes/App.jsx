import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// <BrowserRouter> = Nos va a permitir encapsular todo lo que va hacer la navegacion de nuestro aplicativo
// <Switch> = Mostrar con exactitud el primero que coincida con la ruta que estoy eligiendo
// <Route> = Las rutas
import Home from '../containers/Home.jsx';
import Checkout from '../containers/Checkout.jsx';
import Information from '../containers/Information.jsx';
import Payment from '../containers/Payment.jsx';
import Success from '../containers/Success.jsx';
import NotFound from '../containers/Notfound.jsx';

import Layout from '../components/Layout.jsx';
import AppContext from '../context/AppContext.js';
import useInitialState from '../hooks/useInitialState.js';

const App = () => {
  const initialState = useInitialState(); // Esto nos dvolvera varios elementos que ene ste caso es el ESTADO y 2 funciones(addtocart y removefromcart) 
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
              {/* <Route exact path="/" component={Home} /> */}
              <Route path="/" element={<Home />} />
              <Route  path="/checkout" element={<Checkout />} />
              <Route  path="/checkout/information" element={<Information />} />
              <Route  path="/checkout/payment" element={<Payment />} />
              <Route  path="/checkout/success" element={<Success />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App;