import React from 'react'
import { Form, Input, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import './Styles/Register.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { showLoading, hideLoading } from '../redux/feature/alertSlice'
const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const onfinishHandler = async (values) => {
        try {
            dispatch(showLoading())
            const res = await axios.post('/api/v1/user/login', values)
            // window.location.reload();
            dispatch(hideLoading())
            if (res.data.success) {
                localStorage.setItem('token', res.data.token)
                message.success("Login Successfully");
                navigate('/')
            } else {
                message.error(res.data.message);
            }

        } catch (error) {
            dispatch(hideLoading())
            console.log(error)
            message.error('Something went Wrong')
        }
    }
    return (
        <>
            <div className="form-container">
                <Form layout="vertical" onFinish={onfinishHandler} className="card">
                    <h1>Login Form</h1>

                    <Form.Item label="Email" name="email">
                        <Input type="email" required />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type="password" required />
                    </Form.Item>
                    <button className='btn btn-primary' type='submit'>Login</button>
                    <Link to='/register' className="mt-4 link">
                        Create Account
                    </Link>
                </Form>
            </div>
        </>
    )
}

export default Login