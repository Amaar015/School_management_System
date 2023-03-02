
import { configureStore } from '@reduxjs/toolkit'
import { alertSlice } from './feature/alertSlice'


export default configureStore({
    reducer: {
        alerts: alertSlice.reducer
    }
})