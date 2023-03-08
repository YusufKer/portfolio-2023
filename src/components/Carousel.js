import { useRef } from "react";

// IMPORT RESOURCES
/*
C:\Projects\portfolio-2023\portfolio-2023\src\resources\logos\
*/
import html from "../resources/logos/HTML5_Logo_512.png";
import css from "../resources/logos/icons8-css3-144.png";
import sass from "../resources/logos/512px-Sass_Logo_Color.svg.png";
import less from "../resources/logos/less_logo.png";
import bootstrap from "../resources/logos/Bootstrap_logo.svg.png";
import tailwind from "../resources/logos/Tailwind_CSS_Logo.svg.png";
// import materialize from "../resources/logos/materialize.jpg";
import javascript from "../resources/logos/javascript-39417.png";
import jquery from "../resources/logos/282806_jquery_logo_icon.png";
import react from "../resources/logos/1174949_js_react js_logo_react_react native_icon.png";
import vue from "../resources/logos/Vue.js_Logo_2.svg.png";
import node from "../resources/logos/512px-Node.js_logo.svg.png";
import express from "../resources/logos/Expressjs.png";
import php from "../resources/logos/PHP-logo.svg.png";
import npm from "../resources/logos/512px-Npm-logo.svg.png";
import git from "../resources/logos/512px-Git-logo.png";
import mysql from "../resources/logos/logo-mysql-26300.png";
import mongodb from "../resources/logos/MongoDB_Logo.svg.png";
import firebase from "../resources/logos/512px-Firebase_Logo.svg.png";
// import contentful from "../resources/logos/contentful.jpeg";

const logos = [
    html,
    css,
    sass,
    less,
    bootstrap,
    tailwind,
    javascript,
    jquery,
    react,
    vue,
    node,
    express,
    php,
    npm,
    git,
    mysql,
    mongodb,
    firebase
]


export default function Carousel({heading}){
    const scrollRef = useRef();
    const scrollLeft = () =>{
        scrollRef.current.scrollLeft -= 350;
    }
    const scrollRight = () =>{
        scrollRef.current.scrollLeft += 350;
    }
    return (
        <>  
            <div className="container m-auto">
                <h2 className="text-primary txt-heading-2 block text-center py-6 font-bold">{heading}</h2>
            </div>
            <div className="relative container m-auto px-6">
                <div onClick={scrollLeft} class="arrow_left hidden lg:block absolute top-1/2 left-0 -translate-y-1/2 w-8 h-8 z-50 rounded-full bg-primary cursor-pointer hover:opacity-70"></div>
                <div onClick={scrollRight} class="arrow_right hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 w-8 h-8 z-50 rounded-full bg-primary cursor-pointer hover:opacity-70"></div>
                <div ref={scrollRef} className="shadow-x container m-auto hide-scrollbar py-6 scroll-smooth snap-x snap-mandatory">
                    <div className="flex gap-4 items-center justify-center w-max">
                        {logos.map(logo => 
                        <div className="h-[200px] w-[200px] bg-green-50- flex-shrink-0 snap-end p-2">
                            <img class="w-full h-full object-contain" src={logo} title="html 5" alt="html 5"/>
                        </div>
                        )}
                        
                    </div>
                </div>
            </div>
        </>
    )
}