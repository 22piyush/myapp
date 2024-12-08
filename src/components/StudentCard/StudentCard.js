import React from 'react'
import "./StudentCard.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function StudentCard({rollNo,name,city}) {

  const navigate = useNavigate();

  const deleteStudent = async(rollNo)=>{
     const response = await axios.delete(`${process.env.REACT_APP_API_URL}/students/${rollNo}`);
     window.location.reload();
    }

  return (
  
      <div className='student-card'
      onClick={(e) =>{
        navigate(`/detail/${rollNo}`);
      }}
      >
          <h3>{name}</h3>
          <div>
              <span>Roll No:{rollNo}</span>
              <span style={{marginLeft:"20px"}}>City:{city}</span>
          </div>

          <button type='button' className='btn-delete'
          onClick={(e)=>{
           e.stopPropagation();
           deleteStudent(rollNo);
          }}>
            Delete
          </button>
         
          <button type='button' className='btn-update'
          onClick={(e)=>{
           e.stopPropagation();
           navigate(`/edit/${rollNo}`)
          }}>
            Edit
          </button>

      </div>

  )
}

export default StudentCard