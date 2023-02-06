import MnCLogo from "../resources/MnCLogo.png"

import NavbarMobile from "../components/NavbarMobile";
import RatingStars from "../components/RatingStars";

export default function AboutPage(){
    return (
        <>
            <div className="top-0 left-0 w-full bg-secondary">
                <NavbarMobile/>
            </div>
            <div className="container m-auto p-6 bg-[#ede9dd]/75">
                {/* SKILLS */}
                <h2 className="txt-heading-2 text-secondary font-bold py-4">Skills</h2>
                <p className="txt-base pt-4 text-secondary">I've given myself a rating out of five stars for each technology that I've used. These rating are my own estimations and speak to how comfortable I am or how much experience I have with the technology in question.</p>
                <p className="txt-base pt-4 text-secondary">If you look at the about section of the previous version of my <a href="https://portfolio-2021-8a131.web.app/about" target="_blank">porfolio</a>, you might notice that some of the ratings have gone down or havent moved at all. In some cases, it's because I havent used the technology much since then and I might need a refresher and in other cases, it's because I might have thought too highly of myself to begin with and realise that the more I learn, the more apparent it becomes that I have much more to learn.</p>
                <div className="sm:grid-cols-2 grid gap-4 pt-4">
                    <ul className=" text-secondary">
                        <li className="underline font-bold decoration-primary flex gap-4 justify-between">HTML <RatingStars score="4"/></li>
                            <li className="pl-4 flex gap-4 justify-between">MJML (This is a framework for building responsive Mailers)<RatingStars score="3.5"/></li>
                        <li className="underline  font-bold decoration-primary flex gap-4 justify-between">CSS<RatingStars score="4"/></li>
                            <li className="pl-4 flex gap-4 justify-between">SASS, LESS<RatingStars score="4"/></li>
                            <li className="pl-4 flex gap-4 justify-between">Bootstrap, Tailwind (Big fan) , Materialize<RatingStars score="4"/></li>
                        <li className="underline font-bold decoration-primary flex gap-4 justify-between">Javascript <RatingStars score="3.5"/></li>
                            <li className="pl-4 flex gap-4 justify-between">JQuery (Not a big fan) <RatingStars score="3.5"/></li>
                            <li className="pl-4 flex gap-4 justify-between">React<RatingStars score="3.5"/></li> 
                            <li className="pl-4 flex gap-4 justify-between">Vue<RatingStars score="3.5"/></li>
                            <li className="pl-4 flex gap-4 justify-between">Node<RatingStars score="2.5"/></li>
                            <li className="pl-4 flex gap-4 justify-between">Express<RatingStars score="2.5"/></li>
                        <li className="underline font-bold decoration-primary flex gap-4 justify-between">PHP<RatingStars score="2"/></li>
                        <li className="underline font-bold decoration-primary flex gap-4 justify-between">NPM<RatingStars score="2.5"/></li>
                        <li className="underline font-bold decoration-primary flex gap-4 justify-between">Git<RatingStars score="2.5"/></li>
                        <li className="underline font-bold decoration-primary flex gap-4 justify-between">SQL<RatingStars score="1.5"/></li>
                        <li className="underline font-bold decoration-primary flex gap-4 justify-between">MongoDB<RatingStars score="2"/></li>
                        <li className="underline font-bold decoration-primary flex gap-4 justify-between">Firebase<RatingStars score="3"/></li>
                        <li className="underline font-bold decoration-primary flex gap-4 justify-between">Contentful<RatingStars score="3"/></li>
                    </ul>
                    <div>Picture of something goes here</div>
                </div>

                {/* WORK EXPERIENCE */}
                <h2 className="txt-heading-2 text-secondary py-4 font-bold">Work Experience</h2>
                <div className="bg-primary/60 p-4">
                    <p className="text-secondary font-bold">M & C Saatchi Abel</p>
                    <p className="text-secondary text-base pt-4">
                        I started at M & C Saatchi Abel in 2020 as a developer intern. It was my first taste of Real dev work as I had previously only dont a few small jobs for some local businesses.
                        It was here where I learned to code responsive Mailers using a framework called MJML and a tool called litmus to test them. 
                        Coding Mailers made me aware of the frustrating technology limitations that come with catering for different browsers and email clients. 
                        Sometimes solutions need to be creative and this is where I started honing the skill of thinking up creative solutions to difficult problems. 
                    </p>
                    <p className="text-secondary text-base pt-4">Contactable references are available on request</p>
                </div>
                <div className="bg-secondary/60 p-4">
                    <p class="text-primary font-bold">Elemental Web Solutions</p>
                    <p className="text-black text-base pt-4">
                        I started at Elemental thinking that I was an experienced developer after my Internship... Boy was I wrong. It's here that I got to learn about attention to detail and following designs to the pixel.
                        I was thrown into the deep end and I value the experience because I got to learn so much from devs who had years of experience, but also from devs who were closer to my level of experience. 
                        The lesson being that anyone can teach you something that you didn't know so don't be suprised when lessons come from people younger than you.
                        I also had the opportunity to learn Vue js and work on a large scale React project. In my short time at Elemental, I'd say that the growth was exponential.
                        I suppose this is just a consequence of coding for atleast 8 hours everyday.  
                    </p>
                    <p className="text-black text-base pt-4">Contactable references are available on request</p>
                </div>

                <h2 className="txt-heading-2 text-secondary py-4 font-bold">Other...</h2>
                <p className="txt-base pt-4">Here's some information that is not reall relevant to my career but who knows... Maybe you'd like to know what my hobbies and interests are.</p>
            </div>
        </>
    )
}