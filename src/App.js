import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminPanel from "./component/AdminPanel/AdminPanel";
import ContactUs from "./component/ContactUs/ContactUs";
import HomeDonor from "./component/HomeDonor/HomeDonor";
import HomeMain from "./component/HomeMain/HomeMain/HomeMain";
import Login from "./component/Login/Login/Login";
import Register from "./component/Login/Register/Register";
import Footer from "./component/Shared/Footer/Footer";
import NavBar from "./component/Shared/NavBar/NavBar";
import UserDashboard from "./component/UserDashboard/UserDashboard/UserDashboard";
import UserDashboardHome from "./component/UserDashboard/UserDashboardHome/UserDashboardHome";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <HomeMain />
            </Route>
            <Route path="/home">
              <HomeMain />
            </Route>
            <Route path="/adminpanel">
              <AdminPanel />
            </Route>
            <Route path="/userdashboard">
              <UserDashboard></UserDashboard>
            </Route>
            <Route path="/donor">
              <HomeDonor></HomeDonor>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/contact-us">
              <ContactUs />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
