import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import SingleDonation from "./SingleDonation/SingleDonation";
import "./UserDonationHistory.css";
const UserDonationHistory = () => {
  const { user } = useAuth();
  const [donations, setDonations] = useState([]);

  // useEffect(() => {
  //   fetch(`https://hidden-coast-99117.herokuapp.com/donateBlood/${user.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setDonations(data));
  // }, []);

  useEffect(() => {
    fetch(`https://hidden-coast-99117.herokuapp.com/${user.email}/donateBlood/`)
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);
  // console.log(donations);
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
            {donations.map((donation) => (
              <SingleDonation
                key={donation._id}
                donation={donation}
              ></SingleDonation>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UserDonationHistory;
