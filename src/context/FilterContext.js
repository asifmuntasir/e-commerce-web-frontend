import { useContext } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import reducer from "../reducers/FilterReducer";
import { useProductContext } from './ProductContext';

const FilterContext = createContext();


const initialState = {
    filter_products: [],
    all_products: []
}



export const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({
            type: 'LOAD_FILTER_PRODUCT',
            payload: products
        });
    }, [products]);


    return <FilterContext.Provider value={{ ...state }}>
        {children}
    </FilterContext.Provider>
}


export const useFilterContext = () => {
    return useContext(FilterContext)
}