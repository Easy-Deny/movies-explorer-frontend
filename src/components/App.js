import Header from './Header';
import logo from './logo.svg';


//import { Route, Routes, useNavigate } from 'react-router-dom'

function App() {
  const loggedIn = true;
  return (
    <div className="App">
      <Header
        loggedIn={loggedIn}
      />


    </div>
  );
}

export default App;
