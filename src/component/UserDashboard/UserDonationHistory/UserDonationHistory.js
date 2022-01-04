import React, { useState } from "react";
import { Table } from "react-bootstrap";
import SingleDonation from "./SingleDonation/SingleDonation";
import "./UserDonationHistory.css";
const UserDonationHistory = () => {
  const [donations, setDonation] = useState([]);
  return (
    <div className="donation-history-container">
      <h2>My Donation History</h2>
      <div className="donation-history">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Blood Group</th>
              <th>Disease (if any)</th>
              <th>Donate Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* {donations.map((donation) => (
              <SingleDonation
                key={donation._id}
                donation={donation}
              ></SingleDonation>
            ))} */}
            <tr>
              <td>Ruhul Amin</td>
              <td>26</td>
              <td>B+</td>
              <td>No</td>
              <td>10/11/2020</td>
              <td>Approved</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UserDonationHistory;
