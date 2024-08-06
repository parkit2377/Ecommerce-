import {createSlice } from '@reduxjs/toolkit';


    let initialState = {
    showNotification : false,
    type : '',
    message: ''
}


export const notificationSlice = createSlice({
    name : 'notification',
    initialState ,
    reducers:{
        show : (state , action,) =>{
            console.log(action);
            state.showNotification = true
            state.type = action.payload.type;
            state.message = action.payload.message
        },
        hide: (state) => {
            state.showNotification = false;
            state.type = '';
            state.message = '';
          },
    }
})


export const {show , hide} = notificationSlice.actions

export default notificationSlice.reducer