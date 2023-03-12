import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Layout from '../Components/Layout';
// import { Row } from 'antd';
const Home = () => {
    return (
        <Layout>
            <h1 className='text-center'>HomePage</h1>
            {/* <Row>
                {doctors && doctors.map(doctor => (
                    <DoctorList doctor={doctor} />
                ))}
            </Row> */}
        </Layout>
    )
}

export default Home