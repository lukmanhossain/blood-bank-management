import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "./UserRequestHistory.css";
const UserRequestHistory = () => {
  const [requests, setRequests] = useState([]);
  return (
    <div className="request-history-container">
      <h2>My Request History</h2>
      <div className="request-history">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Patient Age</th>
              <th>Reason</th>
              <th>Quantity</th>
              <th>Doctor Name</th>
              <th>Date</th>
              <th>Blood Group</th>
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
              <td>Cancer</td>
              <td>3</td>
              <td>Dr. Forhad Uddin</td>
              <td>10/11/2020</td>
              <td>AB+</td>
              <td>Approved</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UserRequestHistory;
