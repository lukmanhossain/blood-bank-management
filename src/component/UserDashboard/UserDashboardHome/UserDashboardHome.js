import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import "./UserDashboardHome.css";
const UserDashboardHome = () => {
  const { user } = useAuth();
  const [donations, setDonations] = useState([]);
  const [requests, setrequests] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/${user.email}/donateBlood`)
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, [donations]);

  useEffect(() => {
    fetch(`http://localhost:5000/${user.email}/bloodRequest`)
      .then((res) => res.json())
      .then((data) => setrequests(data));
  }, [requests]);

  const donationsPending = donations.filter(
    (donate) => donate.status === "Pending"
  );
  const donationsApproved = donations.filter(
    (donate) => donate.status === "Approved"
  );
  const donationsRejected = donations.filter(
    (donate) => donate.status === "Rejected"
  );

  const requestsPending = requests.filter(
    (donate) => donate.status === "Pending"
  );
  const requestsApproved = requests.filter(
    (donate) => donate.status === "Approved"
  );
  const requestsRejected = requests.filter(
    (donate) => donate.status === "Rejected"
  );
  return (
    <div>
      <div>
        <h4 className="mt-3 mb-3">Blood Donation Dashboard</h4>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 g-lg-4">
          <div className="col">
            <div className="p-3 border bg-light card-plate">
              <p className="donor-icon">
                <i className="fas fa-paper-plane text-primary"></i>
              </p>
              <p className="total total-text">Request Made</p>
              <p className="count count-text">{donations.length}</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <p className="donor-icon">
                <i className="fas fa-hourglass-half text-warning"></i>
              </p>
              <p className="total">Panding Request</p>
              <p className="count">{donationsPending.length}</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <p className="donor-icon">
                <i className="far fa-check-circle text-success"></i>
              </p>
              <p className="total">Approved Requests</p>
              <p className="count">{donationsApproved.length}</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <p className="donor-icon">
                <i className="fas fa-times-circle text-danger"></i>
              </p>
              <p className="total">Rejected Request</p>
              <p className="count">{donationsRejected.length}</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-5 " />
      <div className="blood-request-dashboard">
        <h4 className="m3-5 mb-3">Blood Request Dashboard</h4>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 g-lg-4">
          <div className="col">
            <div className="p-3 border bg-light">
              <p className="donor-icon">
                <i className="fas fa-paper-plane text-primary"></i>
              </p>
              <p className="total">Request Made</p>
              <p className="count">{requests.length}</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <p className="donor-icon">
                <i className="fas fa-hourglass-half text-warning"></i>
              </p>
              <p className="total">Panding Request</p>
              <p className="count">{requestsPending.length}</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <p className="donor-icon">
                <i className="far fa-check-circle text-success"></i>
              </p>
              <p className="total">Approved Requests</p>
              <p className="count">{requestsApproved.length}</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <p className="donor-icon">
                <i className="fas fa-times-circle text-danger"></i>
              </p>
              <p className="total">Rejected Request</p>
              <p className="count">{requestsRejected.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardHome;
