import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    loading: false,
    error: false
}

export const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {

    },
})

export const { loginStart, loginSuccess, loginFailure, logout } = videoSlice.actions
export default videoSlice.reducer
