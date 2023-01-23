const filterreducer = (state, action) => {

    const { type, payload } = action;

    if (type === 'LOAD_FILTER_PRODUCT') {
        return {
            ...state,
            filter_products: [...payload],
            all_products: [...payload]
        }
    } else {
        return state;
    }
}

export default filterreducer