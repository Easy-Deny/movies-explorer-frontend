import { Link } from 'react-router-dom';

function Navigation(props) {
    return (
            <nav className={`navigation ${props.loggedIn ?'header__button_hide': ''}`}>
                <Link to="/movies" className="header__button hover-animation">Фильмы</Link>
                <Link to="/saved-movies" className="header__button hover-animation">Сохранённые фильмы</Link>
            </nav>           
    );
}
export default Navigation;