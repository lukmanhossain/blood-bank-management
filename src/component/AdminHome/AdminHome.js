import React from 'react';
import Charts from '../Charts/Charts';
import './AdminHome.css'

const AdminHome = () => {
  return (
    <div>
    <Charts></Charts>
    <div className="">
      <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-4">
        <div className="col">
          <div className="p-3 border total-css">
            <p className="donor-icon">
              <i class="fas fa-users"></i>
            </p>
            <p className="total">Total Donors</p>
            <p className="count">4</p>
          </div>
        </div>
        <div className="col">
          <div className="p-3 border total-css">
            <p className="donor-icon">
              <i class="fas fa-spinner"></i>
            </p>
            <p className="total">Total Requests</p>
            <p className="count">5</p>
          </div>
        </div>
        <div className="col">
          <div className="p-3 border total-css">
            <p className="donor-icon">
              <i class="far fa-check-circle"></i>
            </p>
            <p className="total">Approved Requests</p>
            <p className="count">8</p>
          </div>
        </div>
        <div className="col">
          <div className="p-3 border total-css">
            <p className="donor-icon">
              <i class="fas fa-burn "></i>
            </p>
            <p className="total">Total Blood Unit</p>
            <p className="count">4</p>
          </div>
        </div>
      </div>
    </div>


  </div>
  );
};

export default AdminHome;
