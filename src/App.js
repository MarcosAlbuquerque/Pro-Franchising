import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Recipes from './pages/Recipes'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route exact path="/receitas" element={ <Recipes /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
