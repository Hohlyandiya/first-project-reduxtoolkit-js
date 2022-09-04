import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}

export const decrement = createAction('DECREMENT')
export const increment = createAction('INCREMENT')

export default createReducer(initialState, {
    [increment]: (state) => {
        state.count = state.count + 1;
    },
    [decrement]: (state) => {
        state.count = state.count - 1;
    }
})
