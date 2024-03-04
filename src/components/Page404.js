function Page404(props) {
    return (
        <article className="page404">
            <h className="page404__heading">404</h>
            <h className="page404__description">Страница не найдена</h>
            <button className="page404__link hover-animation" type='button' onClick={props.onClick}>Назад</button>
        </article >
    );
}
export default Page404;