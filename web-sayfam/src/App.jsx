import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalProvider } from './context/GlobalContext';
import Header from './pages/Header';
import MainPage from './pages/MainPage';
import Skills from './pages/Skills';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Footer from "./pages/Footer";
import ContactPages from "./pages/ContactPages";

function App() {
  return (
    <GlobalProvider>
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
    </GlobalProvider>
  );
}

export default App;
