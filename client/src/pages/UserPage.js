import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import admin from '../Images/admin.png';
import { useNavigate } from 'react-router-dom';
import student from '../Images/student.png'
import teacher from '../Images/teacher.jfif'
const UserPage = () => {
    const navigate = useNavigate();
    return (
        <div className="home">
            <div className="main">
                <div className="box">
                    <Link to='/adminLogin'>
                        <img src={admin} alt="" />

                    </Link>

                </div>
                <div className="box">
                    <Link to='/studentLogin'>
                        <img src={student} alt="" />
                    </Link>
                </div>
                <div className="box">
                    <Link to='/teacherLogin'>
                        <img src={teacher} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserPage