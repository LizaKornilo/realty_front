import React from 'react'
import './App.scss'
import AppRouter from './pages/AppRouter'
import NavBar from './components/navbar/NavBar'

function App () {
  return (
    <div>
        <NavBar/>
        <AppRouter/>
    </div>
  )
}

export default App
