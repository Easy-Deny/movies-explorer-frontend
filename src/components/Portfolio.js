function Portfolio(props) {
    return (
        <article className="portfolio">
            <p className="portfolio__title">Портфолио</p>
            <table className="portfolio__table">
                <tr className="portfolio__table-string hover-animation" onClick={()=>props.goToUrl("https://easy-deny.github.io/russian-travel/")}>
                    <td className="portfolio__table-column">Статичный сайт</td>
                    <td className="portfolio__table-column portfolio__link">↗</td>
                </tr>
                <tr className="portfolio__table-string hover-animation" onClick={()=>props.goToUrl("https://easy-deny.github.io/russian-travel/")}>
                    <td className="portfolio__table-column">Адаптивный сайт</td>
                    <td className="portfolio__table-column portfolio__link">↗</td>
                </tr>
                <tr className="portfolio__table-string hover-animation" onClick={()=>props.goToUrl("https://easy-deny.github.io/russian-travel/")}>
                    <td className="portfolio__table-column">Одностраничное приложение</td>
                    <td className="portfolio__table-column portfolio__link">↗</td>
                </tr>
            </table>


        </article>
    );
}
export default Portfolio;