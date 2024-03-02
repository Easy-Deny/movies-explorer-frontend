import { Link } from 'react-router-dom';

function Navigation(props) {
    return (
            <navi className={`navigation ${props.loggedIn ?'header__button_hide': ''}`}>
                <Link to="/movies" className="header__button">Фильмы</Link>
                <Link to="/saved-movies" className="header__button">Сохранённые фильмы</Link>
            </navi>           
    );
}
export default Navigation;