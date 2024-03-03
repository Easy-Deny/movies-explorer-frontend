import FilterCheckbox from './FilterCheckbox';
import MoviesCard from './MoviesCard';

export function MoviesCardList(props) {
    return (
        <article className="cards">
            <FilterCheckbox/>
            <section className="cards__list">
            {props.cards.map((card) => {
                return <MoviesCard
                    key={card._id}
                    card={card}
                    markerTypeCircle={props.markerTypeCircle}
                />
            })}
            </section>
            <button className="cards__button hover-animation">Ещё</button>
        </article>
    );
}
export default MoviesCardList