import AdminPanel from "./component/AdminPanel/AdminPanel";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserDashboard from "./component/UserDashboard/UserDashboard/UserDashboard";
import Login from "./component/Login/Login/Login";
import Register from "./component/Login/Register/Register";

function App() {
  return (
    <div>
      <Router>
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
    </div>
  );
}

export default App;
