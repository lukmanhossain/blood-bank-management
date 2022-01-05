import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './Donor.css'

const Donor = () => {
  const [donorslist,setDonorslist]= useState([]);

  useEffect(()=>{
    fetch('http://hidden-coast-99117.herokuapp.com/donateBlood')
    .then(res => res.json())
    .then(data => setDonorslist(data))
  },[])

  if(!donorslist?.length){
    return <button class="btn btn-primary spner-btn" type="button" disabled>
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Loading...
  </button>
  }

    return (
        <div>
            <h4 className='donor-details mt-3'>DONOR DETAILS</h4>
            <div className='pt-3'>
            <Table striped bdonorslisted hover>
      <thead >
    <tr className='t-head'>
      <th>Sl</th>
      <th>Name</th>
      <th>Age</th>
      <th>Gender</th>
      <th>Blood Group</th>
      <th>Address</th>
      <th>Mobile</th>
      <th>Email</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
 
  {donorslist?.map((donorslist, index) => (
     <tr>
     <td>{index + 1}</td>
     <td>{donorslist?.name}</td>
     <td>{donorslist?.age}</td>
     <td>{donorslist?.gender}</td>
     <td>{donorslist?.bloodGroup}</td>
     <td>{donorslist?.address}</td>
     <td>{donorslist?.mobile}</td>
     <td>{donorslist?.email}</td>
     <td>{donorslist?.status}</td>
     <td>
      <button className='approbe-btn'>Approve</button>
      <button className='approbe-btn'>Rejected</button>
  
     </td>
  
     </tr>
  )
  )}

</tbody>
  
</Table>
 </div>
</div>
    )
}

export default Donor;