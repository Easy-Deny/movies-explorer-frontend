import MoviesCard from './MoviesCard';

export function MoviesCardList(props) {
    return (
        <article className="cards">
            
            <section className="cards__list">
            {props.cards.map((card) => {
                return <MoviesCard
                    key={card._id}
                    card={card}
                    markerTypeCircle={props.markerTypeCircle}
                />
            })}
            </section>
            <button className="cards__button hover-animation" type="button">Ещё</button>
        </article>
    );
}
export default MoviesCardList