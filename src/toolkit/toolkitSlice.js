import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}

const toolkitSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state) {
            state.count = state.count + 1;
        },
        decrement(state) {
            state.count = state.count - 1;
        }
    }
})

export default toolkitSlice.reducer
export const {increment, decrement} = toolkitSlice.actions