import React from 'react';
import './Dashboard.scss';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const pastPerformance = ['Performance 1', 'Performance 2', 'Performance 3'];
  const upcomingSchedule = ['Schedule 1', 'Schedule 2', 'Schedule 3'];
  const assignments = ['Assignment 1', 'Assignment 2', 'Assignment 3'];

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
    <div className="dashboard1">
      <div className="section" id='past-performance'>
        <h2>Past Performance</h2>
        <ul>
          {pastPerformance.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="section" id='upcoming-schedule'>
        <h2>Upcoming Schedule</h2>
        <ul>
          {upcomingSchedule.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="section" id='assignmets'>
        <h2>Assignments</h2>
        <ul>
          {assignments.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}

export default Dashboard;