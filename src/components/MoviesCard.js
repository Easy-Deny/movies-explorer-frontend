import React from "react";
function MoviesCard(props) {
    
    const [isOwn, setIsOwn] = React.useState();
    function handleAddCardClick(){
        setIsOwn(!isOwn);
    }
    
    return (
        <article className="card">
            <img className="card__img" src={props.card.link} alt={props.card.name} />
            <div className="card__description">
                <h2 className="card__name">{props.card.name}</h2>
                <button className={`hover-animation ${props.markerTypeCircle ? isOwn ? 'card__flag card__flag_type_circle card__flag_is-added' : 'card__flag card__flag_type_circle'  : 'card__flag card__flag_type_cross'}`} onClick={handleAddCardClick} type="button" ></button>
            </div>
            <p className="card__duration">{props.card.duration}</p>
        </article>
    );
}
export default MoviesCard