import Header from './Header';


function Profile(props) {
    return (
        <article className="profile">
            <Header loggedIn={props.loggedIn} />
            <h2 className="profile__title">Привет, Виталий!</h2>
            <form className="profile__form" action="#" onSubmit={props.onSubmit}>
                <div className="profile__form-block">
                <p className="profile__text">Имя</p>
                <input className="profile__input" name="name" type="name" placeholder="Виталий"
                    required minLength="2" maxLength="40" value={props.name} />
                </div>
                <span className="profile__text auth__text_red">Error</span>
                <div className="profile__form-block">
                <p className="profile__text">E-mail</p>
                <input className="profile__input" name="email" type="email"
                    placeholder="pochta@yandex.ru" required minLength="2" maxLength="200" value={props.email} />
                </div>
                <span className="profile__text auth__text_red">Error</span>
                <button className="profile__button" title="Войти" type="submit">Редактировать</button>
            </form>
            <button className="profile__button profile__button_red" title="Войти" type="submit" onClick={props.logout}>Выйти из аккаунта</button>
        </article>
    );
}
export default Profile;