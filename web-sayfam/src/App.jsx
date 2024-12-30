import { BrowserRouter as Router } from "react-router-dom";
import { GlobalProvider } from './context/GlobalContext';
import Header from './pages/Header';
import MainPage from './pages/MainPage';
import Skills from './pages/Skills';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Footer from "./pages/Footer";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <main>
          <div id="main">
            <MainPage />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="profile">
            <Profile />
          </div>
          <div id="projects">
            <Projects />
          </div>
        </main>
        <Footer />
      </Router>
    </GlobalProvider>
  );
}

export default App;
