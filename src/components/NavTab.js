import { Link } from 'react-router-dom';
import accountIcon from '../images/header__account-icon.svg';

function NavTab(props) {

    return (
        <article className={`popup ${props.isOpen}`}>
            <div className="popup__body">
                <button className="popup__close-button" type="button" onClick={props.onClose}></button>
                <button className={`popup__link ${props.location.pathname==='/' ?  'popup__link_underline': ''}`} onClick={props.goHome}>Главная</button>
                <button className={`popup__link ${props.location.pathname==='/movies' ?  'popup__link_underline': ''}`} onClick={props.goMovies}>Фильмы</button>
                <button className={`popup__link ${props.location.pathname==='/saved-movies' ?  'popup__link_underline': ''}`} onClick={props.goSavedMovies}>Сохранённые&#32;фильмы</button>
                <Link to="/profile" className="popup__button">
                    <p className="header__account-button-text">Аккаунт</p>
                    <div className="header__account-logo popup__account-logo">
                        <img className="header__account-icon" src={accountIcon} alt="Аккаунт" />
                    </div>
                </Link>
            </div>
        </article>
    );
}
export default NavTab;