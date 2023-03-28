
import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { message, Table } from 'antd';
const Attendence = () => {
    const [attenous, setAttenous] = useState([]);
    const params = useParams();
    const getAttenous = async () => {

        try {
            const res = await axios.post('/api/v1/student/getStudentAttenous', { stdId: params.id }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            if (res.data.success) {
                setAttenous(res.data.data);
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAttenous()
    }, [])

    // handle account status

    // const handleAccountStatus = async (record, status) => {
    //     try {
    //         const res = await axios.post('/api/v1/admin/changeAccounStatus',
    //             { doctorId: record._id, userId: record.userId, status: status },
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${localStorage.getItem('token')}`
    //                 }
    //             })
    //         if (res.data.success) {
    //             message.success(res.data.message)
    //             window.location.reload();
    //         }
    //     } catch (error) {
    //         message.error('Something went Wrong')
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
            title: "Status",
            dataIndex: "status",
        },

        {
            title: "Email",
            dataIndex: 'email',
        },
        {
            title: "ID",
            dataIndex: 'id'
        },
        {
            title: "Date",
            dataIndex: 'date'
        }



    ]

    return (

        <Layout>
            <h1 className='text-center m-2'>All doctors are here</h1>
            <Table columns={columns} dataSource={attenous} />
        </Layout>
    )
}

export default Attendence