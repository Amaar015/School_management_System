import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import { Col, Form, Row, Input, message } from "antd"
import FormItem from 'antd/es/form/FormItem'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '../../Redux/features/alertSlice'

const Profile = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const [student, setStudent] = useState(null)
    const navigate = useNavigate();
    const getStudentInfo = async () => {
        try {
            const res = await axios.post('/api/v1/admin/getStudentInfo',
                { stdEmail: params.email },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            )
            if (res.data.success) {
                setStudent(res.data.data);
            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getStudentInfo()
    })

    // handle form data
    const handlefinish = async (values) => {

        try {
            dispatch(showLoading());
            const res = await axios.post('/api/v1/admin/updateProfile',
                {
                    ...values, StdEmail: params.email
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            dispatch(hideLoading());
            if (res.data.success) {
                message.success(res.data.message)
                navigate('/home-user')
            }
            else {
                message.error(res.data.message)
            }

        } catch (error) {
            dispatch(hideLoading())
            console.log(error)
            message.error("Something went Wrong")
        }
    }
    return (
        <Layout>
            <h3 className='text-center'>Manage Accounts</h3>
            {student && (
                <Form onFinish={handlefinish} className='m-4' initialValues={
                    {
                        ...student
                    }
                } >
                    <h4 className='text-dark'>personal Details</h4>
                    <Row gutter={20} >
                        <Col xs={25} md={24} lg={8} >
                            <FormItem label="Name" name="name" required>
                                <Input type='text' placeholder='Name' required />
                            </FormItem>
                            <FormItem label="Father Name" name="fatherName" required>
                                <Input type='text' placeholder='Father Name' required />
                            </FormItem>
                            <FormItem label="Department:" name="department" required>
                                <Input type='text' placeholder='Department:' required />
                            </FormItem>
                            <FormItem label="Date of Birth" name="dateofbirth" required>
                                <Input type='text' placeholder='DD-MM-YYYY' required />
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

                            <FormItem label="Student Id" name="id" required>
                                <Input type='text' placeholder='Id' required />
                            </FormItem>
                            <FormItem label="Admission" name="admission" required>
                                <Input type='text' placeholder='Admission' required />
                            </FormItem>
                            {/* <FormItem label="Password" name="password" required>
                                <Input type='password' placeholder='Password' required />
                            </FormItem> */}

                        </Col>
                        <Col xs={25} md={24} lg={8}></Col>
                        <Col xs={25} md={24} lg={8}>
                            <button className='btn btn-primary' type='submit'>Submit</button>
                        </Col>

                    </Row>
                </Form>
            )}
        </Layout>
    )
}

export default Profile