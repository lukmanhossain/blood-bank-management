import AdminPanel from "./component/AdminPanel/AdminPanel";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserDashboard from "./component/UserDashboard/UserDashboard/UserDashboard";

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
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
