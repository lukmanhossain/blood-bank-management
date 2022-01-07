import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
import './BloodStocks.css'

const BloodStocks = () => {
    const data = [{name: 'Blood Stocks', Stocks: 0, pv: 2400, amt: 2400},
    {name: 'A+', Stocks: 20, pv: 2400, amt: 2400},
    {name: 'B+', Stocks: 10, pv: 2400, amt: 2400},
    {name: 'O+', Stocks: 95, pv: 2400, amt: 2400},
    {name: 'AB+', Stocks: 140, pv: 2400, amt: 2400},
    {name: 'A-', Stocks: 66, pv: 2400, amt: 2400},
    {name: 'B-', Stocks: 4, pv: 2400, amt: 2400},
    {name: 'O-', Stocks: 120, pv: 2400, amt: 2400},
    {name: 'AB-', Stocks: 9, pv: 2400, amt: 2400},

];
    return (
        <div>
     <LineChart width={780} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }} className='cherts'>
        <Line  dataKey="Stocks" stroke="red" />
        <CartesianGrid  strokeDasharray="5 5" />
          <XAxis dataKey="name" />
         <YAxis />
         <Tooltip />
        </LineChart>
        </div>
    );
};

export default BloodStocks;