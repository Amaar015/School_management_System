
import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import axios from 'axios'
import { useParams } from 'react-router-dom';
// import { genComponentStyleHook } from 'antd/es/theme/internal';
import { message, Table } from 'antd';
const MarkAttend = () => {
    const [student, setStudent] = useState([]);
    const params = useParams();
    const getStudent = async () => {

        try {
            const res = await axios.post('/api/v1/student/getDepartment', { department: params.name }, {

                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            if (res.data.success) {
                setStudent(res.data.data);
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getStudent()
    }, [])

    // handle account status present

    const handleAccountStatus = async (record, status) => {
        console.log(record.name)
        try {
            const res = await axios.post('/api/v1/teacher/markattendance',
                {
                    // names: record.name
                    studentId: record._id, stdname: record.name, status: status,
                    department: record.department, email: record.email, id: record.id, gender: record.gender
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            if (res.data.success) {
                message.success(res.data.message)
                window.location.reload();
            }
        } catch (error) {
            message.error('Something went Wrong')
        }
    }

    // handle account status absent

    const handleAccountsStatus = async (record, status) => {
        console.log(record.name)
        try {
            const res = await axios.post('/api/v1/teacher/markattendance',
                {
                    // names: record.name
                    studentId: record._id, stdname: record.name, status: status,
                    department: record.department, email: record.email, id: record.id, gender: record.gender
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            if (res.data.success) {
                message.success(res.data.message)
                window.location.reload();
            }
        } catch (error) {
            message.error('Something went Wrong')
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
            title: "Email",
            dataIndex: 'email',
        },
        {
            title: "Roll no",
            dataIndex: "id"
        },
        {
            title: "Gender",
            dataIndex: "gender"
        },
        {
            title: "Actions",
            dataIndex: "actions",
            render: (text, record) => (
                <div className="d-flex gap-2">
                    {/* {record.status === 'absent' ? */}
                    <button className="btn btn-success" onClick={() => handleAccountStatus(record, 'present')}>Present</button>
                    <button className="btn btn-danger" onClick={() => handleAccountsStatus(record, 'absent')}>Absent</button>
                    {/* } */}
                </div>
            )
        }

    ]

    return (

        <Layout>
            <h1 className='text-center m-2'>All doctors are here</h1>
            <Table columns={columns} dataSource={student} />
        </Layout>
    )
}

export default MarkAttend