export const reducer = (state, action) => {
    if (action.type === "DELETE_PRODUCT") {
        return {
            ...state,
            item: state.item.filter((curItem) => {
                return curItem.id !== action.payload
            })
        }
    }
    if (action.type === "CLEAR_CART") {
        return { ...state, item: [] }
    }


    if (action.type === "INCREMENT") {
        const updatedCart = state.item.map((curElem) => {
            if (curElem.id === action.payload) {
                return { ...curElem, quantity: curElem.quantity + 1 };
            }
            return curElem;
        });

        return { ...state, item: updatedCart };
    }
    if (action.type === "DECREMENT") {
        const updatedCart = state.item.map((curElem) => {
            if (curElem.id === action.payload) {
                return { ...curElem, quantity: curElem.quantity - 1 };
            }
            return curElem;
        }).filter((curElem) => curElem.quantity !== 0)

        return { ...state, item: updatedCart };
    }

    if (action.type === "TOTAL_QUANTITY") {
        let { totalQuantity, totalAmount } = state.item.reduce((accum, curVal) => {
            let { quantity, price } = curVal;

            let updatedAmount = price * quantity;
            accum.totalAmount += updatedAmount

            accum.totalQuantity += quantity;
            return accum
        }, { totalAmount: 0, totalQuantity: 0 })
        return { ...state, totalQuantity, totalAmount }
    }
    // if (action.type === "GET_TOTAL") {
    //     let { totalItem, totalAmount } = state.item.reduce(
    //         (accum, curVal) => {
    //             let { price, quantity } = curVal;

    //             let updatedTotalAmount = price * quantity;
    //             accum.totalAmount += updatedTotalAmount;

    //             accum.totalItem += quantity;
    //             return accum;
    //         },
    //         {
    //             totalItem: 0,
    //             totalAmount: 0,
    //         }
    //     );
    //     return { ...state, totalItem, totalAmount };
    // }


    return state;
}