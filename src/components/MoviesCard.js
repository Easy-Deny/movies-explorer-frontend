function MoviesCard(props) {
    ;
    const isOwn = false;

    function handleAddClick() {
        props.onCardAdd(props.newCard);
    }

    return (
        <article className="card">
            <img className="card__img" src={props.newCard.link} alt={props.newCard.name} />
            <div className="card__description">
                <h2 className="card__name">{props.newCard.name}</h2>
                <button className={isOwn ? 'card__flag card__flag_is-added' : 'card__flag'} type="button" onClick={handleAddClick}></button>
            </div>
            <p className="card__duration">{props.newCard.duration}</p>
        </article>
    );
}
export default MoviesCard