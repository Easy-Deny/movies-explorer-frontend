import Heading from "./Heading";

function Techs() {
    return (
        <article className="techs">
            <Heading
                heading={'Технологии'} />
            <section className="techs__section">
                <h2 className="techs__heading">7 технологий</h2>
                <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="techs__technologies">
                    <li className="techs__technology">HTML</li>
                    <li className="techs__technology">CSS</li>
                    <li className="techs__technology">JS</li>
                    <li className="techs__technology">React</li>
                    <li className="techs__technology">Git</li>
                    <li className="techs__technology">Express.js</li>
                    <li className="techs__technology">mongoDB</li>
                </ul>
            </section>
        </article>
    );
}
export default Techs;