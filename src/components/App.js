import Main from './Main';
import Login from './Login';
import Page404 from './Page404';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'

//function goLogin() {
//  window.location.assign('/sign-in')
//}

function App() {
  //  const navigate = useNavigate();
  // const [loggedIn, setLoggedIn] = useState(false);
  const loggedIn = false;
  return (
    <div className="App">
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
