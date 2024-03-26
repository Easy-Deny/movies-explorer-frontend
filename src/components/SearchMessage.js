function SearchMessage(props) {

    return (
        <article className={`searchMessage ${props.isOpen}`}>
            <p className="searchMessage__text">{`сообщение: ${props.searchMessage}`}</p>
        </article>
    );
}
export default SearchMessage;