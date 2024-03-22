import logo from '../images/header__logo.svg';
import accountIcon from '../images/header__account-icon.svg';
import { Link , useLocation} from 'react-router-dom';
import Navigation from './Navigation';
import NavTab from './NavTab';
import React from 'react';

function Header(props) {
    
    let location = useLocation();



    function handleGoHome(){
        props.closeAllPopups();
        window.location.assign('/');
    }
    function handleGoMovies(){
        props.closeAllPopups();
        window.location.assign('/movies');
    }
    function handleGoSavedMovies(){
        props.closeAllPopups();
        window.location.assign('/saved-movies');
    }
    return (
        <header className="header" style={{ background: (props.greenTheme ? '#073042' : 'none') }}>
            <Link to="/" className="header__logo hover-animation">
                <img className="header__logo-icon" src={logo} alt="Логотип" />
            </Link>
            <Navigation
                loggedIn={props.loggedIn}
                token={props.token}
                 />
            <div className="header__account">
                <Link to="/sign-up" className={`header__button hover-animation ${props.token === null ? '' : 'header__button_hide'}`}>Регистрация</Link>
                <Link to="/sign-in" className={`header__button header__button_green hover-animation ${props.token  === null ? '' : 'header__button_hide'}`}>Войти</Link>
                <Link to="/profile" className={`header__button header__account-button hover-animation ${props.token === null? 'header__account-button_hide': ''}`}>
                    <p className="header__account-button-text">Аккаунт</p>
                    <div className="header__account-logo">
                        <img className="header__account-icon" src={accountIcon} alt="Аккаунт" />
                    </div>
                </Link>
            </div>
            <button className={`header__button header__menu-button hover-animation ${props.token === null ? 'header__menu-button_hide' : ''}`} onClick={props.handleMenuClick} type="button">
                <span className="header__menu-icon"></span>
                <span className="header__menu-icon"></span>
                <span className="header__menu-icon"></span>
            </button>
            <NavTab
            isOpen={props.isMenuPopupOpen ? 'popup_is-opened' : ''}
            onClose={props.closeAllPopups}
            goHome={handleGoHome}
            goMovies={handleGoMovies}
            goSavedMovies={handleGoSavedMovies}
         //   loggedIn={props.loggedIn}
            token={props.token}
            location={location}/>
        </header>
  
    );
}
export default Header;