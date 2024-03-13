function DevTool(props) {


    return (
        <article>
            <p className="footer__year" >{`currentUser=${JSON.stringify(props.currentUser)} `}</p>
            <p className="footer__year" >{`token=${props.token}`}</p>
            <p className="footer__year" >{`search=${localStorage.getItem('search')}`}</p>
        </article>
    );
}
export default DevTool;