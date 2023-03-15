import { createSlice } from "@reduxjs/toolkit";

export const stdSlice = createSlice({
    name: 'student',
    initialState: {
        student: null,
    },
    reducers: {
        setstudent: (state, action) => {
            state.student = action.payload
        }
    }
})
export const { setv } = stdSlice.actions;