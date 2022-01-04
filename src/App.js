import AdminPanel from "./component/AdminPanel/AdminPanel";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from "./component/Home/Home";

function App() {
  return (
    <div>
      {/* <Router>
     <div className="App">
       <Switch>
        
       <Route path="/adminPanel">
            <AdminPanel></AdminPanel>
        </Route>
       </Switch>
     </div>
   </Router>
     */}
      <Home></Home>
    </div>
  );
}

export default App;
