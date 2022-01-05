import React, { useEffect, useState } from 'react';
import './HomeDonor.css'
import HomeDonorData from './HomeDonorData';

const HomeDonor = () => {
    const [donor, setDonor]=useState([])
    useEffect(()=>{ 
        fetch('http://hidden-coast-99117.herokuapp.com/donateBlood')
        .then(res => res.json())
        .then(data => setDonor(data))
      },[])

      if(!donor.length){
          return <button class="btn btn-primary spner-btn" type="button" disabled>
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          Loading...
        </button>
      }
      


    return (
        <div>
           <div className='row mx-3 mb-5'>
           {
            donor.map(donordata => <HomeDonorData
            donordata={donordata}
            key={donordata._id}
            
            ></HomeDonorData>)   
           }
           </div>
        </div>
    );
};

export default HomeDonor;