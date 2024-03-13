import FilterCheckbox from "./FilterCheckbox";
import React from 'react';

function SearchForm(props) {
    const [search, setSearch] = React.useState('');
    function handleChangeSearch(e) {
        setSearch(e.target.value);
    }

function handleSearch(){
localStorage.setItem('search' , JSON.stringify({search}))

}

    return (
        <article className="search">
            <form className="search__section" action="#" onSubmit={handleSearch}>
                <div className='search__form'>
                <input className="search__input" name="film" type="text" placeholder="Фильм"
                    required minLength="2" maxLength="40" value={search} onChange={handleChangeSearch}/>
                <button className="search__button hover-animation" title="Find" type="submit"></button>
                </div>
                <FilterCheckbox/>
            </form>
        </article>
    );
}
export default SearchForm;