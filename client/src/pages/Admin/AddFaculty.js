import React from 'react'
import Layout from '../../Components/Layout'
import { Col, Form, Row, Input, TimePicker, message } from "antd"
import FormItem from 'antd/es/form/FormItem'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { showLoading, hideLoading } from '../../Redux/features/alertSlice';
import axios from 'axios';


const AddStudent = () => {
    const { admin } = useSelector(state => state.admin)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handlefinish = async (values) => {
        console.log(values)
        try {
            dispatch(showLoading());
            const res = await axios.post('/api/v1/admin/setTeacherdata', { ...values, createdby: admin.name },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            dispatch(hideLoading());
            if (res.data.success) {
                message.success(res.data.success)
                navigate('/home-user')
            }
            else {
                message.error(res.data.success)
            }

        } catch (error) {
            dispatch(hideLoading())
            console.log(error)
            message.error("Something went Wrong")
        }
    }
    return (

        <Layout>
            <h1 className='text-center'>Register Teacher</h1>
            <Form onFinish={handlefinish} className='m-4' >
                <h4 className='text-dark'>personal Details</h4>
                <Row gutter={20} >
                    <Col xs={25} md={24} lg={8} >
                        <FormItem label="Name" name="name" required>
                            <Input type='text' placeholder='Name' required />
                        </FormItem>
                        <FormItem label="Date of Birth" name="dateofbirth" required>
                            <Input type='text' placeholder='DD-MM-YYYY' required />
                        </FormItem>
                        <FormItem label="Subject" name="subject" required>
                            <Input type='text' placeholder='Subject' required />
                        </FormItem>
                        <FormItem label="Qualification" name="qualification" required>
                            <Input type='text' placeholder='Qualification' required />
                        </FormItem>
                        <FormItem label="Email" name="email" required>
                            <Input type='email' placeholder='Email' required />
                        </FormItem>
                        <FormItem label="Age" name="age" required>
                            <Input type='number' placeholder='Age' required />
                        </FormItem>
                    </Col>

                    <Col xs={25} md={24} lg={8}>
                        <FormItem label="Mobile No:" name="mobileNo" required>
                            <Input type='number' placeholder='Mobile No:' required />
                        </FormItem>
                        <FormItem label="Address" name="address" required>
                            <Input type='text' placeholder='Address' required />
                        </FormItem>
                        <FormItem label="Gender" name="gender" required>
                            <Input type='text' placeholder='Gender' required />
                        </FormItem>

                        <FormItem label="Employee Id" name="id" required>
                            <Input type='text' placeholder='Id' required />
                        </FormItem>
                        <FormItem label="Experience" name="experience" required>
                            <Input type='text' placeholder='Experience' required />
                        </FormItem>
                        <FormItem label="Password" name="password" required>
                            <Input type='password' placeholder='Password' required />
                        </FormItem>

                    </Col>
                    <Col xs={25} md={24} lg={8}></Col>
                    <Col xs={25} md={24} lg={8}>
                        <button className='btn btn-primary' type='submit'>Submit</button>
                    </Col>

                </Row>
            </Form>
        </Layout >
    )
}

export default AddStudent