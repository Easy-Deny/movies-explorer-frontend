import FilterCheckbox from "./FilterCheckbox";

function SearchForm(props) {
    return (
        <article className="search">
            <form className="search__section" action="#" onSubmit={props.onSubmit}>
                <div className='search__form'>
                <input className="search__input" name="film" type="name" placeholder="Фильм"
                    required minLength="2" maxLength="40"/>
                <button className="search__button hover-animation" title="Find" type="submit"></button>
                </div>
                <FilterCheckbox/>
            </form>
        </article>
    );
}
export default SearchForm;