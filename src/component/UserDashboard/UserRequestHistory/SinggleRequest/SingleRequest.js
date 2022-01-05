import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";

const SingleRequest = (props) => {
  const {
    name,
    age,
    bloodGroup,
    reason,
    doctorName,
    donateDate,
    status,
    quantity,
  } = props.request;
  const [requests, setRequests] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/${user.email}/bloodRequest`)
      .then((res) => res.json())
      .then((data) => setRequests(data));
  }, []);
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{reason}</td>
      <td>{quantity}</td>
      <td>{doctorName}</td>
      <td>{donateDate}</td>
      <td>{bloodGroup}</td>
      <td>{status}</td>
    </tr>
  );
};

export default SingleRequest;
