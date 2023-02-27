import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Register' element={<Register />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App