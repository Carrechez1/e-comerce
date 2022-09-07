import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import FormLogin from '../login/FormLogin'
import FormLogOut from '../login/FormLogOut'

const Login = () => {

    const [isLogged, setIsLogged] = useState()

    useEffect(() => {
      setIsLogged(localStorage.getItem('token'))
    }, [])
  
    return (
      <main className='login'>
        {
          isLogged ?
            <FormLogOut setIsLogged={setIsLogged} isLogged={isLogged} />
          :
            <FormLogin setIsLogged={setIsLogged} />
        }
      </main>
    )
};

export default Login;
