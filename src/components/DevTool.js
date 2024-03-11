function DevTool(props) {


    return (
        <article>
            <p className="footer__year" >{`currentUser=${JSON.stringify(props.currentUser)} `}</p>
            <p className="footer__year" >{`token=${props.token}`}</p>
        </article>
    );
}
export default DevTool;