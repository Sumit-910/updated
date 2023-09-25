import React, { useEffect} from 'react'
// import { studentArray } from './xyz';
import { useDispatch, useSelector } from 'react-redux'
import "./ViewTeacher.scss"
import { getAllTeachers } from '../../redux/slices/teacherSlice'
import { useNavigate } from 'react-router-dom';

const ViewTeacher = () => {

  const dispatch=useDispatch();


  const {teachers}=useSelector((state)=>{
    return state.teachers
})


  useEffect(() => {
    return () => {
      dispatch(getAllTeachers())
    }
  }, [])

  const navigate = useNavigate();

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
        {console.log("teachers ",teachers)};
    {teachers.map((item, index) => (
      <div className="card" style={{color:"#121212"}} key={index}>
        {item.name && (<h3> Name :{item.name}</h3>)}
        <h3> Email :{item.email}</h3>
        <h3> School : {item.school_name}</h3>
      </div>
    ))}
  </div>
  </>
  );
}

export default ViewTeacher