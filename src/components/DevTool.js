function DevTool(props) {
    return (
        <article>
            <p className="footer__year" >{`currentUserName=${props.currentUser.name} currentUserEmail=${props.currentUser.email} currentUserToken=${props.currentUser.token}`}</p>
            <p className="footer__year" >{`token=${props.token}`}</p>
        </article>
    );
}
export default DevTool;