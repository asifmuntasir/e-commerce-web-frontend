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


        sorted_product = temp1SortProduct.sort(temp2SortProduct);

        return {
            ...state,
            filter_products: sorted_product
        }
    }
    else if (type === "UPDATE_FILTERS_VALUE") {
        const { name, value } = payload;

        return {
            ...state,
            filters: {
                ...state.filters,
                [name]: value
            }
        }
    }
    else if (type === "FILTER_PRODUTCS") {
        let { all_products } = state;
        let temp1Data = [...all_products];

        const { text, category, company, color } = state.filters;

        if (text) {
            temp1Data = temp1Data.filter((curElem) => {
                return curElem.name.toLowerCase().includes(text);
            });
        }

        if (category !== "All") {
            temp1Data = temp1Data.filter((curElem) => {
                return curElem.category === category;
            });
        }

        if (company !== "All") {
            temp1Data = temp1Data.filter((curElem) => {
                return curElem.company.toLowerCase() === company.toLowerCase();
            });
        }

        if (color) {
            temp1Data = temp1Data.filter((curElem) => {
                return curElem.color.includes(color);
            });
        }

        return {
            ...state,
            filter_products: temp1Data
        }
    }
    else {
        return state;
    }
}

export default filterreducer