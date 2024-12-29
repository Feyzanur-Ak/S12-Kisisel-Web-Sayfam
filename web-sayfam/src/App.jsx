import {BrowserRouter as Router,Route} from "react-router-dom";
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
 <Route exact path="/" component={Header} />
    </Router>
    <MainPage/>
    <Skills/>
    <Profile/>
    <Projects/>
    <Footer/>
    </GlobalProvider>
     
    
  )
}

export default App