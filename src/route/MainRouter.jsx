import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from '../layouts/Layout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

function MainRouter() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={ <Home/> } />
        <Route path='login' element={ <Login /> } />
        <Route path='register' element={ <Register /> } />
        <Route path='*' element={ <Home /> } />
      </Route>
    </Routes>
  )
}

export default MainRouter