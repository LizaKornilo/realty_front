import React from 'react'
import { Link } from 'react-router-dom'
import {
  DWELLINGS_ROUTE
} from '../../pages/consts'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/reducers'
import styles from './NavBar.module.scss'
import {
  closeLoginRegisterModalActionCreator,
  openLoginRegisterModalActionCreator
} from '../../store/action-creators'
import Modal from '../UI/modal/modal'
import SvgSelector, { svgIds } from '../svg-selector'

const NavBar = () => {
  const userTokenPayload = useSelector((state: RootState) => state.userReducer.userTokenPayload)
  const loginRegisterModalIsOpen = useSelector((state: RootState) => state.modalsReducer.loginRegisterModalIsOpen)

  const dispatch = useDispatch()

  // const logOut = () => {
  //   removeToken()
  //   dispatch(userResetActionCreator())
  //   history.push('/')
  // }

  const openLoginRegisterModal = () => {
    dispatch(openLoginRegisterModalActionCreator())
  }

  const closeLoginRegisterModal = () => {
    dispatch(closeLoginRegisterModalActionCreator())
  }

  return (
     <>
       <div className={styles.navbar}>
        <div className={'container'}>
          <div className={styles['navbar__content-wrapper']}>
            <div className={styles['navbar__left-items']}>
              <Link className={styles.navbar__item} to={DWELLINGS_ROUTE}>Dwellings</Link>
            </div>
            <div className={styles.navbar__central}>
              <Link to={DWELLINGS_ROUTE}>
                  <SvgSelector id={svgIds.SIMPLE_LOGO} classNames={styles.navbar__logo} />
              </Link>
            </div>
            <div className={styles['navbar__right-items']}>
              {
                !userTokenPayload
                  ? <a className={styles.navbar__item} onClick={openLoginRegisterModal}>Sign in</a>
                  : <SvgSelector
                        id={svgIds.USER_ICON}
                        classNames={styles['navbar__user-icon']}
                    />
              }
            </div>
          </div>
        </div>
      </div>
       <Modal isOpen={loginRegisterModalIsOpen} close={closeLoginRegisterModal}>
         loginRegisterModalContent
       </Modal>
     </>
  )
}

export default React.memo(NavBar)
