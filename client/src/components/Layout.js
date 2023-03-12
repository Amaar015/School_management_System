import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../App.css';
import { message, Badge } from 'antd'
import { teacherMenu, AdminMenu, studentMenu } from '../Data/data';
const Layout = ({ children }) => {
    const { admin } = useSelector(state => state.admin);
    const { student } = useSelector(state => state.student)
    const { teacher } = useSelector(state => state.teacher)
    const location = useLocation();
    const navigate = useNavigate();
    // Logout function
    const handleLogout = () => {
        localStorage.clear();
        message.success("Logout Successfully");
        navigate('/adminLogin');
    }

    const Sidebar = admin ? AdminMenu : student ? studentMenu : teacherMenu

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
                            <Link to='/profile'>{admin?.name}</Link>

                        </div>
                        <div className="body">{children}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout