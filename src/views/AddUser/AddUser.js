import React, { useState } from "react";
import "./AddUser.css";
import HomeIcon from "../../assets/house.png";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function AddUser() {
  const [student, setStudent] = useState({
    rollNo:"",
    name:"",
    city:"",
  })

  const addStudent = async () => {
    try {
      const response = await axios.post("http://localhost:5001/students", {
        rollNo: student.rollNo,
        name: student.name,
        city: student.city,
      });
      setStudent({
        rollNo:"",
        name:"",
        city:"",
      })
    
      toast.success(response?.data?.message);

    } catch (error) {
       toast.error(error?.data?.message); 
    }
  };

  return (
    <div>
      <h1 className="heading">Add Student</h1>
      <div className="input-content">
        <input
          type="text"
          placeholder="Enter Your Roll NO"
          className="input-box"
          value={student.rollNo}
          onChange={(e) => setStudent({
            ...student,
            rollNo:e.target.value
          })}
        />
        <input
          type="text"
          placeholder="Enter Your Name"
          className="input-box"
          value={student.name}
          onChange={(e) =>setStudent({
            ...student,
            name:e.target.value
          })}
        />
        <input
          type="text"
          placeholder="Enter Your City"
          className="input-box"
          value={student.city}
          onChange={(e) => setStudent({
            ...student,
            city:e.target.value
          })}
        />
      </div>

      <button
        className="button-field"
        onClick={() => {
          addStudent();
        }}
      >
        Add Student
      </button>

      <Link to="/">
        <img src={HomeIcon} alt="Home Icon" className="icon-home" />
      </Link>

      <Toaster />
    </div>
  );
}

export default AddUser;
