import './App.css'
import {BrowserRouter as Router,Route} from "react-router-dom";
import { GlobalProvider } from './context/GlobalContext';
import Header from './pages/Header';
import MainPage from './pages/MainPage';
import Skills from './pages/Skills';
import Profile from './pages/Profile';
import Projects from './pages/Projects';

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
    </GlobalProvider>
     
    
  )
}

export default App