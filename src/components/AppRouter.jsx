import React from 'react'
import { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Context } from '..'
import Chat from './Chat'
import Login from './Login'
import { useAuthState } from 'react-firebase-hooks/auth'


const AppRouter = () => {
 
 const { auth } = useContext(Context)
 const [user] = useAuthState(auth)

  return (
    <Routes>
    <Route  path="/" element={user ? <Chat /> : <Login />} />
    <Route path="/login" element={user ? <Navigate to="/chat" replace /> :  <Login />}  />
    <Route path = "/chat" element={user ? <Chat /> :  <Navigate to="/login" replace/>} />
    </Routes>
  )
}

export default AppRouter