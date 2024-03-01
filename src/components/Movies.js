import Footer from './Footer';
import Header from './Header';
import MoviesCardList from './MoviesCardList';

export function Movies(props) {
    const markerTypeCircle = true;
    return (
        <article>
            <Header />
            <MoviesCardList
                cards={props.cards}
                markerTypeCircle={markerTypeCircle} />
            <Footer />
        </article>
    );
}
export default Movies