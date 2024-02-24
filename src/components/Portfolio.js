function Portfolio() {
    return (
        <section className="portfolio">
            <p className="portfolio__title">Портфолио</p>
            <table className="portfolio__table">
                <tr className="portfolio__table-string">
                    <td className="portfolio__table-column">Статичный сайт</td>
                    <td className="portfolio__table-column">↗</td>
                </tr>
                <tr className="portfolio__table-string">
                    <td className="portfolio__table-column">Адаптивный сайт</td>
                    <td className="portfolio__table-column">↗</td>
                </tr>
                <tr className="portfolio__table-string">
                    <td className="portfolio__table-column">Одностраничное приложение</td>
                    <td className="portfolio__table-column">↗</td>
                </tr>
            </table>

           
        </section >
    );
}
export default Portfolio;