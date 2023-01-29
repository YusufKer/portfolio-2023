export default function RatingStars({score}){
    
    const solidStars = Math.floor(parseInt(score));
    const half = parseFloat(score) % solidStars > 0;

    const buildStars = () =>{
        const jsx = [];
        if(score === "0.5"){
            jsx.push(<span className="fa fa-star-half checked"></span>);
            return jsx;
        }
        for(let i = 0; i <  solidStars ; i++){
            jsx.push(<span className="fa fa-star checked"></span>);
        }
        if(half){
            jsx.push(<span className="fa fa-star-half checked"></span>);
        }
        return jsx
    }

    return(
        <div className="stars flex-shrink-0 w-[60px]">
            { buildStars() }
        </div>
    )
}