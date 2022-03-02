import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateItem from './pages/CreateItem'

import Login from './pages/Login'
import Recipes from './pages/Recipes'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route exact path="/receitas" element={ <Recipes /> } />
        <Route exact path="/novareceita" element={ <CreateItem /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
