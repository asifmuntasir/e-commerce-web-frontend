
const ProductReducer = (state, action) => {
    const { type, payload } = action;
    if (type === 'SET_LOADING') {
        return {
            ...state,
            isLoading: true
        }
    } else if (type === 'SET_API_DATA') {
        const featureData = payload.filter((currentEle) => {
            return currentEle.featured === true;
        });
        return {
            ...state,
            isLoading: false,
            products: payload,
            featureProducts: featureData
        }
    } else if (type === 'API_ERROR') {
        return {
            ...state,
            isLoading: false,
            isError: true
        }
    } else {
        return state;
    }
}

export default ProductReducer;
