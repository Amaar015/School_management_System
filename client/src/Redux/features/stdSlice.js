import { createSlice } from "@reduxjs/toolkit";

export const stdSlice = createSlice({
    name: 'std',
    initialState: {
        std: null,
    },
    reducers: {
        setStd: (state, action) => {
            state.std = action.payload
        }
    }
})
export const { setStd } = stdSlice.actions;