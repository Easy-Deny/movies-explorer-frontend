import { Link } from 'react-router-dom';

function Navigation(props) {
    return (
            <navi className="navigation" style={{ display: (props.loggedIn ? 'inline-flex' : 'none') }}>
                <Link to="/movies" className="header__button">Фильмы</Link>
                <Link to="/saved-movies" className="header__button">Сохранённые фильмы</Link>
            </navi>           
    );
}
export default Navigation;