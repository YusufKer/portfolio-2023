import {useContext} from "react";

import { TogglersContext } from "../Context/togglersContext";

import ProfilePic1 from "../resources/ProfilePic1.JPG"

export default function Intro(){

    const {toggleShowContactMenu} = useContext(TogglersContext)

    return (
        <div className="container m-auto bg-[#ede9dd]/75 grid sm:grid-cols-2 p-6 mt-10">
            <div className="col-span-2 sm:col-span-1">
                <h2 className="txt-heading-2 font-bold pb-6 col-span-2 text-secondary underline decoration-primary">About Me</h2>
                <p className="txt-base text-secondary">
                    My name is Yusuf Keraan and I’m a Frontend Developer with ambition to become a Fullstack Dev. Before learning to code I had tried my hand at many things but nothing seemed to stick. I’m proud to say that, though I have failed at some things and just couldn't stay interested in others, I regret none of it. This is my strength, the fact that I can tell the difference between when I am all in on something and when I’m half-assing it and I can confidently say that when it comes to development… I am all in. 
                </p>
                <p className="txt-base pt-4 text-secondary">
                    So... for shits and giggles, here's a list of some of the things I've tried as I was stumbling my way towards development. Some of which, were pretty fun.
                </p>
                <ul className="pt-4 list-disc list-inside text-secondary">
                    <li>Construction Worker</li>
                    <li>Student of Deen (This is someone who studies the Religion of islam)</li>
                    <li>Paintball gun and knives salesman</li>
                    <li>Mechatronic Engineering Student</li>
                    <li>Book salesman</li>
                    <li>Boilermakers assistance (I'm actually a pretty good welder)</li>
                </ul>
                <p className="txt-base pt-4 text-secondary">
                    This is my professional portfolio and though my language may be colloquial, I hope to convey my passion and love for programming. I hope to find work that facilitates my growth as a developer. <a onClick={toggleShowContactMenu} className="cursor-pointer text-primary font-bold">Now hire me!</a>
                </p>
                <p className="txt-base pt-4 text-secondary">
                    I'd also appreciate any feedback that you might have on the UX of this portfolio.
                </p>
            </div>
            <div className="col-span-2 sm:col-span-1 flex justify-center items-center p-6">
                <img className="w-full" src={ProfilePic1}/>
            </div>
        </div>
    )
}