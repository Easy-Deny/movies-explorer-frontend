import Header from './Header';
import Techs from './Techs';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Footer from './Footer';




//import { Route, Routes, useNavigate } from 'react-router-dom'

function App() {
  const loggedIn = false;
  return (
    <div className="App">
      <Header
        loggedIn={loggedIn}
      />
      <Techs/>
      <AboutMe/>
      <Portfolio/>
      <Footer/>


    </div>
  );
}

export default App;
