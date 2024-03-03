import logo from '../images/header__logo.svg';
import accountIcon from '../images/header__account-icon.svg';
import { Link , useLocation} from 'react-router-dom';
import Navigation from './Navigation';
import NavTab from './NavTab';
import React from 'react';

function Header(props) {
    const [isMenuPopupOpen, setIsMenuPopupOpen] = React.useState(false);
    let location = useLocation();

    function handleMenuClick() {
        setIsMenuPopupOpen(true);
    }

    function closePopup() {
        setIsMenuPopupOpen(false);
        console.log(location);
    }

    function handleGoHome(){
        closePopup();
        window.location.assign('/');
    }
    function handleGoMovies(){
        closePopup();
        window.location.assign('/movies');
    }
    function handleGoSavedMovies(){
        closePopup();
        window.location.assign('/saved-movies');
    }
    return (
        <header className="header" style={{ background: (props.greenTheme ? '#073042' : 'none') }}>
            <Link to="/" className="page__logo hover-animation">
                <img className="page__logo-icon" src={logo} alt="Логотип" />
            </Link>
            <Navigation
                loggedIn={props.loggedIn} />
            <div className="header__account">
                <Link to="/sign-up" className={`header__button hover-animation ${!props.loggedIn ?'header__button_hide': ''}`}>Регистрация</Link>
                <Link to="/sign-in" className={`header__button header__button_green hover-animation ${!props.loggedIn ?'header__button_hide': ''}`}>Войти</Link>
                <Link to="/profile" className={`header__button header__account-button hover-animation ${props.loggedIn ?'header__button_hide': ''}`}>
                    <p className="header__account-button-text">Аккаунт</p>
                    <div className="header__account-logo">
                        <img className="header__account-icon" src={accountIcon} alt="Аккаунт" />
                    </div>
                </Link>
            </div>
            <button className={`header__button header__menu-button hover-animation ${props.loggedIn ?'header__button_hide': ''}`} onClick={handleMenuClick}>
                <div className="header__menu-icon"></div>
                <div className="header__menu-icon"></div>
                <div className="header__menu-icon"></div>
            </button>
            <NavTab
            isOpen={isMenuPopupOpen ? 'popup_is-opened' : ''}
            onClose={closePopup}
            goHome={handleGoHome}
            goMovies={handleGoMovies}
            goSavedMovies={handleGoSavedMovies}
            loggedIn={props.loggedIn}
            location={location}/>
        </header>
  
    );
}
export default Header;