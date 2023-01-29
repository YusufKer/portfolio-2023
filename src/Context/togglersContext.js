import { createContext, useState } from "react";

const TogglersContext = createContext();
const { Provider } = TogglersContext;

function TogglersContextProvider({children}){

    const [showContactMenu, setShowContactMenu] = useState(false);
    const toggleShowContactMenu = () => {
        setShowContactMenu( prevState => !prevState)
    }

    return(
        <Provider value={{showContactMenu,toggleShowContactMenu}}>
            {children}
        </Provider>
    )
}

export {TogglersContextProvider, TogglersContext} ;

