import Login from './Login';
import Main from './Main';
import Page404 from './Page404';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Register from './Register';
import Profile from './Profile';

function App() {
const loggedIn = true;
return (
  <div className="page">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main loggedIn={loggedIn} />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/profile" element={<Profile loggedIn={loggedIn}/>} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  </div>
);
}
export default App;
