import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Signup = () => {

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
                    <input type="text" placeholder="Enter your first name"></input>
                    <span className="col"></span>
                </div>
                <div className="group">
                    <i className='bx bx-envelope' ></i>
                    <input type="text" placeholder="Enter your last name"></input>
                    <span className="col"></span>
                </div>
                <div className="group">
                    <i className='bx bx-envelope' ></i>
                    <input type="email" placeholder="Enter email"></input>
                    <span className="col"></span>
                </div>
                <div className="group">
                    <i className='bx bxs-lock'></i>
                    <input type="password" placeholder="Enter your password"></input>
                    <span className="col"></span>
                </div>
                <div className="group">
                    <i className='bx bx-envelope' ></i>
                    <input type="text" placeholder="Enter your phone"></input>
                    <span className="col"></span>
                </div>
                <div className="group">
                    <i className='bx bx-envelope' ></i>
                    <input type="text" placeholder="Enter your rol"></input>
                    <span className="col"></span>
                </div>
                <div className="group">
                    <button type="button">Sign up</button>
                </div>
                <div className="member">
                    <a className='a-btn' onClick={handleClick = () => navigate('/login') }>Already are you a member? <span>Log in</span></a>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Signup