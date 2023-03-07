import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../components/Layout'
import student from '../Images/student.png'
import teacher from '../Images/teacher.jfif'
import admin from '../Images/admin.png'
import './Styles/profile.css'
// import student from '../Images/student.png'
const Profile = () => {

    const { user } = useSelector((state) => state.user)
    const image = user.isTeacher ? teacher : user.isStudent ? student : admin;
    return (
        <Layout>
            <div className="home1">
                <div className="profiles">
                    <img src={image} alt="" />
                    <div className="data d-flex">
                        <h4>Name</h4>
                        <p>{user.name}</p>
                    </div>
                </div>


            </div>

        </Layout>

    )

}

export default Profile