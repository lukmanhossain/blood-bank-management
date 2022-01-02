
import AdminPanel from "./component/AdminPanel/AdminPanel";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <div>
        <Router>
     <div className="App">
       <Switch>
        
       <Route path="/adminPanel">
            <AdminPanel></AdminPanel>
        </Route>
       </Switch>
     </div>
   </Router>
    
    </div>
  );
}

export default App;
