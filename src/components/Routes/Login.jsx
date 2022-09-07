import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import FormLogin from '../login/FormLogin'
import FormLogout from '../login/FormLogOut'

const Login = () => {

    const [isLogged, setIsLooged] = useState()

    useEffect(() => {
      setIsLooged(localStorage.getItem('token'))
    }, [])
  
    return (
      <main className='login'>
        {
          isLogged ?
            <FormLogOut setIsLooged={setIsLooged} isLogged={isLogged} />
          :
            <FormLogin setIsLooged={setIsLooged} />
        }
      </main>
    )
};

export default Login;
