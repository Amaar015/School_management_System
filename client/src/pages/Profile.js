import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../components/Layout'
import student from '../Images/student.png'
import teacher from '../Images/teacher.jfif'
import admin from '../Images/admin.png'
import '../App.css'
// import student from '../Images/student.png'
const Profile = () => {

    const { user } = useSelector((state) => state.user)
    const image = user.isTeacher ? teacher : user.isStudent ? student : admin;
    return (
        <Layout>
            <div className="home1">
                <div className="profiles">
                    <img src={image} alt="" />
                    <div className="data ">
                        <div className="datum">
                            <h5>Name:</h5>
                            <h5>{user.name}</h5>
                        </div>
                        <div className="datum">
                            <h5>Email:</h5>
                            <h5>{user.email}</h5>
                        </div>
                        <div className="datum">
                            <h5>::Age::</h5>
                            <h5>{user.age}</h5>
                        </div>
                        <div className="datum">
                            <h5>Date of Birth:</h5>
                            <h5>{user.dateofbirth}</h5>
                        </div>
                        <div className="datum">
                            <h5>Department:</h5>
                            <h5>{user.department}</h5>
                        </div>
                        <div className="datum">
                            <h5>Mobile No:</h5>
                            <h5>{user.mobileNo}</h5>
                        </div>
                        <div className="datum">
                            <h5>Address:</h5>
                            <h5>{user.address}</h5>
                        </div>
                    </div>
                </div>


            </div>

        </Layout >

    )

}

export default Profile