import logo from '../images/header__logo.svg';
import { Link } from 'react-router-dom';

import Header from './Header';


function Profile(props) {
    return (
        <article className="profile">
              <Header/>
            <Link to="/" className="page__logo">
                <img className="page__logo-icon" src={logo} alt="Логотип" />
            </Link>
            <h2 className="auth__title">Рады видеть!</h2>
            <form className="auth__form" action="#" onSubmit={props.onSubmit}>
                <p className="auth__text">E-mail</p>
                <input className="auth__input" name="email" type="email" placeholder=""
                    required minLength="2" maxLength="40" value={props.email} />
                <span className="auth__text auth__text_red">Error</span>
                <p className="auth__text">Пароль</p>
                <input className="auth__input" name="password" type="password"
                    placeholder="" required minLength="2" maxLength="200" value={props.password} />
                <span className="auth__text auth__text_red">Error</span>
                <button className="auth__button" title="Войти" type="submit">Войти</button>
            </form>
            <div className="auth__route">
                <p className="auth__description">Ещё не зарегистрированы?</p>
                <Link to="/sign-up" className="auth__link">Регистрация</Link>
            </div>
        </article>
    );
}
export default Profile;