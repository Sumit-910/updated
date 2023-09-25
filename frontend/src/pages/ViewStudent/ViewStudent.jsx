import React, { useEffect} from 'react'
import "./ViewStudent.scss"
// import { studentArray } from './xyz';
import { useDispatch, useSelector } from 'react-redux'
import { getAllStudents } from '../../redux/slices/studentSlice';
import { useNavigate } from 'react-router-dom';



const ViewStudent = () => {

  const dispatch=useDispatch();
  const navigate = useNavigate();


  const {students}=useSelector((state)=>{
    return state.students
})


  useEffect(() => {
    return () => {
      dispatch(getAllStudents())
    }
  }, [])

  const logoutuse = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate('/');
  }

  return (
    <>
    <div className="sticky-heade">
        <div className="logo" href="/">EduVators</div>
        <ul className="nav-links">
          
              <li><a href="/"><div>About</div></a></li>
              <li><a href='/dashboard'><div>DashBoard</div></a></li>
              <li><a href='/account'><div>Account</div></a></li>
              <li><div onClick={logoutuse} >Logout</div></li>
            
        </ul>
      </div>
    <div className="card-container">
        {console.log("students ",students)};
    {students.map((item, index) => (
      <div className="card" style={{color:"#121212"}}  key={index}>
        {item.name && (<h3> Name :{item.name}</h3>)}
        <h3> College :{item.school_name}</h3>
        <h3>UID:{item.uid}</h3>
        <h3> Class : {item.batch}</h3>
      </div>
    ))}
  </div>
  </>
  );
}

export default ViewStudent;