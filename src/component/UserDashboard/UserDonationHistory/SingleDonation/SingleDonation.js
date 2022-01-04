import React, { useEffect, useState } from "react";

const SingleDonation = () => {
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    fetch(``)
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);
  return (
    <tr>
      <td>Ruhul Amin</td>
      <td>26</td>
      <td>Cancer</td>
      <td>B+</td>
      <td>No</td>
      <td>10/11/2020</td>
      <td>Approved</td>
    </tr>
  );
};

export default SingleDonation;
