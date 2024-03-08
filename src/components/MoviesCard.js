import React from "react";
function MoviesCard(props) {
    var min = props.card.duration;
    var dur= (min > 60 ? Math.floor((min/60)).toString()+'ч'+ (min-(Math.floor((min/60))*60)).toString()+'м': (min).toString()+'м');
    
    const [isOwn, setIsOwn] = React.useState();
    function handleAddCardClick(){
        setIsOwn(!isOwn);
    }
    
    return (
        <article className="card">
            <img className="card__img" src={`https://api.nomoreparties.co${props.card.image.url}`} alt={props.card.nameRU} />
            <div className="card__description">
                <h2 className="card__name">{props.card.nameRU}</h2>
                <button className={`hover-animation ${props.markerTypeCircle ? isOwn ? 'card__flag card__flag_type_circle card__flag_is-added' : 'card__flag card__flag_type_circle'  : 'card__flag card__flag_type_cross'}`} onClick={handleAddCardClick} type="button" ></button>
            </div>
            <p className="card__duration">{dur}</p>
        </article>
    );
}
export default MoviesCard