import React from 'react';
import {FC} from 'react';
import {useTypedDispatch} from '../store';
import {addOne, add, selectCounter} from './counterSlice';
import {useSelector} from 'react-redux';

export const Counter: FC<{}> = () => {
    const dispatch = useTypedDispatch();
    const counter = useSelector(selectCounter);

    const addOneFn = () => dispatch(addOne());
    const addFiveFn = () => dispatch(add({amount: 5}));

    return (
        <>
            <div>Clicked {counter} times</div>
            <button onClick={addOneFn}>add one</button>
            <button onClick={addFiveFn}>add five</button>
        </>
    )
};