import Header from './Header';
import Footer from './Footer'


//import { Route, Routes, useNavigate } from 'react-router-dom'

function App() {
  const loggedIn = false;
  return (
    <div className="App">
      <Header
        loggedIn={loggedIn}
      />
      <Footer/>


    </div>
  );
}

export default App;
