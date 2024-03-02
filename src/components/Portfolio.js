function Portfolio() {
    return (
        <article className="portfolio">
            <p className="portfolio__title">Портфолио</p>
            <table className="portfolio__table">
                <tr className="portfolio__table-string">
                    <td className="portfolio__table-column">Статичный сайт</td>
                    <td className="portfolio__table-column">
                        <a href="https://github.com/Easy-Deny" className="portfolio__link">↗</a>
                    </td>
                </tr>
                <tr className="portfolio__table-string">
                    <td className="portfolio__table-column">Адаптивный сайт</td>
                    <td className="portfolio__table-column">
                        <a href="https://github.com/Easy-Deny" className="portfolio__link">↗</a>
                    </td>
                </tr>
                <tr className="portfolio__table-string">
                    <td className="portfolio__table-column">Одностраничное приложение</td>
                    <td className="portfolio__table-column">
                        <a href="https://github.com/Easy-Deny" className="portfolio__link">↗</a>
                    </td>
                </tr>
            </table>


        </article>
    );
}
export default Portfolio;