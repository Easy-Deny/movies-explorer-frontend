import Header from './Header';
import Promo from './Promo';
import AboutProject from './AboutProject';
import Techs from './Techs';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Footer from './Footer';

function Main(props) {
    return (
      <main className="App">
        <Header
          loggedIn={props.loggedIn}
          greenTheme={true}
        />
        <Promo/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
        <Portfolio/>
        <Footer/>
      </main>
    );
  }
  export default Main;