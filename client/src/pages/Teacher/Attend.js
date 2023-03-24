
import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import axios from 'axios'
// import { genComponentStyleHook } from 'antd/es/theme/internal';
import { message, Table } from 'antd';
import { useNavigate } from 'react-router-dom';

const Attend = () => {
    const navigate = useNavigate();
    const [student, setStudent] = useState([]);
    const getStudent = async () => {
        try {
            const res = await axios.get('/api/v1/student/getallStudents', {
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

    // handle account status


    const columns = [
        {
            title: "Department",
            dataIndex: "department",
        },
        {
            title: "Actions",
            dataIndex: "actions",
            render: (text, record) => (
                <div className="d-flex gap-2">
                    {/* {record.status === 'absent' ? */}
                    <button className="btn btn-success" onClick={async () => {
                        navigate(`/teacher/departmentstudent/${record.department}`)
                    }}>Mark Attenous</button>
                    <button className="btn btn-danger" onClick={async () => { }}>Check Attenous</button>
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

export default Attend