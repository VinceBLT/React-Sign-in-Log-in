import "./App.css";
import { SignIn } from "./pages/Sign-in/Sign-in";
import { LogIn } from "./pages/Log-in/Log-in";
import { User } from "./pages/User/User";
import { SignInFormik } from "./pages/Sign-in-Formik/Sign-in-Formik";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={SignInFormik} />
        <Route path="/LogIn" exact component={LogIn} />
        <Route path="/User" exact component={User} />
        <Route path="/SignIn" exact component={SignIn} />
      </Router>
    </div>
  );
}

export default App;
