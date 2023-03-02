import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import { useSelector } from 'react-redux';
import Spiner from './components/Spiner';
import PublicRoute from './components/PublicRoute';
import ProtectedRoute from './components/ProtectedRoute'
const App = () => {
  const { loading } = useSelector(state => state.alerts)
  return (
    <>

      <BrowserRouter>
        {loading ? (<Spiner />) :
          (<Routes>
            <Route path='/' element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            } />
            <Route path='/login' element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            } />
            <Route path='/Register' element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            } />

          </Routes>
          )}
      </BrowserRouter>
    </>
  )
}

export default App