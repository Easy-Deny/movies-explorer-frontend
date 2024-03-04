import Heading from "./Heading";

function AboutProject() {
    return (
        <article className="aboutProject" id='aboutProject'>
            <Heading
                heading={'О проекте'} />
            <section className="aboutProject__section">
                <ul className="aboutProject__description">
                    <li className="aboutProject__text aboutProject__heading">Дипломный проект включал 5 этапов</li>
                    <li className="aboutProject__text aboutProject__heading">На выполнение диплома ушло 5 недель</li>
                    <li className="aboutProject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</li>
                    <li className="aboutProject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</li>
                </ul>
                <ul className="aboutProject__graph">
                    <li className="aboutProject__graphText aboutProject__period aboutProject__period_green" >1 неделя</li>
                    <li className="aboutProject__graphText aboutProject__period">4 недели</li>
                    <li className="aboutProject__graphText aboutProject__signature">Back-end</li>
                    <li className="aboutProject__graphText aboutProject__signature">Front-end</li>
                </ul>
            </section>
        </article>
    );
}
export default AboutProject;