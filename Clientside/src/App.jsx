import React from 'react'
import './App.css'
import AddUser from './components/addUser'
import LoginPage from './components/login'
import Home from './components/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/login' Component={LoginPage}/>
        <Route path='/register' Component={AddUser}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
