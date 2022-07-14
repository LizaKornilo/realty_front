import React from 'react'
import { Link } from 'react-router-dom'
import { LOGIN_ROUTE } from '../../pages/consts'

const RegistrationForm = () => {
  return (
      <div>
          RegistrationForm
          <Link to={LOGIN_ROUTE}>go to login page</Link>
      </div>
  )
}

export default RegistrationForm
