import Login from './Login';
import Main from './Main';
import Page404 from './Page404';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Register from './Register';
import Profile from './Profile';
import cards from '../temp/cardList';
import Movies from './Movies';
import SavedMovies from './SavedMovies';



function App() {
  const [loggedIn, setLoggedIn] = React.useState();
  
  function goToUrl(url) {
    window.open(url)
  }

  function goBack() {
    window.history.back()
  }

  function logout() {
    localStorage.removeItem('loggedIn');
    setLoggedIn(false);
    window.location.assign('/');
  }
  function login(e) {
    e.preventDefault();
    setLoggedIn(true);
    localStorage.setItem('loggedIn', true);
    window.location.assign('/');
  }
  function registration(e) {
    e.preventDefault();
    window.location.assign('/sign-in');
  }

  return (
      <div className="page">
        <div className="page__body">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main
                loggedIn={loggedIn}
                goToUrl={goToUrl}
              />} />
              <Route path="/sign-in" element={<Login
                onSubmit={login} />} />
              <Route path="/sign-up" element={<Register
                onSubmit={registration} />} />
              <Route path="/profile" element={<Profile
                loggedIn={loggedIn}
                onSubmit={login}
                logout={logout}
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
          </BrowserRouter>
        </div>
      </div>
  );
}
export default App;
