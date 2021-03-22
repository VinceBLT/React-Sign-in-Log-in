import logo from "./logo.svg";
import "./App.css";
import { SignIn } from "./pages/Sign-in/Sign-in";
import { LogIn } from "./pages/Log-in/Log-in";
import { User } from "./pages/User/User";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={SignIn} />
        <Route path="/LogIn" exact component={LogIn} />
        <Route path="/User" exact component={User} />
      </Router>
    </div>
  );
}

export default App;
