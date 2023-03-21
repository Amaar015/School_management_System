import React, { useState, useEffect } from 'react'
import Layout from '../../Components/Layout'
import './Style/student.css'
import { message, Table } from 'antd';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const StdProfile = () => {
    const [student, setStudent] = useState([]);
    const params = useParams();
    // console.log(params.email)
    const getStudent = async () => {
        try {
            const res = await axios.get('/api/v1/student/getOneStudentInfo', { StdEmail: params.email }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            if (res.data.success) {
                setStudent(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getStudent()
    }, [])
    return (
        <Layout>
            <h2 className='text-center'>Student Profile</h2>
            <div className="mains">
                <h3><span>Name</span>{student.name}</h3>
            </div>
        </Layout>
    )
}

export default StdProfile