import axios from "axios";
import { createContext, useEffect } from "react";

const ContextApp = createContext();

const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {

    const getProducts = async (url) => {
        const response = await axios.get(url);
        // console.log(response);
        const products = await response.data;
        console.log(products);
    }

    useEffect(() => {
        getProducts(API);
    }, [])


    return (<ContextApp.Provider value={'Googly'}>
        {children}
    </ContextApp.Provider>)
}

export { AppProvider, ContextApp };