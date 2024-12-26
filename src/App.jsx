import { useState } from 'react'
import './App.css'
import ListEmployeeComponents from './components/ListEmployeeComponents'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          <Route path="/" element = {<ListEmployeeComponents/>}> </Route>
          <Route path="/employees" element = {<ListEmployeeComponents/>}> </Route>
          <Route path="/add-employee" element = {<EmployeeComponent/>}> </Route>
          <Route path="/edit-employee/:id" element = {<EmployeeComponent/>}> </Route>
        </Routes>
        </BrowserRouter>
        <FooterComponent/>
      </>
  )
}

export default App
