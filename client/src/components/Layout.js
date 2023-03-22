import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import '../App.css';
import { message, Badge } from 'antd'
import { teacherMenus, AdminMenu, studentMenus } from '../Data/data';

const Layout = ({ children }) => {
    const { admin } = useSelector(state => state.admin);
    const { student } = useSelector(state => state.student)
    const { teacher } = useSelector(state => state.teacher)
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        message.success("Logout Successfully");
        navigate('/');
    }

    // const studentMenu = [
    //     {
    //         name: "Profile",
    //         path: `/student/viewprofile/${email}`,
    //         icon: "fa-solid fa-house",
    //     },
    //     {
    //         name: "Attendance",
    //         path: "/student/attendance",
    //         icon: "fa-solid fa-list",
    //     },
    //     {
    //         name: "Time Table",
    //         path: "/student/timeTable",
    //         icon: "fa-solid fa-user-doctor",
    //     },
    //     {
    //         name: "Result",
    //         path: "/student/result",
    //         icon: "fa-solid fa-user",
    //     },
    //     {
    //         name: "Sujects",
    //         path: "/student/subject",
    //         icon: "fa-solid fa-user",
    //     },
    //     {
    //         name: "Complain",
    //         path: "/student/complain",
    //         icon: "fa-solid fa-user-doctor",
    //     },
    //     {
    //         name: "Notice",
    //         path: "/student/notice",
    //         icon: "fa-solid fa-user",
    //     },
    //     {
    //         name: "Payments",
    //         path: "/student/payment",
    //         icon: "fa-solid fa-user",
    //     },
    // ]

    const TeacherMenu = [
        {
            name: "Profile",
            path: `/teacher/ProfileT/${teacher?.email}`,
            icon: "fa-solid fa-house",
        },
        {
            name: "Mark Attenous",
            path: "/teacher/markattenous",
            icon: "fa-solid fa-list",
        },
        {
            name: "Upload Mark",
            path: "/teacher/uploadmark",
            icon: "fa-solid fa-user-doctor",
        },
        {
            name: "Notice",
            path: "/teacher/notice",
            icon: "fa-solid fa-user",
        },
        {
            name: "Complain",
            path: "/teacher/complain",
            icon: "fa-solid fa-user",
        },

    ]

    const Sidebars = admin ? AdminMenu : studentMenus;
    const Sidebar = teacher ? TeacherMenu : Sidebars;

    const user = student ? student?.name : admin ? admin?.name : teacher?.name;
    return (
        <>
            <div className="main">
                <div className="layout">
                    <div className="sidebar">
                        <div className="logo">
                            <h6>School_App</h6>
                        </div>
                        <div className="menu">
                            {Sidebar.map(menu => {
                                const isActive = location.pathname === menu.path
                                return (
                                    <>
                                        <div className={`menu-item ${isActive && 'active'}`}>
                                            <i className={menu.icon}></i>
                                            <Link to={menu.path}>{menu.name}</Link>
                                        </div>
                                    </>
                                )
                            })}
                            <div className={`menu-item`} onClick={handleLogout}>
                                <i className='fa-solid fa-right-from-bracket'></i>
                                <Link to='/login'>Logout</Link>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="header">
                            <Link to='/profile'>{user}</Link>

                        </div>
                        <div className="body">{children}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout