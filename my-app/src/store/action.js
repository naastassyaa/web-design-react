
import { ADD_PRODUCT, DELETE_PRODUCT, CHANGE_AMOUNT } from './actionTypes';

export const addProduct = (id, color, size, amount, price) => ({
    type: ADD_PRODUCT,
    payload: { id, color, size, amount, price },
});

export const deleteProduct = (id, color, size) => ({
    type: DELETE_PRODUCT,
    payload: { id, color, size },
});

export const changeAmount = (id, color, size, amountDiff) => ({
    type: CHANGE_AMOUNT,
    payload: { id, color, size, amountDiff },
});
