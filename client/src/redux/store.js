import { configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "./features/alertSlice";
import { adminSlice } from "./features/adminSlice";
import { teacherSlice } from './features/teacherSlice';
import { stdSlice } from './features/stdSlice';
export default configureStore({
    reducer: {
        alerts: alertSlice.reducer,
        admin: adminSlice.reducer,
        teacher: teacherSlice.reducer,
        student: stdSlice.reducer

    },
})