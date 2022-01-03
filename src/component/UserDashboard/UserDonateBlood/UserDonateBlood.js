import React from "react";
import "./UserDonateBlood.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
const UserDonateBlood = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // axios.post("", data).then((res) => {
    //   if (res.data.insertedId) {
    //     Swal.fire({
    //       position: "center",
    //       icon: "success",
    //       title: "Thank you for your kindness",
    //       showConfirmButton: true,
    //     });

    //     reset();
    //   }
    // });
  };
  return (
    <div className="donate-blood-form-container ">
      <h2 className="m-3">Donate Blood Save Life !</h2>
      <div className="donate-blood-form">
        <h5 className="mb-5">Please Give your details to donate blood</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <select {...register("bloodGroup")}>
            <option value="" disabled selected hidden>
              Select Your Blood Group
            </option>
            <option value="female">A+</option>
            <option value="other">B+</option>
            <option value="female">O+</option>
            <option value="other">AB+</option>
            <option value="male">A-</option>
            <option value="female">B-</option>
            <option value="male">O-</option>
            <option value="other">AB-</option>
          </select>
          <input
            placeholder="Your Name"
            {...register("name", { required: true, maxLength: 20 })}
          />

          <input
            placeholder="Your Age (18+ Only)"
            type="number"
            {...register("age", { min: 18, max: 99 })}
          />
          <input
            placeholder="Disease (if any, oterwise type 'no')"
            {...register("disease", { required: false, maxLength: 20 })}
          />
          <input
            type="date"
            placeholder="Donating Date"
            {...register("donateDate", { required: true, maxLength: 20 })}
          />

          <button className="btn btn-danger mt-5" type="submit">
            Donate Blood
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserDonateBlood;
