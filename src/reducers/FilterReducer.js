const filterReducer = (state, action) => {

    // const { type, payload } = action;

    // if (type === 'LOAD_FILTER_PRODUCT') {
    //     return {
    //         ...state,
    //         filter_products: [...payload],
    //         all_products: [...payload]
    //     }
    // }
    // if (type === 'SET_GRID_VIEW') {
    //     return {
    //         ...state,
    //         grid_view: true
    //     }
    // }
    // if (type === 'SET_LIST_VIEW') {
    //     return {
    //         ...state,
    //         grid_view: false
    //     }
    // }
    // if (type === 'GET_SORT_VALUE') {
    //     // let userSortValue = document.getElementById('sort');
    //     // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;

    //     return {
    //         ...state,
    //         sorting_value: payload
    //     }
    // }
    // if (type === 'SORTING_PRODUCTS') {

    //     let sorted_product;
    //     // let temp1SortProduct = [...payload];

    //     const { filter_products, sorting_value } = state;
    //     let temp1SortProduct = [...filter_products];

    //     const temp2SortProduct = (a, b) => {
    //         if (sorting_value === 'lowest') {
    //             return a.price - b.price;
    //         }
    //         if (sorting_value === 'highest') {
    //             return b.price - a.price;
    //         }
    //         if (sorting_value === 'a-z') {
    //             return a.name.localeCompare(b.name);
    //         }

    //         if (sorting_value === 'z-a') {
    //             return b.name.localeCompare(a.name);
    //         }
    //     }


    //     sorted_product = temp1SortProduct.sort(temp2SortProduct);

    //     return {
    //         ...state,
    //         filter_products: sorted_product
    //     }
    // }
    // if (type === 'UPDATE_FILTERS_VALUE') {
    //     const { name, value } = payload;

    //     return {
    //         ...state,
    //         filters: {
    //             ...state.filters,
    //             [name]: value
    //         }
    //     }
    // }
    // if (type === 'FILTER_PRODUTCS') {
    //     let { all_products } = state;
    //     let temp1Data = [...all_products];

    //     const { text, category, company, color } = state.filters;

    //     if (text) {
    //         temp1Data = temp1Data.filter((curElem) => {
    //             return curElem.name.toLowerCase().includes(text);
    //         });
    //     }

    //     if (category !== "all") {
    //         temp1Data = temp1Data.filter((curElem) => {
    //             return curElem.category === category;
    //         });
    //     }

    //     if (company !== "all") {
    //         temp1Data = temp1Data.filter((curElem) => {
    //             return curElem.company.toLowerCase() === company.toLowerCase();
    //         });
    //     }

    //     if (color) {
    //         temp1Data = temp1Data.filter((curElem) => {
    //             return curElem.colors.includes(color);
    //         });
    //     }

    //     return {
    //         ...state,
    //         filter_products: temp1Data
    //     }
    // }
    // else {
    //     return state;
    // }



    // ///////////////////////////////////////////////////

    switch (action.type) {
        case "LOAD_FILTER_PRODUCT":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
            };

        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true,
            };

        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false,
            };

        case "GET_SORT_VALUE":
            // let userSortValue = document.getElementById("sort");
            // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
            return {
                ...state,
                sorting_value: action.payload,
            };

        case "SORTING_PRODUCTS":
            let newSortData;
            // let tempSortProduct = [...action.payload];

            const { filter_products, sorting_value } = state;
            let tempSortProduct = [...filter_products];

            const sortingProducts = (a, b) => {
                if (sorting_value === "lowest") {
                    return a.price - b.price;
                }

                if (sorting_value === "highest") {
                    return b.price - a.price;
                }

                if (sorting_value === "a-z") {
                    return a.name.localeCompare(b.name);
                }

                if (sorting_value === "z-a") {
                    return b.name.localeCompare(a.name);
                }
            };

            newSortData = tempSortProduct.sort(sortingProducts);

            return {
                ...state,
                filter_products: newSortData,
            };

        case "UPDATE_FILTERS_VALUE":
            const { name, value } = action.payload;

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                },
            };

        case "FILTER_PRODUCTS":
            let { all_products } = state;
            let tempFilterProduct = [...all_products];

            const { text, category, company, color } = state.filters;

            if (text) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.name.toLowerCase().includes(text);
                });
            }

            if (category !== "all") {
                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => curElem.category === category
                );
            }

            if (company !== "all") {
                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
                );
            }

            if (color) {
                tempFilterProduct = tempFilterProduct.filter((curElem) =>
                    curElem.colors.includes(color)
                );
            }
            return {
                ...state,
                filter_products: tempFilterProduct,
            };

        default:
            return state;
    }
};


export default filterReducer;