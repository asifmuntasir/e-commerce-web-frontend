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
        // let userSortValue = document.getElementById('sort');
        // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;

        return {
            ...state,
            sorting_value: payload
        }
    }
    else if (type === 'SORTING_PRODUCTS') {

        let sorted_product;
        // let temp1SortProduct = [...payload];

        const { filter_products, sorting_value } = state;
        let temp1SortProduct = [...filter_products];

        const temp2SortProduct = (a, b) => {
            if (sorting_value === 'lowest') {
                return a.price - b.price;
            }
            if (sorting_value === 'highest') {
                return b.price - a.price;
            }
            if (sorting_value === 'a-z') {
                return a.name.localeCompare(b.name);
            }

            if (sorting_value === 'z-a') {
                return b.name.localeCompare(a.name);
            }
        }

        // if (state.sorting_value === 'a-z') {
        //     sorted_product = temp1SortProduct.sort((a, b) => {
        //         return a.name.localeCompare(b.name);
        //     });
        // }

        // if (state.sorting_value === 'z-a') {
        //     sorted_product = temp1SortProduct.sort((a, b) => {
        //         return b.name.localeCompare(b.name);
        //     });
        // }

        // if (state.sorting_value === 'lowest') {
        //     const temp2SortProduct = (a, b) => {
        //         return a.price - b.price;
        //     }
        // }

        // if (state.sorting_value === 'highest') {
        //     const temp2SortProduct = (a, b) => {
        //         return b.price - a.price;
        //     }
        // }

        sorted_product = temp1SortProduct.sort(temp2SortProduct);

        return {
            ...state,
            filter_products: sorted_product
        }
    } else if (type === "UPDATE_FILTERS_VALUE") {
        const { name, val } = payload;

        return {
            ...state,
            filters: {
                ...state.filters,
                [name]: val
            }
        }
    }
    else {
        return state;
    }
}

export default filterreducer