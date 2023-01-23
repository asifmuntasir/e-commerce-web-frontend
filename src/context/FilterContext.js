import { useContext } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import reducer from "../reducers/FilterReducer";
import { useProductContext } from './ProductContext';

const FilterContext = createContext();


const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true
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

    useEffect(() => {
        dispatch({
            type: 'LOAD_FILTER_PRODUCT',
            payload: products
        });
    }, [products]);


    return <FilterContext.Provider value={{ ...state, setGridView }}>
        {children}
    </FilterContext.Provider>
}


export const useFilterContext = () => {
    return useContext(FilterContext)
}