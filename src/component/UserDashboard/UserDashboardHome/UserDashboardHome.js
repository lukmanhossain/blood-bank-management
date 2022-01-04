import React from "react";
import "./UserDashboardHome.css";
const UserDashboardHome = () => {
  return (
    <div>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 g-lg-4">
        <div className="col">
          <div className="p-3 border bg-light">
            <p className="donor-icon">
              <i class="fas fa-paper-plane"></i>
            </p>
            <p className="total">Request Made</p>
            <p className="count">1</p>
          </div>
        </div>
        <div className="col">
          <div className="p-3 border bg-light">
            <p className="donor-icon">
              <i class="fas fa-hourglass-half"></i>
            </p>
            <p className="total">Panding Request</p>
            <p className="count">0</p>
          </div>
        </div>
        <div className="col">
          <div className="p-3 border bg-light">
            <p className="donor-icon">
              <i class="far fa-check-circle"></i>
            </p>
            <p className="total">Approved Requests</p>
            <p className="count">1</p>
          </div>
        </div>
        <div className="col">
          <div className="p-3 border bg-light">
            <p className="donor-icon">
              <i class="fas fa-times-circle"></i>
            </p>
            <p className="total">Rejected Request</p>
            <p className="count">0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardHome;
