import React from 'react';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import BloodRequests from '../BloodRequests/BloodRequests';
import BloodStocks from '../BloodStocks/BloodStocks';
import Donation from '../Donation/Donation';
import Donor from '../Donor/Donor';
import Home from '../AdminHome/AdminHome';
import Patient from '../Patient/Patient';
import RequestHistory from '../RequestHistory/RequestHistory';
import './AdminPanel.css'

const AdminPanel = () => {
    let { path, url } = useRouteMatch();

    // const style={
    //     textDecoration:"none",

    //         };
    return (    
        <div className='mx-3 mt-5'>
            {/* Admin panel Heding start */}
            <div className=' head-line'>
              <p className='blood-heading'> <i class="fab fa-gratipay love"></i>Blood Bank Management System</p>  
              <button className='log-out-btn'>Logout <i class="fas fa-sign-out-alt"></i></button>
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
                            <Link className='link-style' to={`${url}/patient`}>
                                <li className='list-item'><i class="fas fa-user-injured list-icon"></i>Patient</li>
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
                            <Route exact path={`${path}/patient`}> 
                           <Patient></Patient>
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
                            
                    </Switch>
                    </div>

                </div>
        </div>  
           
        
        
    );
};

export default AdminPanel;