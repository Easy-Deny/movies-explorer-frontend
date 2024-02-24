function AboutMe() {
    return (
        <article className="aboutMe">
            <p className="aboutMe__student">Студент</p>
            <div className="aboutMe__line"></div>
            <section className="aboutMe__description">
                <p className="aboutMe__name">Денис</p>
                <p className="aboutMe__profession">Фронтенд-разработчик, 30 лет</p>
                <p className="aboutMe__legend">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                    и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <a className="aboutMe__link" href="https://github.com/Easy-Deny/">Github</a>
                <div className="aboutMe__photo"></div>
            </section>
        </article>
    );
}
export default AboutMe;