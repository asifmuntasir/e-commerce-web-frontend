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
        featureProducts: []
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

    useEffect(() => {
        getProducts(API);
    }, []);


    return (<ContextApp.Provider value={{ ...state }}>
        {children}
    </ContextApp.Provider>)
}

const useProductContext = () => {
    return useContext(ContextApp);
}

export { AppProvider, ContextApp, useProductContext };