import React,{useEffect, useState} from 'react'
import './App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import StudentCard from './components/StudentCard/StudentCard';
import IconUser from './assets/add-user.png'

function App() {
  const [students, setStudents] = useState([]);

  const loadStudents = async() =>{
    console.log("Loading Students....");
    const response = await axios.get("http://localhost:5001/students");
    setStudents(response.data.data);
    // console.log(students);
  }

  useEffect(()=>{
    loadStudents()
  },[])

  return (
    <div>
        <h1 className='heading'>School App</h1> 

        <div className='student-container'>
         {students.map((student,i)=>{
          const {rollNo, name, city} = student;

            return <StudentCard key={i} rollNo={rollNo} name={name} city={city}/>

          })}
          </div>

          {
            students.length === 0 && <h1 className='error-message'>No Students Found</h1>
          }

        <Link to="/adduser"><img src={IconUser} alt='iconadd' className='icon-add-user'/></Link>  
    </div>
  )
}

export default App