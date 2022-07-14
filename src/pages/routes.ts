import {
  ADMIN_ROUTE,
  DWELLING_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  OWNER_ROUTE,
  REGISTRATION_ROUTE,
  USER_ROUTE
} from './consts'
import HomePage from './home/home.page'
import DwellingPage from './dwelling/dwelling.page'
import AuthPage from './auth/auth.page'
import UserPage from './user/user.page'
import OwnerPage from './owner/owner.page'
import AdminPage from './admin/admin.page'

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    component: HomePage
  },
  {
    path: DWELLING_ROUTE + '/:id',
    component: DwellingPage
  },
  {
    path: REGISTRATION_ROUTE,
    component: AuthPage
  },
  {
    path: LOGIN_ROUTE,
    component: AuthPage
  }
]

export const userRoutes = [
  ...publicRoutes,
  {
    path: USER_ROUTE,
    component: UserPage
  }
]

export const ownerRoutes = [
  ...publicRoutes,
  {
    path: OWNER_ROUTE,
    component: OwnerPage
  }
]

export const adminRoutes = [
  ...publicRoutes,
  {
    path: ADMIN_ROUTE,
    component: AdminPage
  }
]
