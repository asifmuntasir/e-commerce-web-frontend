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
    else if (type === 'GET_SORT_VALUE') {
        let userSortValue = document.getElementById('sort');
        let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
        // console.log(sort_value);
        return {
            ...state,
            sorting_value: sort_value
        }
    }
    else {
        return state;
    }
}

export default filterreducer