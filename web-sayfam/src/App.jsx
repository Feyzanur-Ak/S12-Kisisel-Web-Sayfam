import './App.css'
import {BrowserRouter as Router,Route} from "react-router-dom";
import Header from './components/Header';
import { GlobalProvider } from './context/GlobalContext';
import MainPage from './components/MainPage';
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