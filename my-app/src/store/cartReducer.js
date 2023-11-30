import { ADD_PRODUCT, DELETE_PRODUCT, CHANGE_AMOUNT } from './actionTypes';

const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    {
                        id: action.payload.id,
                        color: action.payload.color,
                        size: action.payload.size,
                        amount: action.payload.amount,
                        price: action.payload.price
                    },
                ],
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    item =>
                        item.id !== action.payload.id &&
                        item.color !== action.payload.color &&
                        item.size !== action.payload.size
                ),
            };
        case CHANGE_AMOUNT:
            return {
                ...state,
                cartItems: state.cartItems.map(item => {
                    if (
                        item.id === action.payload.id &&
                        item.color === action.payload.color &&
                        item.size === action.payload.size
                    ) {
                        if (item.amount + action.payload.amountDiff > 0){
                            return { ...item, amount: item.amount + action.payload.amountDiff };
                        }
                    }
                    return item;
                }),
            };
        default:
            return state;
    }
};

export default cartReducer;
