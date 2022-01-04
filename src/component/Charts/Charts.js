
import React from 'react';
import './Charts.css'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';




const Charts = () => {
    const data = [{name: 'Blood Group', Total: 0, pv: 2400, amt: 2400},
    {name: 'A+', Total: 20, pv: 2400, amt: 2400},
    {name: 'B+', Total: 10, pv: 2400, amt: 2400},
    {name: 'O+', Total: 95, pv: 2400, amt: 2400},
    {name: 'AB+', Total: 40, pv: 2400, amt: 2400},
    {name: 'A-', Total: 66, pv: 2400, amt: 2400},
    {name: 'B-', Total: 4, pv: 2400, amt: 2400},
    {name: 'O-', Total: 15, pv: 2400, amt: 2400},
    {name: 'AB-', Total: 9, pv: 2400, amt: 2400},

];


    return (
        <div class=" overflow-hidden mb-3">
        <div class="row gy-5">
          <div class="col-4">
            <div class="p-3 border money-donation">
                <h6>Total Donation</h6>
                <h2>$2022</h2>

            </div>
          </div>
          <div class="col-4">
            <div class="p-3 border money-donation">
            <h6>Total Withdrow </h6>
                <h2>$2018</h2>

            </div>
          </div>
          <div class="col-4">
          <div class="p-3 border money-donation">
            <h6>Total Patients </h6>
                <h2><i class="fas fa-user-injured"></i> 20</h2>

            </div>
          </div>
          
        </div>

        <div className='mt-3'>
        <LineChart width={780} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }} className='cherts'>
        <Line type="monotone" dataKey="Total" stroke="red" />
        <CartesianGrid  strokeDasharray="5 5" />
          <XAxis dataKey="name" />
         <YAxis />
         <Tooltip />
        </LineChart>
        </div>
      </div>
     
    );
};

export default Charts;