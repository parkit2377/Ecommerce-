import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name : 'category',
    initialState : {
        allCategories : [],
        selectedCategory : {},
        selectedProduct : {}
    },
    reducers:{
        setAllCategories : (state , action) =>{
            state.allCategories = action.payload
        },

        changeCategory : (state , action) => {
            state.selectedCategory = action.payload
        }
    }
})


export const {setAllCategories , changeCategory} = categorySlice.actions

export default categorySlice.reducer