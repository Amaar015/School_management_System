import { Form } from 'antd'
import React, { useEffect } from 'react'
import { message } from 'antd'
import '../App.css'
import axios from 'axios'
import Layout from '../components/Layout'
import school from '../Images/download.jfif'
const HomePage = () => {
    const getuserData = async () => {
        try {
            const res = await axios.post('/api/v1/user/getUserData', {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
        } catch (error) {
            message.error("Something went wrong")
        }
    }
    useEffect(() => {
        getuserData()
    }, [])
    return (
        <Layout>
            <div className="home1 text-center align-items-center">
                <h1>Progressive High School</h1>
                <h3 className='text-2'>Tando Jam Hyderabad</h3>
                <img src={school} alt="" />
            </div>
        </Layout>
    )
}

export default HomePage