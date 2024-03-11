import Header from './Header';
import Promo from './Promo';
import AboutProject from './AboutProject';
import Techs from './Techs';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Footer from './Footer';

function Main(props) {
  return (
    <div>
      <Header
        loggedIn={props.loggedIn}
        greenTheme={true}
        token={props.token}
      />
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio 
        goToUrl={props.goToUrl}/>
      </main>
      <Footer />
    </div>
  );
}
export default Main;