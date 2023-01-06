import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducers/ProductReducer';


const ContextApp = createContext();

const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {

    const initialState = {
        isLoading: false,
        isError: false,
        products: [],
        featureProducts: [],
        isSingleLoading: false,
        singleProduct: {}
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({
            type: "SET_LOADING",
        });
        try {
            const response = await axios.get(url);
            // console.log(response);
            const products = await response.data;
            // console.log(products);
            dispatch({
                type: "SET_API_DATA",
                payload: products
            });
        } catch (error) {
            dispatch({
                type: "API_ERROR",
            });
        }
    }

    // API call for single product

    const getSingleProduct = async (url) => {
        dispatch({
            type: "SET_SINGLE_LOADING",
        });
        try {
            const response = await axios.get(url);
            // console.log(response);
            const singleProduct = await response.data;
            // console.log(singleProduct);
            dispatch({
                type: "SET_SINGLE_PRODUCT",
                payload: singleProduct
            });
        } catch (error) {
            dispatch({
                type: "SET_SINGLE_ERROR",
            });
        }
    }

    useEffect(() => {
        getProducts(API);
    }, []);

    // useEffect(() => {
    //     getProducts(API);
    // }, []);


    return (<ContextApp.Provider value={{ ...state, getSingleProduct }}>
        {children}
    </ContextApp.Provider>)
}

const useProductContext = () => {
    return useContext(ContextApp);
}

export { AppProvider, ContextApp, useProductContext };