import { Link } from 'react-router-dom';

function Navigation(props) {
    return (
            <nav className="navigation">
                <Link to="/movies" className={`header__button hover-animation ${!props.token ?'header__button_hide': ''}`}>Фильмы</Link>
                <Link to="/saved-movies" className={`header__button hover-animation ${!props.token ?'header__button_hide': ''}`}>Сохранённые фильмы</Link>
            </nav>           
    );
}
export default Navigation;