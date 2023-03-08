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
import Profile from './pages/Profile';
import Attendance from './pages/student/Attendance';
import Timetable from './pages/student/Timetable';
import Result from './pages/student/Result';
import Subject from './pages/student/Subject';
import Club from './pages/student/Club';
import Complain from './pages/student/Complain';
import Pyment from './pages/student/Pyment';
import Notice from './pages/student/Notice';
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
            <Route path='/profile/:id' element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path='/see_Attendance' element={
              <ProtectedRoute>
                <Attendance />
              </ProtectedRoute>
            } />
            <Route path='/Timetable' element={
              <ProtectedRoute>
                <Timetable />
              </ProtectedRoute>
            } />
            <Route path='/viewStudentResult' element={
              <ProtectedRoute>
                <Result />
              </ProtectedRoute>
            } />
            <Route path='/showAllSubject' element={
              <ProtectedRoute>
                <Subject />
              </ProtectedRoute>
            } />


            <Route path='/joinClubRequest' element={
              <ProtectedRoute>
                <Club />
              </ProtectedRoute>
            } />
            <Route path='/sendAllComplain' element={
              <ProtectedRoute>
                <Complain />
              </ProtectedRoute>
            } />
            <Route path='/seeAllNotice' element={
              <ProtectedRoute>
                <Notice />
              </ProtectedRoute>
            } />

            <Route path='/PaymentMethode' element={
              <ProtectedRoute>
                <Pyment />
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