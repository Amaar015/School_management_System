import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { hideLoading, showLoading } from '../Redux/features/alertSlice'
import axios from 'axios'
import { setAdmin } from '../Redux/features/adminSlice'
export default function AdminProtectedRoute({ children }) {
    const dispatch = useDispatch();
    const { teacher } = useSelector((state) => state.teacher);

    // get user
    const getUser = async () => {
        try {
            dispatch(showLoading());
            const res = await axios.post("/api/v1/teacher/setTeacherData",
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
                <Navigate to='/teacherLogin' />
                localStorage.clear();
            }
        } catch (error) {
            dispatch(hideLoading());
            localStorage.clear();
            console.log(error);
        }

    }
    useEffect(() => {
        if (!teacher) {
            getUser()
            // exit();
        }
    }, [teacher, getUser])

    if (localStorage.getItem('token')) {
        return children;
    } else {
        return <Navigate to='/teacherLogin' />
    }
}

