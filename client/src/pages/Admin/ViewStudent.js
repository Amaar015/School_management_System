import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import { message, Table } from 'antd';
import axios from 'axios';

const ViewStudent = () => {
    const [student, setStudent] = useState([]);

    const getStudent = async () => {
        try {
            const res = await axios.get('/api/v1/admin/getStudentInfo', {
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

    // Edit the user
    const handleEdit = async () => {
        try {
            alert('hello brother')
        } catch (error) {
            console.log(error)
        }
    }
    // Delete the user 
    const handleDelete = async (email) => {
        try {
            alert(email)
        } catch (error) {
            console.log(error);
        }
    }

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            render: (text, record) => (
                <span>{record.name}</span>
            )

        },

        {
            title: "Department",
            dataIndex: "department",

        },
        {
            title: "Roll No",
            dataIndex: 'id'
        },
        {
            title: "Email",
            dataIndex: 'email',
        },
        {
            title: "Gender",
            dataIndex: 'gender',
        },
        {
            title: "Batch",
            dataIndex: 'admission',
        },
        {
            title: "Action",
            render: (text, record) => (
                <div className="d-flex gap-2">
                    <button className="btn btn-success" onClick={handleEdit}>Edit</button>
                    <button className="btn btn-danger" onClick={async () => {
                        try {
                            const res = await axios.post('/api/v1/admin/DeleteStdprofile',
                                { StdEmail: record.email },
                                {
                                    headers: {
                                        Authorization: `Bearer ${localStorage.getItem('token')}`
                                    }
                                }
                            )
                        } catch (error) {

                        }
                    }}>Delete</button>

                </div>
            )
        },

    ]

    return (
        <Layout>
            <h1 className='text-center m-2'>All Students</h1>
            <Table columns={columns} dataSource={student} />
        </Layout>
    )
}

export default ViewStudent