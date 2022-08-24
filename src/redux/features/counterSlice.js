import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        icrement:(state) =>{
            state.value += 1
        },
        decrement:(state)=>{
            state.value -= 1;
        },
        incremetByAmount:(state,action)=>{
            state.value += action.payload;
        }
    }
})

// action creators
export const { incremetByAmount, decrement,icrement} = counterSlice.actions;
export default counterSlice.reducer;