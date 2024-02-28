import Login from './Login';
import Main from './Main';
import Page404 from './Page404';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {

  const loggedIn = false;
  return (
    <div className="page">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn} />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
