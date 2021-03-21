import logo from './logo.svg';
import './App.css';
import { SignIn } from "./pages/Sign-in/Sign-in";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>
            <Route path="/" exact component={SignIn}/>
        </Router>
    </div>
  );
}

export default App;
