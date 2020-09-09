import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';


const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        addOne: state =>
            state + 1,
        add: (state, action: PayloadAction<{amount: number}>) =>
            state + action.payload.amount,
    }
});

export const {addOne, add} = counterSlice.actions;
export const selectCounter = (state: RootState) => state.counter;
export default counterSlice.reducer;