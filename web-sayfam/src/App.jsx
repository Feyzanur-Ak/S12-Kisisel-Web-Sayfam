import './App.css'
import {BrowserRouter as Router,Route} from "react-router-dom";
import { GlobalProvider } from './context/GlobalContext';
import Header from './pages/Header';
import MainPage from './pages/MainPage';
import Skills from './pages/Skills';

function App() {


  return (

    <GlobalProvider>
    <Router>
 <Route exact path="/" component={Header} />
    </Router>
    <MainPage/>
    <Skills/>
    </GlobalProvider>
     
    
  )
}

export default App