import {createSlice } from '@reduxjs/toolkit';
import { useState } from 'react';




export const toggleNavSlice = createSlice({
    name : 'toggleNav',
    initialState : {showNav : false},
    reducers:{
        toggleNavbar : (state , action, showNav) =>{
            console.log('function called' , state.showNav);
            state.showNav = !state.showNav;
            console.log('after ',state.showNav);
        }
    }
})


export const {toggleNavbar} = toggleNavSlice.actions

export default toggleNavSlice.reducer