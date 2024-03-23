function DevTool(props) {


    return (
        <article>
            <p className="footer__year" >{`currentUser=${JSON.stringify(props.currentUser)} `}</p>
            <p className="footer__year" >{`token=${props.token}`}</p>
            <p className="footer__year" >{`searchValue=${props.searchValue}`}</p>
            <p className="footer__year" >{`searchChecked=${props.searchChecked}`}</p>
            <p className="footer__year" >{`cards=${props.cards.length}`}</p>
            <p className="footer__year" >{`filteredCards=${props.filteredCards.length}`}</p>

        </article>
    );
}
export default DevTool;