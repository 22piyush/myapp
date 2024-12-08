import React, { useEffect, useState  } from 'react'
import "./Detail.css"
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Detail() {

  const [student, setStudent] = useState()

  const {rollNo} = useParams()

  const loadStudentDetail =async(rollNo)=> {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}1/students/${rollNo}`);
    setStudent(response.data.data);
  }

  useEffect(() => {
    loadStudentDetail(rollNo)
  },[rollNo]);

  return (
    <div>
        <h1 className='header'>Student Details</h1>
        <div className='student-detail-card'>
        <h2>Name:{student?.name}</h2>
        <h2>Roll No:{student?.rollNo}</h2>
        <h2>City:{student?.city}</h2>
        </div>
    </div>
  )
}

export default Detail