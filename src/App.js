import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
// import SignupPage from './pages/SignUp';
// import LoginPage from './pages/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer'; 

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          {/* <Route path="/" element={<LoginPage/>} /> */}
            {/* <Route path="/" element={<SignupPage/>} /> */}
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
