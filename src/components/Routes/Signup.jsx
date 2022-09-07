import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../../css/signup.css";
import { useForm } from "react-hook-form";

const Signup = () => {
  const navigate = useNavigate();

  let handleClick = () => {};

  return (
    <div>
      <div id="sign-up">
        <div className="container">
          <span className="heading">Sign up</span>
          <form>
            <div className="group">
              <i className="bx bx-envelope"></i>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
              />
              <span className="col"></span>
            </div>
            <div className="group">
              <i className="bx bx-envelope"></i>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
              />
              <span className="col"></span>
            </div>
            <div className="group">
              <i className="bx bx-envelope"></i>
              <input type="text" id="email" placeholder="Enter your email" />
              <span className="col"></span>
            </div>
            <div className="group">
              <i className="bx bxs-lock"></i>
              <input
                type="text"
                id="Password"
                placeholder="Enter your password"
              />
              <span className="col"></span>
            </div>
            <div className="group">
              <i className="bx bx-envelope"></i>
              <input type="text" id="phone" placeholder="Enter your phone" />
              <span className="col"></span>
            </div>
            <div className="group">
              <i className="bx bx-envelope"></i>
              <input type="text" id="role" placeholder="Enter your role" />
              <span className="col"></span>
            </div>
            <div className="group">
              <button type="button">Sign up</button>
            </div>
            <div className="member">
              <a
                className="a-btn"
                onClick={(handleClick = () => navigate("/login"))}
              >
                Already are you a member? <span>Log in</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
