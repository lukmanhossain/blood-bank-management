import React from "react";
import { useForm } from "react-hook-form";
import "./UserBloodRequest.css";
const UserBloodRequest = () => {
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
    <div className="request-blood-form-container ">
      <h2 className="m-3">Make a blood request</h2>
      <div className="request-blood-form">
        <h5 className="mb-5">
          Please give patient's details to blood request{" "}
        </h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Patient Name"
            {...register("name", { required: true, maxLength: 20 })}
          />

          <input
            placeholder="Patient Age"
            type="number"
            {...register("age", { min: 18, max: 99 })}
          />
          <select {...register("bloodGroup")}>
            <option defaultValue="" disabled selected hidden>
              Blood Group
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
            placeholder="Address"
            {...register("address", { required: true })}
          />
          <input
            placeholder="Reason"
            {...register("reason", { required: false, maxLength: 20 })}
          />
          <input
            placeholder="Quantity (Bags)"
            type="number"
            {...register("quantity")}
          />
          <input
            placeholder="Doctor's Name"
            {...register("doctorName", { required: false, maxLength: 20 })}
          />

          <input
            type="date"
            placeholder="Donating Date"
            {...register("requestDate", { required: true, maxLength: 20 })}
          />

          <button className="btn btn-danger mt-5" type="submit">
            Send Request <i class="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserBloodRequest;
