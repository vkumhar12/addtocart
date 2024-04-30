/* eslint-disable jsx-a11y/img-redundant-alt */

import { createContext, useEffect, useReducer } from "react";
import MainContent from "./MainContent";
import { products } from "./products";
import { reducer } from "./reducer";

export const CartContent = createContext()

export const initialValues = {
    item: products,
    totalAmount: 0,
    totalQuantity: 0
}

const Itemsss = () => {
    const [state, dispatch] = useReducer(reducer, initialValues)
    const deleteProduct = (id) => {
        return dispatch({
            type: "DELETE_PRODUCT",
            payload: id
        })
    }
    const deleteAllProduct = () => {
        return dispatch({ type: "CLEAR_CART" })
    }

    const increment = (id) => {
        return dispatch({ type: "INCREMENT", payload: id })
    }
    const decrement = (id) => {
        return dispatch({ type: "DECREMENT", payload: id })
    }
    useEffect(() => {
        dispatch({ type: "TOTAL_QUANTITY" })
    }, [state.item])

    return (
        <CartContent.Provider value={{ ...state, deleteProduct, deleteAllProduct, increment, decrement }}>
            <MainContent />
        </CartContent.Provider>
    )
}

export default Itemsss
