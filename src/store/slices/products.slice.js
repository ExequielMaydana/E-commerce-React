import { createSlice } from '@reduxjs/toolkit'
import { setIsLoadingGlobal } from './isLoading.slice';
import axios from 'axios';

export const productsSlice = createSlice({
    name: 'Productos',
    initialState: [],
    reducers: {
        setProductsGlobal: (state, action) => action.payload
    }
})

export const {setProductsGlobal} = productsSlice.actions;

export const getAllProducts = () => (dispatch) =>{
    dispatch(setIsLoadingGlobal(true))
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products'
    return axios.get(URL)
    .then(res => dispatch(setProductsGlobal(res.data.data.products)))
    .catch(err => console.log(err))
    .finally(() => dispatch(setIsLoadingGlobal(false)))
}

export default productsSlice.reducer;