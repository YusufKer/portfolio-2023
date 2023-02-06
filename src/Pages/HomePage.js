import Banner from "../components/Banner";
import Intro from "../components/Intro";
import Carousel from "../components/Carousel";


export default function HomePage(){
    return(
        <div id="home-page">
            <Banner/>
            <Intro/>
            <Carousel heading="Some technologies I've worked on..."/>
        </div>
    )
}