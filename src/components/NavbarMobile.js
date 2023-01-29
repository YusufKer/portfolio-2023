import {useState, useContext} from "react";
import { Link } from "react-router-dom";

import { TogglersContext } from "../Context/togglersContext";

export default function NavbarMobile(){
    const {toggleShowContactMenu} = useContext(TogglersContext)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () =>{
        setMobileMenuOpen(prevState => !prevState);
    }
    return (
        <div className="container px-4 m-auto relative flex justify-between items-center">
            <div onClick={toggleMobileMenu}  className="h-10 px-2 flex flex-col justify-center items-center gap-1">
                <div className="w-5 h-1 bg-primary"></div>
                <div className="w-5 h-1 bg-primary"></div>
                <div className="w-5 h-1 bg-primary"></div>
            </div>
            <Link to="/"><div>logo</div></Link>
            <div className={`${!mobileMenuOpen ? "opacity-0 pointer-events-none" : null} absolute top-full left-0 bg-green-50 p-4 w-screen max-w-[375px]`}>
                <ul className="grid gap-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li onClick={toggleShowContactMenu}>Contact</li>
                </ul>
            </div>
        </div>
    )
}