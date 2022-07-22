import React from 'react'
import styles from './login-register-modal-content.module.scss'
import Tabs from '../../UI/tabs/tabs'
import LoginForm from '../login-form'
import RegistrationForm from '../registration-form'

const tabsData = [
  {
    tabName: 'Sign in',
    tabContent: <LoginForm/>
  },
  {
    tabName: 'New account',
    tabContent: <RegistrationForm/>
  }
]

const LoginRegisterModalContent = () => {
  return (
      <div className={styles.content}>
        <div className={styles.content__title}>Welcome to Realty</div>
        <Tabs data={tabsData}/>
      </div>
  )
}

export default LoginRegisterModalContent
