import React from 'react'
import { useAuth } from '../contexts/AuthContext'

function Home() {
  const {user} = useAuth()
  return (
    <div>
    <div className="display-2 text-center p-5 bg-primary text-white mt-5">Welcome, {user.email}</div>
  </div>
  )
}

export default Home