
import React, { useEffect, useState } from 'react';
import './Charts.css'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';




const Charts = () => {

  const [donorB,setDonorB]=useState([]);
  const [donorAB,setDonorAB]=useState([]);
  const [a,setB]=useState([]);
  const [o,setO]=useState([]);
  /// positive data //
  const [onegative,setOnegative]=useState([]);
  const [anegative,setAnegative]=useState([]);
  const [abnegative,setABnegative]=useState([]);
  const [bnegative,setBnegative]=useState([]);

  useEffect(()=>{
    fetch('http://hidden-coast-99117.herokuapp.com/donateBlood')
    .then(res => res.json())
    .then(data =>
        {
           // positive blood group filter start//
            const singlebloodgroup=data.filter(d =>d.bloodGroup ==="B+")
            setDonorB(singlebloodgroup);
            const singlebloodgroupab=data.filter(d =>d.bloodGroup ==="AB+")
            setDonorAB(singlebloodgroupab);
            const a=data.filter(d =>d.bloodGroup ==="A+")
            setB(a);
            const o=data.filter(d =>d.bloodGroup ==="O+")
            setO(o);
            // positive blood group filter end//

            const aa=data.filter(d =>d.bloodGroup ==="O-")
            setOnegative(aa);
            const bb=data.filter(d =>d.bloodGroup ==="A-")
            setAnegative(bb);
            const cc=data.filter(d =>d.bloodGroup ==="AB-")
            setABnegative(cc);
            const dd=data.filter(d =>d.bloodGroup ==="B-")
            setBnegative(dd);

            
        })
},[]);

    const data = [{name: 'Blood Group', Total: 0, pv: 2400, amt: 2400},
    {name: 'A+', Total:`${a.length}`, pv: 2400, amt: 2400},
    {name: 'B+', Total:`${donorB.length}`, pv: 2400, amt: 2400},
    {name: 'O+', Total:`${o.length}`, pv: 2400, amt: 2400},
    {name: 'AB+', Total:`${donorAB.length}`, pv: 2400, amt: 2400},


    {name: 'A-', Total: `${anegative.length}`, pv: 2400, amt: 2400},
    {name: 'B-', Total:`${bnegative.length}`, pv: 2400, amt: 2400},
    {name: 'O-', Total: `${onegative.length}`, pv: 2400, amt: 2400},
    {name: 'AB-', Total: `${abnegative.length}`, pv: 2400, amt: 2400},

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