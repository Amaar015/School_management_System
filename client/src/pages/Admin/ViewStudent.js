import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import { message, Table } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ViewStudent = () => {
    const [student, setStudent] = useState([]);
    const navigate = useNavigate();
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


    // // Delete the user 
    // const handleDelete = async (email) => {
    //     try {
    //         alert(email)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

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

                    <button className="btn btn-success" onClick={async () => {
                        try {
                            navigate(`/student/Profile/${record.email}`)
                        } catch (error) {
                            message.error("Something went wrong")
                        }
                    }} >Edit</button>
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
                            if (res.data.success) {
                                message.success('Student deleted successfuly')
                            }
                            window.location.reload();
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