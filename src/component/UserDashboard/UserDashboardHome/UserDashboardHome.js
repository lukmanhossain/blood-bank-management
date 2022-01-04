import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import "./UserDashboardHome.css";
const UserDashboardHome = () => {
  const { user } = useAuth();
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/donateBlood`)
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, [donations]);

  const filteredPending = donations.filter(
    (donate) => donate.status === "Pending"
  );
  const filteredApproved = donations.filter(
    (donate) => donate.status === "Approved"
  );
  const filteredRejected = donations.filter(
    (donate) => donate.status === "Rejected"
  );
  return (
    <div>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 g-lg-4">
        <div className="col">
          <div className="p-3 border bg-light">
            <p className="donor-icon">
              <i class="fas fa-paper-plane"></i>
            </p>
            <p className="total">Request Made</p>
            <p className="count">{donations.length}</p>
          </div>
        </div>
        <div className="col">
          <div className="p-3 border bg-light">
            <p className="donor-icon">
              <i class="fas fa-hourglass-half"></i>
            </p>
            <p className="total">Panding Request</p>
            <p className="count">{filteredPending.length}</p>
          </div>
        </div>
        <div className="col">
          <div className="p-3 border bg-light">
            <p className="donor-icon">
              <i class="far fa-check-circle"></i>
            </p>
            <p className="total">Approved Requests</p>
            <p className="count">{filteredApproved.length}</p>
          </div>
        </div>
        <div className="col">
          <div className="p-3 border bg-light">
            <p className="donor-icon">
              <i class="fas fa-times-circle"></i>
            </p>
            <p className="total">Rejected Request</p>
            <p className="count">{filteredRejected.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardHome;
