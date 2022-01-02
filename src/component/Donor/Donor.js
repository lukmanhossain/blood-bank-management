import React from 'react';
import { Table } from 'react-bootstrap';
import './Donor.css'

const Donor = () => {
    return (
        <div>
            <h4 className='donor-details mt-3'>DONOR DETAILS</h4>
            <div className='pt-3'>
            <Table striped bordered hover>
      <thead >
    <tr className='t-head'>
      <th>Sl</th>
      <th>Name</th>
      <th>Profile</th>
      <th>Blood Group</th>
      <th>Address</th>
      <th>Mobile</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>mehedi</td>
      <td>picture </td>
      <td>O+</td>
      <td>Narayanganj</td>
      <td>01923261111</td>
      <td><button className='action-btn'>Edit</button> <button className='action-btn'>Delet</button></td>
    </tr>
   
  </tbody>
</Table>
            </div>

        </div>
    );
};

export default Donor;