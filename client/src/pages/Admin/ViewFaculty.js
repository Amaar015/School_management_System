import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import { message, Table } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ViewFaculty = () => {
    const [teacher, setTeacher] = useState([]);
    const navigate = useNavigate();
    const getTeacher = async () => {
        try {
            const res = await axios.get('/api/v1/admin/getTeacherInfo', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            if (res.data.success) {
                setTeacher(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getTeacher()
    }, [])


    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            render: (text, record) => (
                <span>{record.name}</span>
            )

        },

        {
            title: "Subject",
            dataIndex: "subject",

        },
        {
            title: "Employee Id",
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
            title: "Experience",
            dataIndex: 'experience',
        },
        {
            title: "Action",
            render: (text, record) => (
                <div className="d-flex gap-2">
                    {/* Edits  buttons functions */}
                    <button className="btn btn-success" onClick={async () => {
                        try {
                            navigate(`/teacher/Profile/${record.email}`)
                        } catch (error) {
                            message.error("Something went wrong")
                        }
                    }} >Edit</button>
                    {/* Dellete buttons functions */}
                    <button className="btn btn-danger" onClick={async () => {
                        try {
                            const res = await axios.post('/api/v1/admin/DeleteTeacherprofile',
                                { TeacherEmail: record.email },
                                {
                                    headers: {
                                        Authorization: `Bearer ${localStorage.getItem('token')}`
                                    }
                                }
                            )
                            if (res.data.success) {
                                message.success('Employee deleted successfuly')
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
            <h1 className='text-center m-2'>All Teacher</h1>
            <Table columns={columns} dataSource={teacher} />
        </Layout>
    )
}

export default ViewFaculty