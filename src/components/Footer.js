function Footer() {
    return (
        <footer className="footer">
            <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__line"></div>
            <div className="footer__text">
                <p className="footer__year">&#169; 2020.</p>
                <div className="footer__links">
                    <a className="footer__link hover-animation" href="https://practicum.yandex.ru" rel='noreferrer' target ='_blank'>Яндекс.Практикум</a>
                    <a className="footer__link hover-animation" href="https://github.com/Easy-Deny/" rel='noreferrer' target ='_blank'>Github</a>
                </div>
            </div>

        </footer>
    );
}
export default Footer;