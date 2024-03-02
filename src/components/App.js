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
  var loggedIn = localStorage.getItem('loggedIn');
  
  function logout() {
    localStorage.removeItem('loggedIn');
    window.location.assign('/');

  }
  function login(e) {
    e.preventDefault();
    localStorage.setItem('loggedIn', true);
    window.location.assign('/');
  }
  function registration(e) {
    e.preventDefault();
    window.location.assign('/sign-in');
  }

  return (
    <div className="page">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn} />} />
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
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
