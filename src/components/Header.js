import logo from '../images/header__logo.svg';
import accountIcon from '../images/header__account-icon.svg';

function Header(props) {
    return (
        <header className="header">
            <div className="header__logo-box">
                <img className="header__logo" src={logo} alt="Логотип" />
            </div >
            <navi className="header__navigation" style={{ display: (props.loggedIn ? 'inline-flex' : 'none') }}>
                <button className="header__button">Фильмы</button>
                <button className="header__button">Сохранённые фильмы</button>
            </navi>
            <div className="header__account">
                <button className="header__button" style={{ display: (!props.loggedIn ? 'inline-flex' : 'none') }}>Регистрация</button>
                <button className="header__button header__button_green" style={{ display: (!props.loggedIn ? 'inline-flex' : 'none') }}>Войти</button>
                <button className="header__button header__account-button" style={{ display: (props.loggedIn ? 'inline-flex' : 'none') }}>
                    <p className="header__account-button-text">Аккаунт</p>
                    <div className="header__account-logo">
                        <img className="header__account-icon" src={accountIcon} alt="Аккаунт" />
                    </div>
                </button>
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