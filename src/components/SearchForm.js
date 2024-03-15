import FilterCheckbox from "./FilterCheckbox";
import React from 'react';

function SearchForm(props) {
    const search = props.searchValue;

    function handleChangeSearch(e) {
        props.setSearchValue(e.target.value);
    }

    function handleSearch(e) {
        e.preventDefault();
        localStorage.setItem('searchValue', JSON.stringify({ search }))
       // const searchValue = JSON.parse(localStorage.getItem('searchValue'));
        if (props.isFirstSearch) {
            props.setIsFirstSearch(false);
        }
        props.findMovies(e.target.search.value);
    }

    function toggleShortsFilter() {
        if (props.isShortChecked) {
            props.setIsShortChecked(false);
            props.filterMovies(props.searchValue || '', false, props.cards);
        } else {
            props.setIsShortChecked(true);
            props.filterMovies(props.searchValue || '', true, props.cards);
        }
    }

    return (
        <article className="search">
            <form className="search__section" action="#" onSubmit={handleSearch}>
                <div className='search__form'>
                    <input className="search__input" name="search" type="text" placeholder="Фильм"
                        required minLength="2" maxLength="40" value={props.searchValue || ''} onChange={handleChangeSearch} />
                    <button className="search__button hover-animation" title="Find" type="submit"></button>
                </div>
                <FilterCheckbox
                    isShortChecked={props.isShortChecked}
                    toggleShortsFilter={toggleShortsFilter} />
            </form>
        </article>
    );
}
export default SearchForm;