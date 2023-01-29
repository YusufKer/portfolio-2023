import { useRef } from "react";

export default function Carousel({heading}){
    const scrollRef = useRef();
    const scrollLeft = () =>{
        scrollRef.current.scrollLeft -= 200
    }
    const scrollRight = () =>{
        scrollRef.current.scrollLeft += 200
    }
    return (
        <>  
            <div className="container m-auto">
                <h2 className="text-primary txt-heading-2 block text-center py-6 font-bold">{heading}</h2>
            </div>
            <div className="relative container m-auto px-6">
                <div onClick={scrollLeft} class="hidden lg:block absolute top-1/2 left-0 -translate-y-1/2 w-8 h-8 z-50 rounded-full bg-primary"></div>
                <div onClick={scrollRight} class="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 w-8 h-8 z-50 rounded-full bg-primary"></div>
                <div ref={scrollRef} className="shadow-x container m-auto hide-scrollbar py-6 scroll-smooth snap-x snap-mandatory">
                    <div className="flex gap-4 items-center justify-center w-max">
                        <div className="h-[200px] w-[200px] bg-green-50 flex-shrink-0 snap-end"></div>
                        <div className="h-[200px] w-[200px] bg-green-50 flex-shrink-0 snap-end"></div>
                        <div className="h-[200px] w-[200px] bg-green-50 flex-shrink-0 snap-end"></div>
                        <div className="h-[200px] w-[200px] bg-green-50 flex-shrink-0 snap-end"></div>
                        <div className="h-[200px] w-[200px] bg-green-50 flex-shrink-0 snap-end"></div>
                        <div className="h-[200px] w-[200px] bg-green-50 flex-shrink-0 snap-end"></div>
                        <div className="h-[200px] w-[200px] bg-green-50 flex-shrink-0 snap-end"></div>
                        <div className="h-[200px] w-[200px] bg-green-50 flex-shrink-0 snap-end"></div>
                    </div>
                </div>
            </div>
        </>
    )
}