import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { hideLoading, showLoading } from '../Redux/features/alertSlice'
import axios from 'axios'
import { setStd } from '../Redux/features/stdSlice'
export default function StdProtectedRoute({ children }) {
    const dispatch = useDispatch();
    // const { std } = useSelector(state => state.std);
    // get user
    const getUser = async () => {
        try {
            dispatch(showLoading());
            const res = await axios.post("/api/v1/student/setStdData",
                { token: localStorage.getItem("token") },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                },
            );
            dispatch(hideLoading());
            if (res.data.success) {
                console.log(res.data.data);
                // dispatch(setStd(res.data.data));
            }
            else {
                <Navigate to='/studentLogin' />
                localStorage.clear();
            }
        } catch (error) {
            dispatch(hideLoading());
            localStorage.clear();
            console.log(error);
        }

    }
    useEffect(() => {
        // if (!std) {
        getUser()
        // exit();
        // }
    }, [getUser])

    if (localStorage.getItem('token')) {
        return children;
    } else {
        return <Navigate to='/studentLogin' />
    }
}

