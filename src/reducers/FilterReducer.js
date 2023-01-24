const filterreducer = (state, action) => {

    const { type, payload } = action;

    if (type === 'LOAD_FILTER_PRODUCT') {
        return {
            ...state,
            filter_products: [...payload],
            all_products: [...payload]
        }
    } else if (type === 'SET_GRID_VIEW') {
        return {
            ...state,
            grid_view: true
        }
    } else if (type === 'SET_LIST_VIEW') {
        return {
            ...state,
            grid_view: false
        }
    }
    else {
        return state;
    }
}

export default filterreducer