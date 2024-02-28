import Login from './Login';
import Main from './Main';
import Page404 from './Page404';
import React, { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Register from './Register';
import Profile from './Profile';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  function logout() {
    setLoggedIn(false);
    localStorage.removeItem('loggedIn');
    window.location.assign('/');

  }
  function login(e) {
    e.preventDefault();
    localStorage.setItem('loggedIn', true);
    window.location.assign('/');
  }
  function goLogin(e) {
    e.preventDefault();
    window.location.assign('/sign-in');
  }

  return (
    <div className="page">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main loggedIn={localStorage.getItem('loggedIn')} />} />
          <Route path="/sign-in" element={<Login
            onSubmit={login} />} />
          <Route path="/sign-up" element={<Register
            onSubmit={goLogin} />} />
          <Route path="/profile" element={<Profile
            loggedIn={localStorage.getItem('loggedIn')}
            onSubmit={login}
            logout={logout}
          />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
