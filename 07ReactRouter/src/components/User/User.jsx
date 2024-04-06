import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid}=useParams()
  return (
    <div className='text-center font-bold bg-gray-600 text-white py-4 rounded text-3xl underline '>
      User:{userid}
    </div>
  )
}

export default User
