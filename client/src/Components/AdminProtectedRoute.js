import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { hideLoading, showLoading } from '../Redux/features/alertSlice'
import axios from 'axios'
import { setAdmin } from '../Redux/features/adminSlice'
export default function AdminProtectedRoute({ children }) {
    const dispatch = useDispatch();
    const { admin } = useSelector((state) => state.admin);
    // get user
    const getUser = async () => {
        try {
            dispatch(showLoading());
            const res = await axios.post("/api/v1/admin/setUserData",
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
                dispatch(setAdmin(res.data.data));
            }
            else {
                <Navigate to='/adminLogin' />
                localStorage.clear();
            }
        } catch (error) {
            dispatch(hideLoading());
            localStorage.clear();
            console.log(error);
        }

    }
    useEffect(() => {
        if (!admin) {
            getUser()
            // exit();
        }
    }, [admin, getUser])

    if (localStorage.getItem('token')) {
        return children;
    } else {
        return <Navigate to='/adminLogin' />
    }
}

