import React, { useState } from "react";
import { Table } from "react-bootstrap";
import SingleRequest from "./SinggleRequest/SingleRequest";
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
            {requests.map((request) => (
              <SingleRequest
                key={request._id}
                donation={request}
              ></SingleRequest>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UserRequestHistory;
