import avatar from '../images/avatar.png';
import Heading from './Heading';

function AboutMe() {
    return (
        <article className="aboutMe">
            <Heading
            heading={'Студент'}/>
            <section className="aboutMe__description">
                <img className="aboutMe__photo" src={avatar} alt='Аватар' />
                <p className="aboutMe__name">Виталий</p>
                <p className="aboutMe__profession">Фронтенд-разработчик, 30 лет</p>
                <p className="aboutMe__legend">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                    и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <a className="aboutMe__link hover-animation" href="https://github.com/Easy-Deny/" rel='noreferrer' target ='_blank'>Github</a>
            </section>
        </article>
    );
}
export default AboutMe;