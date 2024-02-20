import logo from '../images/header__logo.svg';
import accountIcon from '../images/header__account-icon.svg';
function Header(props) {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Логотип" />
            <navi className="header__navigation">
                <link className="header__navigation-link" href="" />
                <link className="header__navigation-link" href="" />
            </navi>
            <div className="header__account">
                <button className="header__account-signup">Регистрация</button>
                <button className="header__account-signin">Войти</button>
                <button className="header__account-profile">Аккаунт
                    <div className="header__account-logo">
                        <img className="header__account-icon" src={accountIcon} alt="Аккаунт" />
                    </div>
                </button>
            </div>
        </header>
    );
}
export default Header;