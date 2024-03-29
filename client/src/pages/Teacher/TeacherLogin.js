import React from 'react'
import { Form, Input, message } from 'antd'
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '../../Redux/features/alertSlice';

const TeacherLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // form hander
    const onfinishHandler = async (values) => {
        // console.log(values)
        try {
            dispatch(showLoading());
            const res = await axios.post('/api/v1/teacher/teacherlogin', values);
            // window.location.reload();
            dispatch(hideLoading());
            if (res.data.success) {
                localStorage.setItem('token', res.data.token)
                message.success('Login successfuly');
                navigate('/home-teacher')
            } else {
                message.error(res.data.message)
            }
        } catch (error) {
            dispatch(hideLoading());
            message.error("Something went wrong")
        }
    }
    return (
        <>
            <div className="form-container">
                <Form layout='vertical' onFinish={onfinishHandler} className="card">
                    <h2 className='text-center'>Login form</h2>

                    <Form.Item label="Email" name="email">
                        <Input type="email" required />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type="password" required />
                    </Form.Item>
                    <Link to='/' className='m-2'>
                        Back to Home
                    </Link>
                    <button className='btn btn-primary' type="submit">LogIn</button>
                </Form>
            </div>
        </>
    )
}

export default TeacherLogin