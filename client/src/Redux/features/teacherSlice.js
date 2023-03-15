import { createSlice } from "@reduxjs/toolkit";

export const teacherSlice = createSlice({
    name: 'teacher',
    initialState: {
        teacher: null,
    },
    reducers: {
        setteacher: (state, action) => {
            state.teacher = action.payload
        }
    }
})
export const { setteacher } = teacherSlice.actions;