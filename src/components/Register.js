import logo from '../images/header__logo.svg';
import { Link } from 'react-router-dom';
import React from 'react';

function Register(props) {

    const [formValue, setFormValue] = React.useState({
        name: '',
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
    }
    const handleSubmit = (e) => {
        //console.log(`форма отправлена. email: ${formValue.email}, пароль: ${formValue.password}`);
        e.preventDefault();
        if (!formValue.name || !formValue.email || !formValue.password) {
            return;
        }
        props.registration(formValue, setFormValue);
    }

    return (
        <main className="auth">
            <Link to="/" className="page__logo">
                <img className="page__logo-icon" src={logo} alt="Логотип" />
            </Link>
            <h1 className="auth__title">Добро пожаловать!</h1>
            <form className="auth__form" action="#" onSubmit={handleSubmit}>
                <p className="auth__text">Имя</p>
                <input className="auth__input" name="name" type="text" placeholder="Имя"
                    required minLength="2" maxLength="40" value={formValue.name} onChange={handleChange} />
                <span className="auth__text auth__text_red">Error</span>
                <p className="auth__text">E-mail</p>
                <input className="auth__input" name="email" type="email" placeholder="email"
                    required minLength="2" maxLength="40" value={formValue.email} onChange={handleChange} />
                <span className="auth__text auth__text_red">Error</span>
                <p className="auth__text">Пароль</p>
                <input className="auth__input" name="password" type="password"
                    placeholder="пароль" required minLength="2" maxLength="200" value={formValue.password} onChange={handleChange} />
                <span className="auth__text auth__text_red">Error</span>
                <button className="auth__button hover-animation" title="Войти" type="submit">Зарегистрироваться</button>
            </form>
            <div className="auth__route">
                <p className="auth__description">Уже зарегистрированы?</p>
                <Link to="/sign-in" className="auth__link hover-animation">Войти</Link>
            </div>
        </main>
    );
}
export default Register;