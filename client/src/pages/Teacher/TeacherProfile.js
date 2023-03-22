import React, { useState, useEffect } from 'react'
import Layout from '../../Components/Layout'
import '../Student/Style/student.css'
import { message, Table } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const TeacherProfile = () => {
    const [teacher, setTeacher] = useState('');
    const params = useParams();
    console.log(params.email)

    const getTeacher = async () => {
        try {
            const res = await axios.post('/api/v1/teacher/getoneTeacherInfo',
                {
                    teacherEmail: params.email,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            if (res.data.success) {

                setTeacher(res.data.data)
            }
        } catch (error) {

            message.error("Something went Wrong")
        }
    }
    useEffect(() => {
        getTeacher()
    }, [])
    return (
        <Layout>
            <h2 className='text-center'>Student Profile</h2>
            <div className="mains">
                <h4><span>Name</span>:  {teacher.name}</h4>
                <h4><span>Subject</span>:  {teacher.subject}</h4>
                <h4><span>Date of Birth</span>:  {teacher.dateofbirth}</h4>
                <h4><span>Gender</span>:  {teacher.gender}</h4>
                <h4><span>Qualification</span>:  {teacher.qualification}</h4>
                <h4><span>Id</span>:  {teacher.id}</h4>
                <h4><span>Experience</span>:  {teacher.experience}</h4>
                <h4><span>Age</span>:  {teacher.age}</h4>
                <h4><span>Email</span>:  {teacher.email}</h4>
                <h4><span>Mobile No</span>:  {teacher.mobileNo}</h4>
                <h4><span>Address</span>:  {teacher.address}</h4>


            </div>
        </Layout>
    )
}

export default TeacherProfile