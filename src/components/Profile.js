import Header from './Header';
import React from 'react';

function Profile(props) {
    
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    function handleChangeName(e) {
       // setName(e.target.value);
    }
    function handleChangeEmail(e) {
        //setEmail(e.target.value);
    }

   // React.useEffect(() => {
       // setName(props.currentUser.name);
       // setEmail(props.currentUser.email);
  //  }, [props.currentUser]);

    return (
        <article className='page'>
            <Header token={props.token} />
            <section className="profile">
                <h1 className="profile__title">Привет, Виталий!</h1>
                <form className="profile__form" action="#" onSubmit={props.onSubmit}>
                    <div className="profile__form-block">
                        <p className="profile__text">Имя</p>
                        <input className="profile__input" name="name" type="text" placeholder="Имя"
                            required minLength="2" maxLength="40" value={name || ''} onChange={handleChangeName} />
                    </div>
                    <span className="profile__text profile__text_red">Error</span>
                    <div className="profile__form-block">
                        <p className="profile__text">E-mail</p>
                        <input className="profile__input" name="email" type="email"
                            placeholder="email" required minLength="2" maxLength="200" value={email || ''} onChange={handleChangeEmail} />
                    </div>
                    <span className="profile__text profile__text_red">Error</span>
                    <button className="profile__button hover-animation" title="Войти" type="submit">Редактировать</button>
                </form>

                <button className="profile__button profile__button_red hover-animation" title="Выйти" type="submit" onClick={props.handleLogout}>Выйти из аккаунта</button>
            </section>
        </article>
    );
}
export default Profile;