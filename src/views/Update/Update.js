import React, { useState,useEffect } from "react";
import "./Update.css"
import HomeIcon from "../../assets/house.png";
import { Link,useParams } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Update() {
    const [student, setStudent] = useState({
        rollNo:"",
        name:"",
        city:"",
      })

      const {rollNo} = useParams()

      const loadStudentDetail =async(rollNo)=> {
        const response = await axios.get(`http://localhost:5001/students/${rollNo}`);
        setStudent(response.data.data);
      }
    
      useEffect(() => {
        loadStudentDetail(rollNo)
      },[rollNo]);
    
      const updateStudent = async () => {
        try {
          const response = await axios.put(`http://localhost:5001/students/${rollNo}`, {
            name: student.name,
            city: student.city,
          });
        
          toast.success(response?.data?.message);
    
        } catch (error) {
           toast.error(error?.response?.data?.message); 
        }
      };
    
      return (
        <div>
          <h1 className="heading">Edit Student</h1>
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
              disabled
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
                updateStudent();
            }}
          >
            Update
          </button>
    
          <Link to="/">
            <img src={HomeIcon} alt="Home Icon" className="icon-home" />
          </Link>
    
          <Toaster />
        </div>
      );
}

export default Update