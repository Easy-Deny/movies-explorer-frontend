import FilterCheckbox from './FilterCheckbox';
import MoviesCard from './MoviesCard';

export function MoviesCardList(props) {
    return (
        <article >
            <FilterCheckbox/>
            <section className="cards">
            {props.cards.map((card) => {
                return <MoviesCard
                    key={card._id}
                    card={card}
                    markerTypeCircle={props.markerTypeCircle}
                />
            })}
            </section>
        </article>
    );
}
export default MoviesCardList