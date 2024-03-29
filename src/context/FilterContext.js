import { useContext, useReducer, useEffect, createContext } from "react";
import reducer from "../reducers/FilterReducer";
import { useProductContext } from './ProductContext';

const FilterContext = createContext();


const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
    filters: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
    },
}



export const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState)

    // set grid_view
    const setGridView = () => {
        return dispatch({
            type: "SET_GRID_VIEW"
        })
    }

    // set list_view
    const setListView = () => {
        return dispatch({
            type: "SET_LIST_VIEW"
        })
    }

    // sortClick function
    const sortClick = (e) => {
        let eventValue = e.target.value;
        dispatch({
            type: "GET_SORT_VALUE",
            payload: eventValue
        });
    }


    // Filter section update function
    const updateFilterValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        return ({
            type: "UPDATE_FILTERS_VALUE",
            payload: { name, value }
        });
    }


    // sort and update filter product
    useEffect(() => {
        dispatch({
            type: "FILTER_PRODUCTS"
        });

        dispatch({
            type: "SORTING_PRODUCTS"
        });
    }, [products, state.sorting_value, state.filters]);



    useEffect(() => {
        dispatch({
            type: 'LOAD_FILTER_PRODUCT',
            payload: products
        });
    }, [products]);


    return <FilterContext.Provider value={{
        ...state,
        setGridView,
        setListView,
        sortClick,
        updateFilterValue
    }}
    >
        {children}
    </FilterContext.Provider>
}


export const useFilterContext = () => {
    return useContext(FilterContext)
}