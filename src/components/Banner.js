import React, {useState,useRef,useEffect} from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

import BackgroundHome from "../resources/BackgroundHome.jpg";

export default function Banner(){
    const navMenuRef = useRef();
    const [showMobileMenu,setShowMobileMenu] = useState(false);
    const menuWatcher = new IntersectionObserver(watching =>{
        if(watching[0].isIntersecting === false){
            setShowMobileMenu(true);
        }else{
            setShowMobileMenu(false);
        }
    })
    useEffect(()=>{
        menuWatcher.observe(navMenuRef.current);
    })
    return (
        <>  
            <div ref={navMenuRef} className="banner-background w-full h-screen bg-red-50 sticky bottom-0" style={{backgroundImage:`url(${BackgroundHome})`}}>
                <NavbarDesktop/>
                <div className="flex flex-col justify-center h-full w-full px-4 sm:px-40">
                    <h2 className="h-pop text-center sm:text-left text-3xl sm:text-5xl">Yusuf Keraan</h2>
                    <h2 className="h-pop text-center text-3xl sm:text-5xl">Frontend Developer</h2>
                    <div className="flex justify-center sm:justify-end items-end w-full">
                        <h2 className="h-pop text-center w-max sm:w-fit sm:text-right text-3xl sm:text-5xl pr-5">Fullstack loading</h2>
                        <div className="dot-flashing"></div>
                    </div>
                </div>
            </div>
            <div className={`${!showMobileMenu ? "opacity-0 pointer-events-none" : null} fixed top-0 left-0 w-full bg-secondary`}>
                <NavbarMobile/>
            </div>
        </>
    )
}