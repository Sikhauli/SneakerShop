import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import {
  API,
  AUTH_ENDPOINTS,
  getAxiosError,
} from "./helpers/constant.js";

import { Circles } from "react-loading-icons";
import Login from "./pages/Login/index" 
import Register from "./pages/register/index";
import Home from "./pages/Home/index";
import Cart from "./pages/Cart/index"
import Brand from "./pages/Brand/index.jsx"
import Account from "./pages/Account/index.jsx"
import Payment from "./pages/Payment/index.jsx"
import Admin from "./pages/Admin/index.jsx"

import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "./redux/slices/loadingSlice.js";
import { setUser } from "./redux/slices/userSlice.js";

function App() {
  const loading = useSelector((state) => state.loading.value);
  const currentUser = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  // retrieve user data on page refresh
  useEffect(() => {
    if (!currentUser) {
      dispatch(showLoading());
      API.get(AUTH_ENDPOINTS.authenticate)
        .then((response) => {
          console.log("response :", response.data)
          const { password, ...temp } = response.data;
          dispatch(setUser(temp));
        })
        .finally(() => dispatch(hideLoading()));
    }
  }, []);

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
          <Route path='/admin' element={<Admin />} />
          <Route path='/payment-method' element={<Payment />} />
          <Route path="/brand/:id" element={<Brand />} />
        </Routes>
        {loading && <LoadingScreen />}
      </div>
    </Router>
  );
}

export default App;





