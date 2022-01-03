import AdminPanel from "./component/AdminPanel/AdminPanel";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserDashboard from "./component/UserDashboard/UserDashboard/UserDashboard";
import Login from "./component/Login/Login/Login";
import Register from "./component/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Header from "./component/Header/Header/Header";
import ContactForm from "./component/Header/Contact/ContactForm";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
<<<<<<< HEAD
        <div className="App">
          <Switch>
            <Route path="/adminPanel">
              <AdminPanel></AdminPanel>
            </Route>
            <Route path="/userDashboard">
              <UserDashboard></UserDashboard>
            </Route>
            <Route exact path="/">
              <Header></Header>
            </Route>
            <Route path="/home">
              <Header></Header>
            </Route>
            <Route path="/contact-us">
              <ContactForm></ContactForm>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </div>
      </Router>
=======
          <div className="App">
            <Switch>
              <Route path="/adminPanel">
                <AdminPanel></AdminPanel>
              </Route>
              <Route path="/userDashboard">
                <UserDashboard></UserDashboard>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
            </Switch>
          </div>
        </Router>
>>>>>>> 19929197d442c8c1d722e6a5f41e39115e81e24d
      </AuthProvider>
    </div>
  );
}

export default App;
