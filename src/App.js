// import logo from './logo.svg'; 
import './App.css';
import Header from './Navbar/Header';


// importing the react router
import ContactPage from '/home/bhubesh/portfolio-two/src/components/contact/ContactPage.js'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Greeting from './Home/Greeting';
// import Contact from './components/contact/Contact';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
// import Splash from './components/Footer/splash/Splash';
import EducationComponent from '/home/bhubesh/portfolio-two/src/components/education/EducationComponent.js'
import Projects from './components/projects/Projects';

import "react-bootstrap/dist/react-bootstrap.min.js";

function App() {
  return (
    <div>
      <Router className = 'App'>
     
          <Header></Header>
        <Switch>
          <Route path = '/'>
            <Greeting></Greeting>
            <br></br>
            <Skills></Skills>
            {/* <br></br> */}
            <br></br>
            <EducationComponent></EducationComponent>
            <br></br>
            <Projects></Projects>
            <br></br>
            <ContactPage ></ContactPage>
            <br></br>
            <Footer></Footer>

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
