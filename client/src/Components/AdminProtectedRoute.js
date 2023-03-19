import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { hideLoading, showLoading } from '../Redux/features/alertSlice'
import axios from 'axios'
import { setAdmin } from '../Redux/features/adminSlice'

export default function AdminProtectedRoute({ children }) {
    const dispatch = useDispatch();
    const { admin } = useSelector((state) => state.admin);
    const { student } = useSelector((state) => state.student);
    // const params = useParams();
    const navigate = useNavigate();
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
                dispatch(setAdmin(res.data.data));
            }
            else {
                navigate('/adminLogin')
                // < Navigate to = '/adminLogin' />
                localStorage.clear();
            }
        } catch (error) {
            dispatch(hideLoading());
            localStorage.clear();
        }

        // }

        // }
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
        return navigate('/adminLogin')
    }
}

