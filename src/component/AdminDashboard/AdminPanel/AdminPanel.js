import React from 'react';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import BloodRequests from '../BloodRequests/BloodRequests';
import BloodStocks from '../BloodStocks/BloodStocks';
import Donation from '../Donation/Donation';
import Donor from '../../Donor/Donor';
import Home from '../AdminHome/AdminHome';
import RequestHistory from '../RequestHistory/RequestHistory';
import './AdminPanel.css'
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';

const AdminPanel = () => {
    const {logOut} = useAuth();

    let { path, url } = useRouteMatch();
    return (    
        <div className=''>
            {/* Admin panel Heding start */}
            <div className=' head-line'>
              <h4 className='blood-heading'> <i class="fab fa-gratipay love"></i> Admin Dashboard</h4> 

              <button type="button" class="btn position-relative ">
              <i class="fas fa-bell"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    99+
                    <span class="visually-hidden">unread messages</span>
                </span>
                </button>


              <button onClick={logOut} className='log-out-btn'>Logout <i class="fas fa-sign-out-alt"></i></button>
            </div>
          {/* Admin panel Heding end */}
                <div className='row dashbord-fild '>
                <div className='col-lg-2 col-sm-12 dashbord-list'>
                        <div>
                            <Link className='link-style' to={`${url}`}>
                              <li className='list-item'><i class="fas fa-home list-icon"></i>Home</li>
                            </Link>
                            <Link className='link-style' to={`${url}/donor`}>
                                <li className='list-item'><i class="fas fa-user-alt list-icon"></i>Donor</li>
                            </Link>

                            <Link className='link-style' to={`${url}/donation`}>
                                <li className='list-item'><i class="fas fa-hand-holding-usd list-icon"></i>Donation</li>
                            </Link>
                            <Link className='link-style' to={`${url}/bloodRequests`}>
                                <li className='list-item'><i class="fas fa-sync-alt  list-icon"></i>Blood Requests</li>
                            </Link>
                            <Link className='link-style' to={`${url}/requestHistory`}>
                                <li className='list-item'><i class="fas fa-history list-icon"></i>Request History</li>
                            </Link>
                            <Link className='link-style' to={`${url}/bloodStocks`}>
                                <li className='list-item'><i class="fas fa-hand-holding-medical list-icon"></i>Blood Stocks</li>
                            </Link>
                            <Link className='link-style' to={`${url}/make-admin`}>
                                <li className='list-item'><i class="fas fa-hand-holding-medical list-icon"></i>Make Admin</li>
                            </Link>
                        
                        </div>
                </div>


                    <div className='col-lg-10 col-sm-12 p-3'>
                        <Switch>
                            <Route exact path={`${path}`}> 
                            <Home></Home>
                            </Route>
                            <Route exact path={`${path}/donor`}> 
                           <Donor></Donor>
                            </Route>
                            <Route exact path={`${path}/donation`}> 
                           <Donation></Donation>
                            </Route>
                            <Route exact path={`${path}/bloodRequests`}> 
                            <BloodRequests></BloodRequests>
                            </Route>
                            <Route exact path={`${path}/requestHistory`}> 
                            <RequestHistory></RequestHistory>
                            </Route>
                            <Route exact path={`${path}/bloodStocks`}> 
                           <BloodStocks></BloodStocks>
                            </Route>
                            <Route exact path={`${path}/make-admin`}> 
                           <MakeAdmin></MakeAdmin>
                            </Route>
                            
                    </Switch>
                    </div>

                </div>
        </div>  
           
        
        
    );
};

export default AdminPanel;