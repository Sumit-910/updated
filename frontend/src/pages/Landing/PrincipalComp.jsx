import React, { useState, useEffect } from 'react';
import { principalArray } from './Principal'
import { studentArray } from './Student'
import { teacherArray } from './Teacher'
import { supervisorArray } from './Supervisor'
import './reqq.scss';

const PrincipalComponent = ({role}) => {
  const [require, setRequire] = useState([]);
   // Assuming you have a way to determine the role

  useEffect(() => {
    if (role === 'admin') {
      setRequire(principalArray);
    }
    else if(role==='student'){
        setRequire(studentArray);
    }
    else if(role==='freelancer'){
setRequire([principalArray[1]]);
    }
    else if(role==='teacher'){
        setRequire(teacherArray);
    }
  }, [role]);
  return (
    <div className="card-containerr">
      {require.map((item, index) => (
        <div className="cardd" key={index}>
          <h3>{item.btnName}</h3><br />
          <a href={item.link}>
            <button>Go</button>
          </a>
        </div>
      ))}
    </div>
  );
}

export default PrincipalComponent;
