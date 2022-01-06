import React from 'react';
import { Table } from 'react-bootstrap';
import './RequestHistory.css'

const RequestHistory = () => {
    return (
        <div>
        <div>
        <h4 className='donor-details mt-3'>Request History</h4>
        <div className='pt-3'>
        <Table striped bordered hover>
  <thead >
<tr className='t-head'>
  <th>Sl</th>
  <th>Name</th>
  <th>Profile</th>
  <th>Blood Group</th>
  <th>Age</th>
  <th>Discase</th>
  <th>Mobile</th>
  <th>Action</th>
</tr>
</thead>
<tbody>
<tr>
  <td>1</td>
  <td>ali hossain</td>
  <td>picture </td>
  <td>A+</td>
  <td>24</td>
  <td>cencer</td>
  <td>01923261111</td>
  <td><button className='action-btn'>Delet</button></td>
</tr>

</tbody>
</Table>
        </div>

    </div>
    </div>
    );
};

export default RequestHistory;