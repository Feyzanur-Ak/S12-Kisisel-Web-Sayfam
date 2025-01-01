import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './pages/Header';
import MainPage from './pages/MainPage';
import Skills from './pages/Skills';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Footer from "./pages/Footer";
import ContactPages from "./pages/ContactPages";

function App() {
  return (
  
      <Router>
        <Header />
        <main>
          <Switch>
            {/* Ana sayfa rotası */}
            <Route exact path="/">
              <>
                <MainPage />
                <div id="skills">
                  <Skills />
                </div>
                <Profile />
                <div id="projects">
                  <Projects />
                </div>
              </>
            </Route>

            {/* İletişim sayfası rotası */}
            <Route path="/contact">
              <ContactPages />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
 
  );
}

export default App;
