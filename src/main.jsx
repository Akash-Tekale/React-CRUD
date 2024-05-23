import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as router,Routes,Route, BrowserRouter} from 'react-router-dom'
import Navbar from './navbar'
import Home from './home'
import Student from './studen'
import Edit from './edit'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
      <Navbar/><br />
      <Routes>
      <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/student' element={<Student/>}>Student</Route>
        <Route path='/update/:id' element={<Edit/>}>Student</Route>
      </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
