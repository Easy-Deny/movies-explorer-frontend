import promoLogo from '../images/promo__logo.svg';

function Promo() {
    return (
        <article className="promo">
            <section className="promo__section">
                <div className="promo__description">
                    <h className="promo__heading">Учебный проект студента факультета Веб&#8209;разработки.</h>
                    <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                </div>
                <img className="promo__logo" src={promoLogo} alt='Логотип' />
            </section>
            <a className='promo__button hover-animation' href="https://code.s3.yandex.net/web-developer/static/new-program/web-diploma-criteria-2.0/checklist_jsx_diplom.pdf" rel='noreferrer' target ='_blank'>Узнать больше</a>
        </article>
    );
}
export default Promo;