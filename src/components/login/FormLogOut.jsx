import React from 'react'
import '../../css/formLogOut.css'
import { useForm } from 'react-hook-form'

const FormLogOut = ({isLogged, setIsLogged}) => {

  const handleClick = () => {
    setIsLogged()
    localStorage.removeItem('token')
  }

  return (
    <article className='form-logout'>
      <i className="form-logout__icon fa-solid fa-user"></i>
      <h2 className='form-logout__username'>
        {`${isLogged?.firstName} ${isLogged?.lastName}`}
      </h2>
      <i className="form-logout__check fa-solid fa-square-check"></i>
      <button onClick={handleClick} className='form-logout__btn'>Logout</button>
    </article>
  )
}

export default FormLogOut