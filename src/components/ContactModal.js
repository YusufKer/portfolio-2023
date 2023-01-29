import { useContext } from "react";
import { TogglersContext } from "../Context/togglersContext";

export default function ContactModal(){

    const {showContactMenu,toggleShowContactMenu} = useContext(TogglersContext)

    return(
        <div onClick={toggleShowContactMenu} className={`fixed top-0 ${showContactMenu ? "right-0" : "-right-full"}  p-6 transition-all duration-500 w-[300px] h-screen bg-blue-50 flex`}>
            contact modal
        </div>
    )
}