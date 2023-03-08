import React from 'react'
import Layout from '../components/Layout'

const updateProfile = () => {
    return (
        <Layout>
            <h3 className='text-center m-2'>Manage Profile</h3>
            {doctor && (
                <Form onFinish={handlefinish} className='m-4' initialValues={
                    {
                        ...doctor

                    }
                } >
                    <h4 className='text-dark'>personal Details</h4>
                    <Row gutter={20}  >
                        <Col xs={25} md={24} lg={8} >
                            <FormItem label="Fisrt Name" name="firstName" required>
                                <Input type='text' placeholder='first Name' required />
                            </FormItem>
                            <FormItem label="Last Name" name="lastName" required>
                                <Input type='text' placeholder='Last Name' required />
                            </FormItem>
                            <FormItem label="Phone no:" name="phone" required>
                                <Input type='text' placeholder='phone no:' required />
                            </FormItem>
                            <FormItem label="email" name="email" required>
                                <Input type='email' placeholder='email' required />
                            </FormItem>
                            <FormItem label="Portfolio" name="portfolio" required>
                                <Input type='text' placeholder='Portfolio' required />
                            </FormItem>
                            <FormItem label="Address" name="address" required>
                                <Input type='text' placeholder='Address' required />
                            </FormItem>
                        </Col>

                        <Col xs={25} md={24} lg={8}>
                            <FormItem label="Specialization" name="specialization" required>
                                <Input type='text' placeholder='Enter Specialization' required />
                            </FormItem>
                            <FormItem label="Experience" name="experience" required>
                                <Input type='text' placeholder='Experience' required />
                            </FormItem>
                            <FormItem label="Fees per Consultant" name="fees" required>
                                <Input type='text' placeholder='Fees per Consultant' required />
                            </FormItem>
                            {/* <FormItem label="Timings" name="timeings" required>
                                <TimePicker.RangePicker format="HH:mm" />
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

export default updateProfile