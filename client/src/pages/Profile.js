import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../components/Layout';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment'
import { Col, Form, Row, Input, TimePicker, message } from "antd"
import FormItem from 'antd/es/form/FormItem'
import { showLoading, hideLoading } from '../redux/feature/alertSlice'

const updateProfile = () => {

    const { user } = useSelector(state => state.user)
    const [users, setDoctor] = useState(null)
    // console.log(doctor)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // get doctor details
    const params = useParams();
    const getUserInfo = async () => {
        try {
            const res = await axios.post('/api/v1/user/getUserInfo',
                { _id: params.id },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            )
            if (res.data.success) {
                setDoctor(res.data.data);

            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUserInfo()
    })

    // handle form data
    const handlefinish = async (values) => {
        console.log(values)
        try {
            dispatch(showLoading());
            const res = await axios.post('/api/v1/user/updateProfile',
                {
                    ...values, _id: user._id
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            dispatch(hideLoading());
            if (res.data.success) {
                message.success(res.data.message)
                window.location.reload();
                navigate('/')
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
            <h3 className='text-center m-2'>Manage Profile</h3>
            {users && (
                <Form
                    onFinish={handlefinish}
                    className='m-4'
                    initialValues={
                        {
                            ...users

                        }
                    }
                >
                    <h4 className='text-dark'>personal Details</h4>
                    <Row gutter={20}  >
                        <Col xs={25} md={24} lg={8} >
                            <FormItem label="Name" name="name" required>
                                <Input type='text' placeholder='Name' required />
                            </FormItem>
                            <FormItem label="Email" name="email" required>
                                <Input type='email' placeholder='Enter Email' required />
                            </FormItem>
                            <FormItem label="Department" name="department" required>
                                <Input type='text' placeholder='Department' required />
                            </FormItem>
                            <FormItem label="Date of Birth" name="dateofbirth" required>
                                <Input type='text' placeholder='Date of Birth(HH/MM/YYYY)' required />
                            </FormItem>

                        </Col>

                        <Col xs={25} md={24} lg={8}>
                            <FormItem label="Age" name="age" required>
                                <Input type='text' placeholder='Enter Age' required />
                            </FormItem>
                            <FormItem label="Address" name="address" required>
                                <Input type='text' placeholder='Address' required />
                            </FormItem>
                            <FormItem label="Mobile No" name="mobileNo" required>
                                <Input type='text' placeholder='Mobile No' required />
                            </FormItem>


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

export default updateProfile