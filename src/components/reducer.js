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

    return state;
}