import React from 'react'
import { useParams } from 'react-router-dom'

const DwellingPage = () => {
  const { id }: {id: string} = useParams()

  return (
      <div>
          DwellingPage. ID: {id}
      </div>
  )
}

export default DwellingPage
