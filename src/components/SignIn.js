<<<<<<< HEAD
import React, { useState } from "react";
import { FaGoogle, FaEnvelope, FaLock } from "react-icons/fa";
import "./sign.css";
import "./car.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:8080/api/users/login", {
        email,
        password,
      });
  
      
      if (response.status === 200) {
        localStorage.setItem("username", response.data.name);
        localStorage.setItem('userId', response.data.id);
        
        setIsModalOpen(true);
        
        setTimeout(() => {
          setIsModalOpen(false);
          navigate("/"); 
        }, 2000);
      }
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-left">
          <h2>Welcome Back</h2>
          <p>Please enter your details.</p>
          <button className="apple-login">
            <FaGoogle /> Login with Google
          </button>
          <div className="divider">
            <span>or</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <FaEnvelope className="icon" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="options">
              <label>
                <input type="checkbox" /> Remember
              </label>
              <p>Forgot password?</p>
            </div>
            <button className="auth-button" type="submit">Log In</button>
            {error && <p className="error">{error}</p>}
          </form>
          <p className="switch-link">
            Don’t have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
        <div className="car">
            <div className="wrapper">
                <img src="https://i.pinimg.com/736x/e3/02/c7/e302c7735be9b05571fd1df1868464b4.jpg" className="cover-image" alt="ironman" />
            </div>
            <img src="https://tse1.mm.bing.net/th?id=OIP.yp2IXdtzOI-fA7IxufpyjAHaDF&pid=Api&P=0&h=180" className="title" alt="ironman" />
            <img src="https://purepng.com/public/uploads/large/iron-man-4ey.png" className="character"  alt="ironman"/>
        </div>
      </div>

      
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Login Successful!</h3>
            <p>Redirecting to Home...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
=======
import React, { useState } from "react";
import { FaGoogle, FaEnvelope, FaLock } from "react-icons/fa";
import "./sign.css";
import "./car.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:8080/api/users/login", {
        email,
        password,
      });
  
      
      if (response.status === 200) {
        localStorage.setItem("username", response.data.name);
        localStorage.setItem('userId', response.data.id);
        
        setIsModalOpen(true);
        
        setTimeout(() => {
          setIsModalOpen(false);
          navigate("/"); 
        }, 2000);
      }
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-left">
          <h2>Welcome Back</h2>
          <p>Please enter your details.</p>
          <button className="apple-login">
            <FaGoogle /> Login with Google
          </button>
          <div className="divider">
            <span>or</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <FaEnvelope className="icon" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="options">
              <label>
                <input type="checkbox" /> Remember
              </label>
              <p>Forgot password?</p>
            </div>
            <button className="auth-button" type="submit">Log In</button>
            {error && <p className="error">{error}</p>}
          </form>
          <p className="switch-link">
            Don’t have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
        <div className="car">
            <div className="wrapper">
                <img src="https://i.pinimg.com/736x/e3/02/c7/e302c7735be9b05571fd1df1868464b4.jpg" className="cover-image" alt="ironman" />
            </div>
            <img src="https://tse1.mm.bing.net/th?id=OIP.yp2IXdtzOI-fA7IxufpyjAHaDF&pid=Api&P=0&h=180" className="title" alt="ironman" />
            <img src="https://purepng.com/public/uploads/large/iron-man-4ey.png" className="character"  alt="ironman"/>
        </div>
      </div>

      
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Login Successful!</h3>
            <p>Redirecting to Home...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
>>>>>>> 9305cd3a566bbd30de8d09f44cb9d19ba9e48fbe
