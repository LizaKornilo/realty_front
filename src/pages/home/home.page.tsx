import React from 'react'
import { Link } from 'react-router-dom'
import { DWELLING_ROUTE } from '../consts'

const HomePage = () => {
  return (
      <div>
          HOME
          <Link to={DWELLING_ROUTE + '/1'}>DWELLING 1</Link>
          <Link to={DWELLING_ROUTE + '/2'}>DWELLING 2</Link>
          <Link to={DWELLING_ROUTE + '/3'}>DWELLING 3</Link>
      </div>
  )
}

export default HomePage
