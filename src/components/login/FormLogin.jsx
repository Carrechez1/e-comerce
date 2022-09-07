import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import '../../css/formLogin.css'

const FormLogin = ({setIsLogged}) => {

    const navigate = useNavigate();

    let handleClick = () => {};
  
    const {register, handleSubmit, reset} = useForm()
  
    const submit = data => {
      const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
      axios.post(URL, data)
        .then(res => {
          console.log(res.data)
          localStorage.setItem('token',res.data.data.token)
          setIsLogged(res.data.data.user)
        })
        .catch(err => console.log(err))
      reset({
        email: '',
        password: ''
      })
    }

  return (
    <div>
    <div id="sign-up">
        <div className="container">
            <span className="heading">Log in</span>
            <form onSubmit={handleSubmit(submit)}>
                <div className="group">
                    <i className='bx bx-envelope' ></i>
                    <input {...register('email')} type="email" placeholder="Enter email"></input>
                    <span className="col"></span>
                </div>
                <div className="group">
                    <i className='bx bxs-lock'></i>
                    <input {...register('password')} type="password" id="password" placeholder="Enter your password"/>
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
}

export default FormLogin