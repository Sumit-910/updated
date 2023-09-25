// StickyHeader.js


import './Header.scss';
import { Link } from "react-router-dom";

const StickyHeader = () => {
  return (
    <div className="sticky-header">
      
      <div className="logo"><Link style={{textDecoration:"none",color: "#121212"}} to="/">EduVators</Link></div>
      
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </div>
  );
};

export default StickyHeader;
