import Header from './Header';


function Profile(props) {
    return (
        <article className='page'>
            <Header loggedIn={props.loggedIn} />
            <section className="profile">
            <h1 className="profile__title">Привет, Виталий!</h1>
            <form className="profile__form" action="#" onSubmit={props.onSubmit}>
                <div className="profile__form-block">
                    <p className="profile__text">Имя</p>
                    <input className="profile__input" name="name" type="name" placeholder="Имя"
                        required minLength="2" maxLength="40" value={props.name} />
                </div>
                <span className="profile__text auth__text_red">Error</span>
                <div className="profile__form-block">
                    <p className="profile__text">E-mail</p>
                    <input className="profile__input" name="email" type="email"
                        placeholder="email" required minLength="2" maxLength="200" value={props.email} />
                </div>
                <span className="profile__text auth__text_red">Error</span>
                <button className="profile__button hover-animation" title="Войти" type="submit">Редактировать</button>
            </form>
            
            <button className="profile__button profile__button_red hover-animation" title="Выйти" type="submit" onClick={props.logout}>Выйти из аккаунта</button>
        </section>
        </article>
    );
}
export default Profile;