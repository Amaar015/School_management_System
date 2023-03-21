import React from 'react'
import UserPage from './pages/UserPage'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import AdminRegister from './pages/Admin/AdminRegister';
import AdminLogin from './pages/Admin/AdminLogin';
import TeacherLogin from './pages/Teacher/TeacherLogin';
// import TeacherRegister from './pages/Teacher/TeacherRegister';
import StdLogin from './pages/Student/StdLogin';
import AdminProtectedRoute from './Components/AdminProtectedRoute';
import PublicRoute from './Components/PublicRoute';
import Home from './pages/Home';
// admin pages
import AddStudent from './pages/Admin/AddStudent';
import AddFaculty from './pages/Admin/AddFaculty';
import ViewStudent from './pages/Admin/ViewStudent';
import CheckComplain from './pages/Admin/CheckComplain'
import UploadNotice from './pages/Admin/UploadNotice';
import ViewNotice from './pages/Admin/ViewNotice'
import AddSubject from './pages/Admin/AddSubject'
import ViewFaculty from './pages/Admin/ViewFaculty';

// student pages and routes
import StdProtectedRoute from './Components/StdProtected';
import Profile from './pages/Student/Profile';
import Stdprofile from './pages/Student/StdProfile'
import Attendence from './pages/Student/Attendence'
import StdComplain from './pages/Student/Complain'
import StdNotice from './pages/Student/Notice'
import StdResult from './pages/Student/Result'
import StdSubject from './pages/Student/Subject'
import StdTimetable from './pages/Student/TimeTable'
import StdPayment from './pages/Student/Payment'
// teacher pages and routes
import TeacherProtect from './Components/TeacherRoute';
import TProfile from './pages/Teacher/Profile'
import Tcomplian from './pages/Teacher/Complain'
import Markattend from './pages/Teacher/MarkAttend'
import UploadMark from './pages/Teacher/UploadMark'
import Tnotice from './pages/Teacher/Notice'
import TeacherProfile from './pages/Teacher/TeacherProfile';
// import { useSelector } from 'react-redux';
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

          {/* <Route path='/teacherRegister' element={
            <PublicRoute>
              <TeacherRegister />
            </PublicRoute>
          } /> */}
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
          <Route exact path='/home-teacher' element={
            <TeacherProtect>
              <Home />
            </TeacherProtect>
          } />


          {/* Admin routes */}

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
          <Route path='/admin/complain' element={
            <AdminProtectedRoute>
              <CheckComplain />
            </AdminProtectedRoute>
          } />
          <Route path='/admin/upload-notice' element={
            <AdminProtectedRoute>
              <UploadNotice />
            </AdminProtectedRoute>
          } />
          <Route path='/admin/view-notice' element={
            <AdminProtectedRoute>
              <ViewNotice />
            </AdminProtectedRoute>
          } />
          <Route path='/admin/add-subject' element={
            <AdminProtectedRoute>
              <AddSubject />
            </AdminProtectedRoute>
          } />

          {/* Student Routes */}

          <Route exact path='/student/viewprofile/:email' element={
            <StdProtectedRoute>
              <Stdprofile />
            </StdProtectedRoute>
          } />
          <Route exact path='/student/attendance' element={
            <StdProtectedRoute>
              <Attendence />
            </StdProtectedRoute>
          } />
          <Route exact path='/student/timeTable' element={
            <StdProtectedRoute>
              <StdTimetable />
            </StdProtectedRoute>
          } />

          <Route exact path='/student/payment' element={
            <StdProtectedRoute>
              <StdPayment />
            </StdProtectedRoute>
          } />
          <Route exact path='/student/complain' element={
            <StdProtectedRoute>
              <StdComplain />
            </StdProtectedRoute>
          } />
          <Route exact path='/student/notice' element={
            <StdProtectedRoute>
              <StdNotice />
            </StdProtectedRoute>
          } />
          <Route exact path='/student/result' element={
            <StdProtectedRoute>
              <StdResult />
            </StdProtectedRoute>
          } />
          <Route exact path='/student/subject' element={
            <StdProtectedRoute>
              <StdSubject />
            </StdProtectedRoute>
          } />

          {/* Teacher Routes */}
          <Route exact path='/teacher/ProfileT' element={
            <TeacherProtect>
              <TeacherProfile />
            </TeacherProtect>
          } />
          <Route exact path='/teacher/markattenous' element={
            <TeacherProtect>
              <Markattend />
            </TeacherProtect>
          } />
          <Route exact path='/teacher/uploadmark' element={
            <TeacherProtect>
              <UploadMark />
            </TeacherProtect>
          } />
          <Route exact path='/teacher/notice' element={
            <TeacherProtect>
              <Tnotice />
            </TeacherProtect>
          } />

          <Route exact path='/teacher/complain' element={
            <TeacherProtect>
              <Tcomplian />
            </TeacherProtect>
          } />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App