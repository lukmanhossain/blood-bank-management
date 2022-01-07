
import React, { useEffect, useState } from 'react';
import './Charts.css';



const Charts = () => {
  const   [apositive,setApositive]=useState([]);
    const [bpositive,setBpositive]=useState([]);
    const [opositive,setOpositive]=useState([]);
    const [abpositive,setAbpositive]=useState([]);

    const [anegative,setAnegative]=useState([]);
    const [bnegative,setBnegative]=useState([]);
    const [onegative,setOnegative]=useState([]);
    const [abnegative,setAbnegative]=useState([]);

    //////load data//
    useEffect(()=>{
        fetch('http://hidden-coast-99117.herokuapp.com/donateBlood')
        .then(res => res.json())
        .then(approve =>
            {
              const data =approve.filter(data =>data?.status ==="Approved");

               const aPositive=data.filter(d =>d?.bloodGroup ==="A+")
               setApositive(aPositive);
                const singlebloodgroup=data.filter(d =>d?.bloodGroup ==="B+")
                setBpositive(singlebloodgroup);
                const oposi =data.filter(d =>d?.bloodGroup ==="O+")
                setOpositive(oposi);
                const abposi=data.filter(d =>d.bloodGroup ==="AB+")
                setAbpositive(abposi);

                const Anegative=data.filter(d =>d?.bloodGroup ==="A-")
                setAnegative(Anegative);

                const Bnegative=data.filter(d =>d?.bloodGroup ==="B-")
                setBnegative(Bnegative);

                const Onegativea=data.filter(d =>d?.bloodGroup ==="O-")
                setOnegative(Onegativea);

                const Abnegative= data.filter(d =>d?.bloodGroup ==="AB-")
                setAbnegative(Abnegative);
            })
    },[]);
    ////load data///



    return (
        <div>
       
      </div>
     
    );
};

export default Charts;