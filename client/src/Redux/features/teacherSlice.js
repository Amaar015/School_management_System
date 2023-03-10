import { createSlice } from "@reduxjs/toolkit";

export const teacherSlice = createSlice({
    name: 'teacher',
    initialState: {
        teacher: null,
    },
    reducers: {
        setTeacher: (state, action) => {
            state.teacher = action.payload
        }
    }
})
export const { setTeacher } = teacherSlice.actions;