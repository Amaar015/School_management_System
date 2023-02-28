import React from 'react'
import { Form, Input } from 'antd'
import { Link, useNavigate, useNavigationType } from 'react-router-dom'
import './Styles/Register.css'
const Login = () => {
    const navigate = useNavigate()
    const onfinishHandler = async (values) => {
        try {
            const res = await axios.post('/api/v1/user/login', values)
            window.location.reload();
            if (res.data.success) {
                localStorage.setItem('token', res.data.token)
                message.success("Login Successfully");
                navigate('/')
            } else {
                message.error(res.data.message);
            }

        } catch (error) {
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
                    <button className='btn btn-primary' type='submit'>Register</button>
                    <Link to='/register' className="mt-4 link">
                        Create Account
                    </Link>
                </Form>
            </div>
        </>
    )
}

export default Login