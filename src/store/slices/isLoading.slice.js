import { createSlice } from '@reduxjs/toolkit'


export const isLoadingSlice = createSlice({
    name: 'inLoading',
    initialState: false,
    reducers: {
        setIsLoadingGlobal: (state, action) => action.payload
    }
})

export const {setIsLoadingGlobal} = isLoadingSlice.actions;

export default isLoadingSlice.reducer;