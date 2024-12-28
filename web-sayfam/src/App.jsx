import './App.css'
import {BrowserRouter as Router,Route} from "react-router-dom";
import { GlobalProvider } from './context/GlobalContext';
import Header from './pages/Header';
import MainPage from './pages/MainPage';

function App() {


  return (

    <GlobalProvider>
    <Router>
 <Route exact path="/" component={Header} />
    </Router>
    <MainPage/>
    </GlobalProvider>
     
    
  )
}

export default App