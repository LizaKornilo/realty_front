import React, { ReactNode, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {
  DWELLINGS_ROUTE,
  OWNER_ROUTE,
  USER_ROUTE,
  ADMIN_ROUTE
} from '../../pages/consts'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/reducers'
import styles from './NavBar.module.scss'
import {
  closeLoginRegisterModalActionCreator,
  openLoginRegisterModalActionCreator,
  userResetActionCreator
} from '../../store/action-creators'
import Modal from '../UI/modal/modal'
import SvgSelector, { svgIds } from '../svg-selector'
import Dropdown from '../UI/dropdown/dropdown'
import { Roles } from '../../services/openapi'
import { removeToken } from '../../api/token.service'

const NavBar = () => {
  const isUserSuccessfullyLogged = useSelector((state: RootState) => state.userReducer.userTokenPayload)
  const role = useSelector((state: RootState) => state.userReducer.userTokenPayload?.role.value)

  const loginRegisterModalIsOpen = useSelector((state: RootState) => state.modalsReducer.loginRegisterModalIsOpen)

  const [dropdownItemsForUser, setDropdownItemsForUser] = useState<ReactNode[]>([])

  useEffect(() => {
    const dropdownItems = []
    role === Roles.USER && dropdownItems.push(<Link key={USER_ROUTE} to={USER_ROUTE}>User</Link>)
    role === Roles.OWNER && dropdownItems.push(<Link key={OWNER_ROUTE} to={OWNER_ROUTE}>Owner</Link>)
    role === Roles.ADMIN && dropdownItems.push(<Link key={ADMIN_ROUTE} to={ADMIN_ROUTE}>Admin</Link>)
    dropdownItems.push(<div key={'Sign out'} onClick={() => logOut()}>Sign out</div>)
    setDropdownItemsForUser(dropdownItems)
  }, [role])

  const dispatch = useDispatch()
  const history = useHistory()

  const logOut = () => {
    removeToken()
    dispatch(userResetActionCreator())
    history.push('/')
  }

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
                !isUserSuccessfullyLogged
                  ? <a className={styles.navbar__item} onClick={openLoginRegisterModal}>Sign in</a>
                  : <Dropdown
                        element = {<SvgSelector id={svgIds.USER_ICON} classNames={styles['navbar__user-icon']} />}
                        items={dropdownItemsForUser}
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
