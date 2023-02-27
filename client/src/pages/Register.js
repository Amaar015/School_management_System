import React from 'react'
import { Form, Input, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import './Styles/Register.css'
const Register = () => {
    const navigate = useNavigate();
    const onfinishHandler = async (values) => {
        console.log(values)
        navigate('/login')
    }
    return (
        <>
            <div className="form-container">
                <Form layout="vertical" onFinish={onfinishHandler} className="card">
                    <h1>Register Form</h1>
                    <Form.Item label="Name" name="name">
                        <Input type="text" required />
                    </Form.Item>
                    <Form.Item label="Email" name="email">
                        <Input type="email" required />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type="password" required />
                    </Form.Item>
                    <button className='btn btn-primary' type='submit'>Register</button>
                    <Link to='/login' className="mt-4 link">
                        Already Register Login Here
                    </Link>
                </Form>
            </div>
        </>
    )
}

export default Register