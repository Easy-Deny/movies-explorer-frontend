import MoviesCard from './MoviesCard';

export function MoviesCardList(props) {
    return (
        <article className="cards">
            {props.cards.map((card) => {
                return <MoviesCard
                    key={card._id}
                    card={card}
                    markerTypeCircle={props.markerTypeCircle}
                />
            })}
        </article>
    );
}
export default MoviesCardList