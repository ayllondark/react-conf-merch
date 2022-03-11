import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import '../styles/components/Layout.css';

const Layout = (props) => {
  return (
    <div className='Main'>
        <Header />
        {props.children}
        <Footer />
    </div>
  );
}

export default Layout;