<<<<<<< HEAD
import React, { useState } from "react";
import { FaGoogle, FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import "./sign.css";
import "./car.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/users", {
        username: formData.fullName,
        email: formData.email,
        password: formData.password
      });
      console.log("User registered:", response.data);
      setIsModalOpen(true); // Open modal on success
      
      // Automatically navigate to sign-in after 2 seconds
      setTimeout(() => {
        setIsModalOpen(false);
        navigate("/signin");
      }, 2000);
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Failed to create account.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-left">
          <h2>Create Account</h2>
          <p>Let's get you started!</p>
          <button className="apple-login">
            <FaGoogle /> Sign Up with Google
          </button>
          <div className="divider">
            <span>or</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <FaUser className="icon" />
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <FaEnvelope className="icon" />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button className="auth-button" type="submit">Sign Up</button>
          </form>
          <p className="switch-link">
            Already have an account? <Link to="/signin">Log In</Link>
          </p>
        </div>
        <div class="car">
            <div class="wrapper">
                <img src="https://images5.fanpop.com/image/photos/28600000/the-joker-the-joker-28699615-967-1450.jpg" class="cover-image covers-image" alt="ironman" />
            </div>
            <img src="https://cdn.mos.cms.futurecdn.net/BSs2g8No7CFR7ACu4rbVxL.jpg" class="title" alt="ironman"/>
            <img src="https://pngimg.com/uploads/joker/joker_PNG19.png" class="character" alt="ironman"/>
        </div>
      </div>

      
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Account Created Successfully!</h3>
            <p>Redirecting to Sign In...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
=======
import React, { useState } from "react";
import { FaGoogle, FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import "./sign.css";
import "./car.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/users", {
        username: formData.fullName,
        email: formData.email,
        password: formData.password
      });
      console.log("User registered:", response.data);
      setIsModalOpen(true); // Open modal on success
      
      // Automatically navigate to sign-in after 2 seconds
      setTimeout(() => {
        setIsModalOpen(false);
        navigate("/signin");
      }, 2000);
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Failed to create account.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-left">
          <h2>Create Account</h2>
          <p>Let's get you started!</p>
          <button className="apple-login">
            <FaGoogle /> Sign Up with Google
          </button>
          <div className="divider">
            <span>or</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <FaUser className="icon" />
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <FaEnvelope className="icon" />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button className="auth-button" type="submit">Sign Up</button>
          </form>
          <p className="switch-link">
            Already have an account? <Link to="/signin">Log In</Link>
          </p>
        </div>
        <div class="car">
            <div class="wrapper">
                <img src="https://images5.fanpop.com/image/photos/28600000/the-joker-the-joker-28699615-967-1450.jpg" class="cover-image covers-image" alt="ironman" />
            </div>
            <img src="https://cdn.mos.cms.futurecdn.net/BSs2g8No7CFR7ACu4rbVxL.jpg" class="title" alt="ironman"/>
            <img src="https://pngimg.com/uploads/joker/joker_PNG19.png" class="character" alt="ironman"/>
        </div>
      </div>

      
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Account Created Successfully!</h3>
            <p>Redirecting to Sign In...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
>>>>>>> 9305cd3a566bbd30de8d09f44cb9d19ba9e48fbe
