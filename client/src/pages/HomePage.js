import { Form } from 'antd'
import React, { useEffect } from 'react'
import { message } from 'antd'
import '../App.css'
import axios from 'axios'
import Layout from '../components/Layout'
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
            <h1>Home Page</h1>
        </Layout>
    )
}

export default HomePage