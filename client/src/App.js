import React from 'react'
import UserPage from './pages/UserPage'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import AdminRegister from './pages/Admin/AdminRegister';
import AdminLogin from './pages/Admin/AdminLogin';
import TeacherLogin from './pages/Teacher/TeacherLogin';
import TeacherRegister from './pages/Teacher/TeacherRegister';
import StdLogin from './pages/Student/StdLogin';
import AdminProtectedRoute from './Components/AdminProtectedRoute';
import PublicRoute from './Components/PublicRoute';
import Home from './pages/Home';
import AddStudent from './pages/Admin/AddStudent';
import AddFaculty from './pages/Admin/AddFaculty';
import ViewStudent from './pages/Admin/ViewStudent';
import StdProtectedRoute from './Components/StdProtected';
import Profile from './pages/Student/Profile';
import ViewFaculty from './pages/Admin/ViewFaculty';
import TProfile from './pages/Teacher/Profile'
import { useSelector } from 'react-redux';
const App = () => {

  return (

    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={
            <PublicRoute>
              <UserPage />
            </PublicRoute>
          } />

          <Route path='/adminRegister' element={
            <PublicRoute>
              <AdminRegister />
            </PublicRoute>
          } />
          <Route path='/adminLogin' element={
            <PublicRoute>
              <AdminLogin />
            </PublicRoute>
          } />

          <Route path='/teacherRegister' element={
            <PublicRoute>
              <TeacherRegister />
            </PublicRoute>
          } />
          <Route path='/teacherLogin' element={
            <PublicRoute>
              <TeacherLogin />
            </PublicRoute>
          } />

          <Route path='/studentLogin' element={
            <PublicRoute>
              <StdLogin />
            </PublicRoute>
          } />

          <Route exact path='/home-student' element={
            <StdProtectedRoute>
              <Home />
            </StdProtectedRoute>
          } />

          <Route exact path='/home-user' element={
            <AdminProtectedRoute>
              <Home />
            </AdminProtectedRoute>
          } />




          <Route path='/addStudent' element={
            <AdminProtectedRoute>
              <AddStudent />
            </AdminProtectedRoute>
          } />
          <Route path='/admin/faculty' element={
            <AdminProtectedRoute>
              <AddFaculty />
            </AdminProtectedRoute>
          } />
          <Route path='/admin/viewAllFaculty' element={
            <AdminProtectedRoute>
              <ViewFaculty />
            </AdminProtectedRoute>
          } />

          <Route path='/admin/SeeAllStudnet' element={
            <AdminProtectedRoute>
              <ViewStudent />
            </AdminProtectedRoute>
          } />
          <Route path='/student/Profile/:email' element={
            <AdminProtectedRoute>
              <Profile />
            </AdminProtectedRoute>
          } />
          <Route path='/teacher/Profile/:email' element={
            <AdminProtectedRoute>
              <TProfile />
            </AdminProtectedRoute>
          } />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App