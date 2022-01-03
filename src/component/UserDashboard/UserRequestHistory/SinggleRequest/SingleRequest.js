import React, { useEffect, useState } from "react";

const SingleRequest = () => {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    fetch(``)
      .then((res) => res.json())
      .then((data) => setRequests(data));
  }, []);
  return (
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
  );
};

export default SingleRequest;
