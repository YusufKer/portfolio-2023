import {useState, useContext} from "react";
import { Link } from "react-router-dom";

import { TogglersContext } from "../Context/togglersContext";

export default function NavbarMobile(){
    const {
        toggleShowContactMenu,
        showMobileMenu,
        toggleShowMobileMenu
    }= useContext(TogglersContext)
    return (
        <div className="container px-4 m-auto relative flex justify-between items-center">
            <div onClick={toggleShowMobileMenu}  className="h-10 px-2 flex flex-col justify-center items-center gap-1">
                <div className="w-5 h-1 bg-primary"></div>
                <div className="w-5 h-1 bg-primary"></div>
                <div className="w-5 h-1 bg-primary"></div>
            </div>
            <Link to="/"><div>logo</div></Link>
            <div className={`${!showMobileMenu ? "opacity-0 pointer-events-none" : null} absolute top-full left-0 p-2 pt-6 border border-secondary bg-primary w-screen max-w-[375px]`}>
                <ul className="grid gap-1 relative">
                    <a onClick={toggleShowMobileMenu} class="text-right font-bold absolute right-0 -top-6">x</a>
                    <li className="font-bold text-secondary border border-secondary p-4"><Link to="/">Home</Link></li>
                    <li className="font-bold text-secondary border border-secondary p-4"><Link to="/about">About</Link></li>
                    <li className="font-bold text-secondary border border-secondary p-4"><Link to="/blog">Blog</Link></li>
                    <li className="font-bold text-secondary border border-secondary p-4" onClick={toggleShowContactMenu}>Contact</li>
                </ul>
            </div>
        </div>
    )
}