import logo from '../images/header__logo.svg';
import accountIcon from '../images/header__account-icon.svg';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className="header" style={{ background: (props.greenTheme ? '#073042' : 'none') }}>
            <Link to="/" className="page__logo">
                <img className="page__logo-icon" src={logo} alt="Логотип" />
            </Link>
            <navi className="header__navigation" style={{ display: (props.loggedIn ? 'inline-flex' : 'none') }}>
                <button className="header__button">Фильмы</button>
                <button className="header__button">Сохранённые фильмы</button>
            </navi>
            <div className="header__account">
                <Link to="/sign-up" className="header__button" style={{ display: (!props.loggedIn ? 'inline-flex' : 'none') }}>Регистрация</Link>
                <Link to="/sign-in" className="header__button header__button_green" style={{ display: (!props.loggedIn ? 'inline-flex' : 'none') }}>Войти</Link>
                <Link to="/profile" className="header__button header__account-button" style={{ display: (props.loggedIn ? 'inline-flex' : 'none') }}>
                    <p className="header__account-button-text">Аккаунт</p>
                    <div className="header__account-logo">
                        <img className="header__account-icon" src={accountIcon} alt="Аккаунт" />
                    </div>
                </Link>
            </div>
            <button className="header__button header__menu-button">
                <div className="header__menu-icon"></div>
                <div className="header__menu-icon"></div>
                <div className="header__menu-icon"></div>
            </button>
        </header>
    );
}
export default Header;