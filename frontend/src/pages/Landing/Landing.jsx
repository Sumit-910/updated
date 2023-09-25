import { useEffect, useState } from 'react'
import "./Landing.scss"
import Nlogin from './Nlogin';

// Import necessary components and data

import PrincipalComponent from './PrincipalComp'
import Navbar from '../../components/Navbar/Navbar'
import RoleBtn from '../../components/RoleBtn/RoleBtn'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const navigate = useNavigate();
  const [luser, setLuser] = useState();
  const [showDashboard, setShowDashboard] = useState(false); // State for toggling dashboard

  const [curr, setCurr] = useState(0);
  // const sclname = 'DAV Public School, Varnasi';
  // const name = 'Sumit';
  // const role = 'Student';

  const token = localStorage.getItem("token");
  useEffect(()=>{
    if(token){
      const obj = localStorage.getItem("user");
      setLuser(JSON.parse(obj));
      console.log("luser ", luser);
      
      setCurr(1);
    }
    else{
      setCurr(0);
    }
  },[])

  const logoutuse = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setCurr(0);
    navigate('/');
  }

  
  return (
    <>
      <div className="sticky-heade">
        <div className="logo" href="/">EduVators</div>
        <ul className="nav-links">
          {curr === 1 ? (
            <>
              <li><a href="/"><div>About</div></a></li>
              <li><a href='/dashboard'><div>DashBoard</div></a></li>
              <li><a href='/account'><div>Account</div></a></li>
              <li><div onClick={logoutuse} >Logout</div></li>
            </>
          ) : (
            <>
              <li><a href="/login"><div>Login</div></a></li>
              <li><a href="/signup"><div>Signup</div></a></li>
              <li><a href='/freelancer'><div>FreeLance</div></a></li>
            </>
          )}
        </ul>
      </div>
      {curr === 1 ? (
        // <div>
        //   <div className='need'>
        //     <div className='rightMainLanding'>
        //       <h1>School :</h1>
        //       <h3>{sclname}</h3>
        //       <h1>Name:</h1>
        //       <h3>{name}</h3>
        //       <h1>Role:</h1>
        //       <h3>{role}</h3>
        //     </div>
        //     <div className="leftMainLanding">
        //     <PrincipalComponent />
        //     </div>
        //   </div>
        // </div>
        <div className="landing">
          <div className="top">
            <div className="abb">Welcome Back <br /> {luser.name?luser.name:"Update your name"}!</div>
            <div className="dt">
              <div className="dth">Your Details: </div>
              <div className="dtt">
              <div className="school"><span>SCHOOL NAME:</span> {luser.school_name}</div>
              <div className="email"><span>EMAIL:</span> {luser.email?luser.email:"Update your email"}</div>
              <div className="role"><span>ROLE:</span> {luser.role}</div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <h2>Your Actions</h2>
            <PrincipalComponent role={luser.role} />
          </div>
        </div>
      ) : (
        <Nlogin />
      )}
    </>
  )
}

export default Landing
