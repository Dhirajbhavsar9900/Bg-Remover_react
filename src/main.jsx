import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Homepage />}></Route>
      <Route></Route>
    </Routes>
  </BrowserRouter>
)
