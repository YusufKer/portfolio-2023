import { createContext, useState } from "react";

const TogglersContext = createContext();
const { Provider } = TogglersContext;

function TogglersContextProvider({children}){

    const [showContactMenu, setShowContactMenu] = useState(false);
    const toggleShowContactMenu = () => {
        setShowContactMenu( prevState => !prevState);
    }
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const toggleShowMobileMenu = () => {
        setShowMobileMenu( prevState => !prevState);
    }

    const state = {
        showContactMenu,
        toggleShowContactMenu,
        showMobileMenu,
        toggleShowMobileMenu
    }

    return(
        <Provider value={state}>
            {children}
        </Provider>
    )
}

export {TogglersContextProvider, TogglersContext} ;

