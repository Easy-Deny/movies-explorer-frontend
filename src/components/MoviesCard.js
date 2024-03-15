import React from "react";
import { MOVIES_API } from "../utils/const";

function MoviesCard(props) {
    var min = props.card.duration;
    var dur = (min > 60 ? Math.floor((min / 60)).toString() + 'ч' + (min - (Math.floor((min / 60)) * 60)).toString() + 'м' : (min).toString() + 'м');

    const [isLiked, setIsLiked] = React.useState();

    function handleLikeClick(card) {
        if (props.markerTypeCircle) {
            if (isLiked) {
                props.handleDeleteLike(card);
            } else {
                props.handleAddLike(card);
            }
            setIsLiked(!isLiked);
        } else {
            props.handleDeleteLike(card);
        }
    }

    return (
        <article className="card">
            <img className="card__img" src={ props.markerTypeCircle ? MOVIES_API+props.card.image.url : props.card.image} alt={props.card.nameRU} />
            <div className="card__description">
                <h2 className="card__name">{props.card.nameRU}</h2>
                <button className={`hover-animation ${props.markerTypeCircle ? isLiked ? 'card__flag card__flag_type_circle card__flag_is-added' : 'card__flag card__flag_type_circle' : 'card__flag card__flag_type_cross'}`} onClick={() => handleLikeClick(props.card)} type="button" ></button>
            </div>
            <p className="card__duration">{dur}</p>
        </article>
    );
}
export default MoviesCard