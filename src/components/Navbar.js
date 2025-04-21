import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaBars, FaTimes,FaSignOutAlt} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [username, setUsername] = useState("");
  const [userId ,setUserId]= useState("")
  const navigate = useNavigate();

  // Retrieve the username when the component mounts
  useEffect(() => {
    
    const storedUsername = localStorage.getItem("username");
    const storeid =localStorage.getItem("userId");
    setUsername(storedUsername);
    setUserId(storeid)
    
  }, []);

  
  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    setUsername("");
    setUserId("");

    
    navigate("/signin");
  };

  return (
    <nav className="navbar">
      <img className="imgae" src="https://www.pngall.com/wp-content/uploads/5/Checklist-Logo-PNG.png" alt="logo" />
      <h2 className="logo">ᵀ𝑜𝓓ⲞĿ𝔦ᔕț</h2>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <li><Link to="/">Home</Link></li>
        <li><Link to='/task'>Tasks</Link></li>
        <li><Link to="/about">About</Link></li>
        <li className="user-section">
          <FaUserCircle className="user-icon" />
          {username ? (
            <>
              <span className="username">{username}</span>
              <button className="logout-button" onClick={handleLogout}><FaSignOutAlt/></button>
            </>
          ) : (
            <Link to="/signin">Login</Link>
          )}
        </li>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
