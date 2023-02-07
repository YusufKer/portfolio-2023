import { useContext } from "react";

import { TogglersContext } from "../Context/togglersContext";

import { Link } from "react-router-dom";

export default function NavbarDesktop(){
    
    const {toggleShowContactMenu} = useContext(TogglersContext);

    return(
    <nav className="bg-primary h-10 sticky w-full top-10">
        <div className="container h-full m-auto  flex justify-between items-center px-4">
            <Link to="/"><div>logo</div></Link>
            <ul className="flex items-center gap-4">
                {/* <li className="text-secondary font-bold"><Link to="/about">About</Link></li> */}
                <li className="text-secondary font-bold"><Link to="blog">Blog</Link></li>
                <li className="text-secondary font-bold cursor-pointer" onClick={toggleShowContactMenu}>Contact</li>
            </ul>
        </div>
    </nav>
    )
}