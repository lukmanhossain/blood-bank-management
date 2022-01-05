import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import SingleRequest from "./SinggleRequest/SingleRequest";
import "./UserRequestHistory.css";
const UserRequestHistory = () => {
  const [requests, setRequests] = useState([]);
  const { user } = useAuth();

  // useEffect(() => {
  //   fetch(`https://hidden-coast-99117.herokuapp.com/bloodRequest/${user.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setRequests(data));
  // }, [requests]);

  useEffect(() => {
    fetch(`https://hidden-coast-99117.herokuapp.com/${user.email}/bloodRequest`)
      .then((res) => res.json())
      .then((data) => setRequests(data));
  }, [requests]);

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
              <th>Address</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <SingleRequest
                key={request._id}
                request={request}
              ></SingleRequest>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UserRequestHistory;
