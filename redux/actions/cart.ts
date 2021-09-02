// Action Types

import { ADD_TO_CART, REMOVE_TO_CART } from "../actionTypes/actionTypes"

export const addToCart = (id: string | number, price?: number) => {

    return {
        type: ADD_TO_CART,
        payload: {
            id,
            price
        }
    }

}

export const removeToCart = (id: string | number, price?: number) => {

    return {
        type: REMOVE_TO_CART,
        payload: {
            id,
            price
        }
    }

}