import Login from './Login';
import Main from './Main';
import Page404 from './Page404';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Register from './Register';
import Profile from './Profile';
//import cards from '../temp/cardList';
import Movies from './Movies';
import SavedMovies from './SavedMovies';
import { movieApi } from '../utils/MoviesApi';
import { mainApi } from '../utils/MainApi';
import DevTool from './DevTool';
import { MOVIES_API } from '../utils/const';

export const CurrentUserContext = React.createContext();




function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [likedCards, setLikedCards] = React.useState([]);
  const token = localStorage.getItem('token');

  const [currentUser, setCurrentUser] = React.useState(() => JSON.parse(localStorage.getItem('currentUser')));

  function login(formValue, setFormValue) {
    mainApi.login(formValue.email, formValue.password)
      .then((data) => {
        if (data) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('currentUser', JSON.stringify({ name: data.name, email: data.email, id: data._id }));
          setCurrentUser({ name: data.name, email: data.email, id: data._id });
          setFormValue({ email: '', password: '' });
          window.location.assign('/');
        }
      })
      .catch(err => console.log(err));
  }
  function registration(formValue, setFormValue) {
    mainApi.registration(formValue.name, formValue.email, formValue.password)
      .then((data) => {
        console.log(data);
        if (data) {
          setFormValue({ name: '', email: '', password: '' });
          window.location.assign('/sign-in');
        }
      })
      .catch(err => console.log(err));
  }

  function editProfile({
    name,
    email,
  }) {

    mainApi.editProfile({ name, email })
      .then((data) => {
        setCurrentUser({ name: data.name, email: data.email });
        localStorage.setItem('currentUser', JSON.stringify({ name: data.name, email: data.email }));
      })
      .then((data) => { console.log(data) })
      .catch((err) => { console.log(`не удалось сохранить новый профиль, Ошибка: ${err}`) })
  }

  function handleLogout() {
    setLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('search');
    goLogin();
  }

  function goToUrl(url) {
    window.open(url)
  }

  function goBack() {
    window.history.back()
  }

  function goLogin() {
    window.location.assign('/sign-in')
  }


  function getAllMovies() {
    movieApi.getAllMovies()
      .then((data) => {
        setCards(data)
      })
      .catch((err) => { console.log(`не удалось обновить карточки, Ошибка: ${err}`) })
  }

  function getAllLikedCards() {
    mainApi.getAllLikes()
      .then((likedCards) => {
        if (likedCards) {
          setLikedCards(likedCards)
        } else {
          console.log('у вас нет добавленных фильмов')
        }
      })
      .catch((err) => { console.log(`не удалось обновить карточки, Ошибка: ${err}`) })
  }

  function handleAddLike(card) {
    mainApi.addLike({
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,
      image: `${MOVIES_API}${card.image.url}`,
      trailerLink: card.trailerLink,
      thumbnail: `${MOVIES_API}${card.image.formats.thumbnail.url}`,
      movieId: String(card.id),
      nameRU: card.nameRU,
      nameEN: card.nameEN,
    })
      .then((newCard) => {
        console.log(newCard);
        setLikedCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => { console.log(`не удалось поставить лайк, Ошибка: ${err}`) });
  }

  function handleDeleteLike(card) {
    mainApi.deleteLike(card._id)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => { console.log(`не удалось убрать лайк, Ошибка: ${err}`) });
  }


  React.useEffect(() => {
    getAllMovies()
  },
    [])

  React.useEffect(() => {
    getAllLikedCards()
  },
    [])

  return (
    <div className="page">
      <div className="page__body">
        <DevTool
          loggedIn={loggedIn}
          currentUser={currentUser}
          token={token}
        />
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path="/" element={<Main
              loggedIn={loggedIn}
              goToUrl={goToUrl}
              token={token}
            />} />
            <Route path="/sign-in" element={<Login
              login={login}
              currentUser={currentUser}
            />} />
            <Route path="/sign-up" element={<Register
              registration={registration} />} />
            <Route path="/profile" element={<Profile
              onSubmit={login}
              handleLogout={handleLogout}
              editProfile={editProfile}
              currentUser={currentUser}
            />} />
            <Route path="/movies" element={
              <Movies
                cards={cards}
                token={token}
                handleAddLike={handleAddLike}
                handleDeleteLike={handleDeleteLike}
              />} />
            <Route path="/saved-movies" element={
              <SavedMovies
                cards={likedCards}
                token={token}
                handleDeleteLike={handleDeleteLike}
              />} />
            <Route path='*' element={<Page404
              onClick={goBack}
            />} />
          </Routes>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}
export default App;
