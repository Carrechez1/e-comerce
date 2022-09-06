import React from "react";
import '../../css/login.css'

const Login = () => {
  return ( 
  <div>
    <div id="sign-up">
        <div className="container">
            <span className="heading">Sign up</span>
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
                    <a href="#">Do you want to be a member? <span>Sign up</span></a>
                </div>
            </form>
        </div>
    </div>
  </div>
  )
};

export default Login;
