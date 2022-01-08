import React, { useEffect, useState } from "react";
import "./Charts.css";

const Charts = () => {
  const [apositive, setApositive] = useState([]);
  const [bpositive, setBpositive] = useState([]);
  const [opositive, setOpositive] = useState([]);
  const [abpositive, setAbpositive] = useState([]);

  const [anegative, setAnegative] = useState([]);
  const [bnegative, setBnegative] = useState([]);
  const [onegative, setOnegative] = useState([]);
  const [abnegative, setAbnegative] = useState([]);

  //////load data//
  useEffect(() => {
    fetch("https://hidden-coast-99117.herokuapp.com/bloods")
      .then((res) => res.json())
      .then((approve) => {
        const data = approve.filter((data) => data?.status === "Approved");

        const aPositive = data.filter((d) => d?.bloodGroup === "A+");
        setApositive(aPositive);
        const singlebloodgroup = data.filter((d) => d?.bloodGroup === "B+");
        setBpositive(singlebloodgroup);
        const oposi = data.filter((d) => d?.bloodGroup === "O+");
        setOpositive(oposi);
        const abposi = data.filter((d) => d.bloodGroup === "AB+");
        setAbpositive(abposi);

        const Anegative = data.filter((d) => d?.bloodGroup === "A-");
        setAnegative(Anegative);

        const Bnegative = data.filter((d) => d?.bloodGroup === "B-");
        setBnegative(Bnegative);

        const Onegativea = data.filter((d) => d?.bloodGroup === "O-");
        setOnegative(Onegativea);

        const Abnegative = data.filter((d) => d?.bloodGroup === "AB-");
        setAbnegative(Abnegative);
      });
  }, []);
  ////load data///

  return (
    <div>
      <h2>Bloods in stock</h2>
      <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-4">
        <div className="col">
          <div className="p-1 border Stock-donor">
            <p className="blood-icon">
              <i class="fas fa-burn"></i>
            </p>
            <p className="blood">A+</p>
            <p className="count"> Total Donor :{apositive.length}</p>
          </div>
        </div>
        <div className="col">
          <div className="p-1 border Stock-donor">
            <p className="blood-icon">
              <i class="fas fa-burn"></i>
            </p>
            <p className="blood">B+</p>
            <p className="count"> Total Donor :{bpositive.length}</p>
          </div>
        </div>
        <div className="col">
          <div className="p-1 border Stock-donor">
            <p className="blood-icon">
              <i class="fas fa-burn"></i>
            </p>
            <p className="blood">O+</p>
            <p className="count"> Total Donor :{opositive.length}</p>
          </div>
        </div>
        <div className="col">
          <div className="p-1 border Stock-donor">
            <p className="blood-icon">
              <i class="fas fa-burn"></i>
            </p>
            <p className="blood">AB+</p>
            <p className="count"> Total Donor :{abpositive.length}</p>
          </div>
        </div>
        <div className="col">
          <div className="p-1 border Stock-donor">
            <p className="blood-icon">
              <i class="fas fa-burn"></i>
            </p>
            <p className="blood">A-</p>
            <p className="count"> Total Donor :{anegative.length}</p>
          </div>
        </div>
        <div className="col">
          <div className="p-1 border Stock-donor">
            <p className="blood-icon">
              <i class="fas fa-burn"></i>
            </p>
            <p className="blood">B-</p>
            <p className="count"> Total Donor :{bnegative.length}</p>
          </div>
        </div>
        <div className="col">
          <div className="p-1 border Stock-donor">
            <p className="blood-icon">
              <i class="fas fa-burn"></i>
            </p>
            <p className="blood">O-</p>
            <p className="count"> Total Donor :{onegative.length}</p>
          </div>
        </div>
        <div className="col">
          <div className="p-1 border Stock-donor">
            <p className="blood-icon">
              <i class="fas fa-burn"></i>
            </p>
            <p className="blood">AB-</p>
            <p className="count"> Total Donor :{abnegative.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
