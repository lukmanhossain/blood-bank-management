import React from 'react';
import { Table } from 'react-bootstrap';
import './Donation.css'

const Donation = () => {
    return (
        <div>
            <h4 className='donor-details mt-3'>BLOOD DONATION DETAILS</h4>
            <div className='pt-3'>
            <Table striped bordered hover>
      <thead >
    <tr className='t-head'>
      <th>Sl</th>
      <th>Donor Name</th>
      <th>Discase</th>
      <th>Age</th>
      <th>Blood Group</th>
      <th>Unit</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>sajjad</td>
      <td>nothing </td>
      <td>24</td>
      <td>B+</td>
      <td>4</td>
      <td>Approve</td>
      <td><button className='action-btn'>Edit</button> <button className='action-btn'>Delet</button></td>
    </tr>
   
  </tbody>
</Table>
            </div>

        </div>
    );
};

export default Donation;