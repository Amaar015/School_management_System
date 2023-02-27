import React from 'react'
import { Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import './Styles/Register.css'
const Login = () => {

    const onfinishHandler = (values) => {
        console.log(values)
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