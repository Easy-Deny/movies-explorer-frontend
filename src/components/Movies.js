import Footer from './Footer';
import Header from './Header';
import MoviesCardList from './MoviesCardList';
import SearchForm from './SearchForm';


import React from 'react';

export function Movies(props) {
    const isFirstSearch = props.isFirstSearch;
    const markerTypeCircle = true;
    const [filteredMovies, setFilteredMovies] = React.useState([])
    const [isShortChecked, setIsShortChecked] = React.useState(false);
    const [searchBarState, setSearchBarState] = React.useState('');

    function findMovies(searchValue, isChecked, movies) {
        if (searchValue) {
        localStorage.setItem('searchValue', JSON.stringify(searchValue));
        }
        
        localStorage.setItem('shortsChecked', JSON.stringify(isChecked));
        setSearchBarState(searchValue);
        if (searchValue !== null) {
        setFilteredMovies(movies.filter((movie) => {
            const searchedMovie = movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
            return !isChecked ? searchedMovie : (searchedMovie && movie.duration <= 40)
        }))
    } 
    }

//    React.useEffect(() => {
 //       if (!isFirstSearch) {
 //           //const movies = JSON.parse(localStorage.allMovies);
 //           const searchValue = JSON.parse(localStorage.getItem('searchValue'));
 //           const shortsIsChecked = JSON.parse(localStorage.getItem('shortsChecked'));
 //           //setAllMovies(movies);
 //           setSearchBarState(searchValue);
 //           setIsShortChecked(shortsIsChecked);
 //           findMovies(searchValue, shortsIsChecked, props.cards);
 //       }
 //   }, [])

    return (
        <article>
            <Header token={props.token} />
            <SearchForm
                findMovies={findMovies}
                cards={props.cards}
                isShortChecked={isShortChecked}
                setIsShortChecked={setIsShortChecked}
                searchBarState={searchBarState}
              //  isFirstSearch={props.isFirstSearch}
              //  setIsFirstSearch={props.setIsFirstSearch}
                searchValue={props.searchValue}
                setSearchValue={props.setSearchValue}
                toggleShortsFilter={props.toggleShortsFilter}
                searchChecked={props.searchChecked}
                handleSearch={props.handleSearch}
                handleChangeSearch={props.handleChangeSearch}
            />
            <MoviesCardList
                cards={props.cards}
                markerTypeCircle={markerTypeCircle}
                handleAddLike={props.handleAddLike}
                handleDeleteLike={props.handleDeleteLike}
                isFirstSearch={props.isFirstSearch}
                setIsFirstSearch={props.setIsFirstSearch}
                filteredMovies={filteredMovies}
            />
            <Footer />
        </article>
    );
}
export default Movies