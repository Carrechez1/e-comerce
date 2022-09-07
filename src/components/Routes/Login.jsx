import React from "react";
import '../../css/login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  let handleClick = () => {};

  return ( 
  <div>
    <div id="sign-up">
        <div className="container">
            <span className="heading">Log in</span>
            <form>
                <div className="group">
                    <i className='bx bx-envelope' ></i>
                    <input type="email" placeholder="Enter email"></input>
                    <span className="col"></span>
                </div>
                <div className="group">
                    <i className='bx bxs-lock'></i>
                    <input type="password" placeholder="Enter password"></input>
                    <span className="col"></span>
                </div>
                <div className="group">
                    <button type="button">Log in</button>
                </div>
                <div className="member">
                    <a className='a-btn' onClick={handleClick = () => navigate('/signup') }>Do you want to be a member?<span> Sign up</span></a>
                </div>
            </form>
        </div>
    </div>
  </div>
  )
};

export default Login;
