import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminPanel from "./component/AdminDashboard/AdminPanel/AdminPanel";
import ContactUs from "./component/ContactUs/ContactUs";
import MakeAdmin from "./component/AdminDashboard/MakeAdmin/MakeAdmin";
import HomeDonor from "./component/HomeDonor/HomeDonor";
import HomeMain from "./component/HomeMain/HomeMain/HomeMain";
import Login from "./component/Login/Login/Login";
import Register from "./component/Login/Register/Register";
import NotFound from "./component/Shared/NotFound/NotFound";
import Footer from "./component/Shared/Footer/Footer";
import NavBar from "./component/Shared/NavBar/NavBar";
import UserDashboard from "./component/UserDashboard/UserDashboard/UserDashboard";
import UserDonateBlood from "./component/UserDashboard/UserDonateBlood/UserDonateBlood";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Payment from "./component/DashBoard/Payment/Payment";
// import DashBoard from "./component/DashBoard/DashBoard/DashBoard";

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
            {/* <Route path="/dashboard">
              <DashBoard />
            </Route> */}
            <Route path="/payment">
              <Payment />
            </Route>
            <Route path="/admindashboard">
              <AdminPanel />
            </Route>
            <Route path="/userdashboard">
              <UserDashboard></UserDashboard>
            </Route>
            <Route path="/donor">
              <HomeDonor></HomeDonor>
            </Route>
            <Route path="/be-a-donar">
              <UserDonateBlood/>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/makeAdmin">
              <MakeAdmin />
            </Route>
            <Route path="/contact-us">
              <ContactUs />
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
