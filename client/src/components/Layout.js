import React from 'react'
import '../pages/Styles/LayoutStyle.css'
import { AdminMenu, StudentMenu, TeacherMenu } from '../Data/data'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Layout = ({ children }) => {
    const location = useLocation()
    const { user } = useSelector((state) => state.user)
    // Logout function
    const handleLogout = () => {
        localStorage.clear();
        message.success("Logout Successfully");
        // window.location.reload(true)
        navigate('/login');


    }
    // const stdadmin =
    // Student menu start
    const StudentMenu = [
        {
            name: "Profile",
            path: `/profile/:${user?._id}`,
            icon: "fa-solid fa-user"
        },
        {
            name: "Attendance",
            path: "/see_Attendance",
            icon: "fa-solid fa-clipboard-user"
        },

        {
            name: "Time Table",
            path: "/Timetable",
            icon: "fa-solid fa-business-time"
        },
        {
            name: "Result",
            path: "/viewStudentResult",
            icon: "fa-solid fa-square-poll-vertical"
        },
        {
            name: "Subject",
            path: "/showAllSubject",
            icon: "fa-solid fa-bars-progress"
        },
        {
            name: "Join Clud",
            path: "/joinClubRequest",
            icon: "fa-solid fa-c"
        },

        {
            name: "Complain",
            path: "/sendAllComplain",
            icon: "fa-solid fa-circle-info"
        },

        {
            name: "Notice",
            path: "/seeAllNotice",
            icon: "fa-solid fa-bell"
        },
        {
            name: "Payment",
            path: "/PaymentMethode",
            icon: "fa-solid fa-dollar-sign"
        },



    ]

    // student menu end


    const Sidemenu = user?.isTeacher ? TeacherMenu : user?.isAdmin ? AdminMenu : StudentMenu
    return (

        <div className="main">
            <div className="layout">
                <div className="sidebar">
                    <div className="logo">
                        <h1>Progressive</h1>
                        <span>School</span>
                    </div>
                    <div className="menu">
                        {Sidemenu.map((menu) => {
                            const isActive = location.pathname == menu.path
                            return (
                                <>
                                    <div className={`menu-item ${isActive && 'active'}`}>
                                        <i className={menu.icon}></i>
                                        <Link className='path' to={menu.path}>{menu.name}</Link>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    <div className={`menu-item`} onClick={handleLogout}>
                        <i className='fa-solid fa-right-from-bracket'></i>
                        <Link to='/login'>Logout</Link>
                    </div>

                </div>
                <div className="content">
                    <div className="header">
                        <div className="header-content">
                            <Link to='/profile'>{user?.name}</Link>
                        </div>
                    </div>
                    <div className="body">{children}</div>
                </div>
            </div>
        </div>
    )
}

export default Layout