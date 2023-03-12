import React from 'react'
import { Form, Input, message } from 'antd'
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { showLoading, hideLoading } from '../Redux/features/alertSlice';
const TeacherRegister = () => {
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    // form hander
    const onfinishHandler = async (values) => {
        console.log(values);
        // try {
        //     dispatch(showLoading());
        //     const res = await axios.post('/api/v1/user/register', values);
        //     dispatch(hideLoading());
        //     if (res.data.success) {
        //         message.success("Register Successfuly")
        //         navigate('/login')
        //     } else {
        //         message.error(res.data.message);
        //     }
        // } catch (err) {
        //     dispatch(hideLoading());
        //     message.error('Something went wrong')
        // }
    }
    return (
        <>
            <div className="form-container">
                <Form layout='vertical' onFinish={onfinishHandler} className="card">
                    <h2 className='text-center'>Register form</h2>
                    <Form.Item label="Name" name="name">
                        <Input type="text" required />
                    </Form.Item>
                    <Form.Item label="Email" name="email">
                        <Input type="email" required />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type="password" required />
                    </Form.Item>
                    <Link to='/teacherLogin' className='m-2'>
                        Already Register Login Here
                    </Link>
                    <button className='btn btn-primary' type="submit">Register</button>
                </Form>
            </div>
        </>
    )
}

export default TeacherRegister