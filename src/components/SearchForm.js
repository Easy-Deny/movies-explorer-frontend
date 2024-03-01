function SearchForm(props) {
    return (
        <article className="search">
            <form className="search__form" action="#" onSubmit={props.onSubmit}>
                <input className="search__input" name="film" type="name" placeholder="Фильм"
                    required minLength="2" maxLength="40"/>
                <button className="search__button" title="Find" type="submit"></button>
            </form>
        </article>
    );
}
export default SearchForm;