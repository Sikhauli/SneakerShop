import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Circles } from "react-loading-icons";
import { useSelector } from "react-redux";
import Login from "./pages/Login/index" 
import Register from "./pages/register/index";
import Home from "./pages/Home/index";
import Cart from "./pages/Cart/index"
import Brand from "./pages/Brand/index.jsx"
import Account from "./pages/Account/index.jsx"
import Payment from "./pages/Payment/index.jsx"

function App() {
  const loading = useSelector((state) => state.loading.value);

  const LoadingScreen = () => {
    return (
      <div
        className={`fixed inset-0 z-[10000] flex items-center justify-center backdrop-blur-sm bg-black/10`}
      >
        <Circles fill="#006FEE" height="3rem" speed={2} />
      </div>
    );
  };

  return (
    <Router>
      <div className='overflow-hidden'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/account' element={<Account />} />
          <Route path='/payment-method' element={<Payment />} />
          <Route path="/brand/:id" element={<Brand />} />
        </Routes>
        {loading && <LoadingScreen />}
      </div>
    </Router>
  );
}

export default App;





