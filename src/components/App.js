import Login from './Login';
import Main from './Main';
import Page404 from './Page404';
import React from 'react';
import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom'
import Register from './Register';
import Profile from './Profile';
//import cards from '../temp/cardList';
import Movies from './Movies';
import SavedMovies from './SavedMovies';
import { movieApi } from '../utils/MoviesApi';
import { mainApi } from '../utils/MainApi';
import DevTool from './DevTool';






function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [userData, setUserData] = React.useState();
  const token = localStorage.getItem('token');
  const CurrentUserContext = React.createContext();
  const [currentUser, setCurrentUser] = React.useState({});
  


  function login(formValue, setFormValue) {
    mainApi.login(formValue.email, formValue.password)
      .then((data) => {
        setCurrentUser(data)
        console.log(data);
        if (data) {
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

  function handleLogout() {
    setLoggedIn(false);
    localStorage.removeItem('token');
    goLogin();
  }

  function tokenCheck() {
    
    //console.log(token)
    if (token) {
      mainApi.checkToken(token)
        .then((res) => {
          if (res) {
            var userData = {
              email: res.email
            }
            console.log(userData)
            setLoggedIn(true);
            setUserData(userData)
            window.location.assign('/');
            //navigate("/", { replace: true })
          }
        })
        .catch((err) => console.log(err));
    }
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

  function goRegistration() {
    window.location.assign('/sign-up')
}

  function getAllMovies() {
    movieApi.getAllMovies()
      .then((data) => {
        setCards(data)
      })
      .catch((err) => { console.log(`не удалось обновить карточки, Ошибка: ${err}`) })
  }

  React.useEffect(() => {
    getAllMovies()
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
              loggedIn={loggedIn}
              onSubmit={login}
              handleLogout={handleLogout}
              currentUser={currentUser}
            />} />
            <Route path="/movies" element={<Movies
              cards={cards}
              loggedIn={loggedIn} />} />
            <Route path="/saved-movies" element={<SavedMovies
              cards={cards}
              loggedIn={loggedIn} />} />
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
