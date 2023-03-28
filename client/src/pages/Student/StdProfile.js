import React, { useState, useEffect } from 'react'
import Layout from '../../Components/Layout'
import './Style/student.css'
import { message, Table } from 'antd';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const StdProfile = () => {
    const [student, setStudent] = useState('');
    const params = useParams();


    const getStudent = async () => {
        try {
            const res = await axios.post('/api/v1/student/getOneStudentInfo',
                {
                    StdEmail: params.email,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            if (res.data.success) {

                setStudent(res.data.data)
            }
        } catch (error) {
            message.error("Something went Wrong")
        }
    }
    useEffect(() => {
        getStudent()
    }, [])
    return (
        <Layout>
            <h2 className='text-center'>Student Profile</h2>
            <div className="mains">
                <h4><span>Name</span>:  {student.name}</h4>
                <h4><span>Father Name</span>:  {student.fatherName}</h4>
                <h4><span>Date of Birth</span>:  {student.dateofbirth}</h4>
                <h4><span>Gender</span>:  {student.gender}</h4>
                <h4><span>Department</span>:  {student.department}</h4>
                <h4><span>Id</span>:  {student.id}</h4>
                <h4><span>Admission Year</span>:  {student.admission}</h4>
                <h4><span>Age</span>:  {student.age}</h4>
                <h4><span>Email</span>:  {student.email}</h4>
                <h4><span>Mobile No</span>:  {student.mobileNo}</h4>
                <h4><span>Address</span>:  {student.address}</h4>


            </div>
        </Layout>
    )
}

export default StdProfile