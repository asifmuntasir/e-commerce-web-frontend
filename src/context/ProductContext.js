import { createContext } from "react";

const ContextApp = createContext();

const AppProvider = ({ children }) => {
    return (<ContextApp.Provider value={'Googly'}>
        {children}
    </ContextApp.Provider>)
}

export { AppProvider, ContextApp };