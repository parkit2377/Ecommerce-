import { createSlice } from "@reduxjs/toolkit"



export const authSlice = createSlice({
    name : 'auth',
    initialState : {isLoggedIn : false},
    reducers:{
        authUserLogin : (state , action) => {
            state.isLoggedIn = true

        },
        authUserLogout : (state , action) => {
            state.isLoggedIn = false
        }
    }

})


export const {authUserLogin , authUserLogout} = authSlice.actions

export default authSlice.reducer