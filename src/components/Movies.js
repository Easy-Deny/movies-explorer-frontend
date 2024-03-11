import Footer from './Footer';
import Header from './Header';
import MoviesCardList from './MoviesCardList';
import SearchForm from './SearchForm';

export function Movies(props) {
    const markerTypeCircle = true;
    return (
        <article>
            <Header token={props.token}/>
            <SearchForm/>
            <MoviesCardList
                cards={props.cards}
                markerTypeCircle={markerTypeCircle} />
            <Footer />
        </article>
    );
}
export default Movies