import FilterCheckbox from "./FilterCheckbox";
import React from 'react';
import SearchMessage from './SearchMessage';

function SearchForm(props) {

    return (
        <article className="search">
            <form className="search__section" action="#" onSubmit={props.handleSearch}>
                <div className='search__form'>
                    <input className="search__input" name="search" type="text" placeholder="Фильм"
                        required minLength="2" maxLength="40" value={props.searchValue || ''} onChange={props.handleChangeSearch} />
                    <button className="search__button hover-animation" title="Find" type="submit"></button>
                </div>
                <FilterCheckbox
                    searchChecked={props.searchChecked}
                    toggleShortsFilter={props.toggleShortsFilter} />
            </form>
<SearchMessage/>
        </article>
    );
}
export default SearchForm;