import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Recipes from './pages/Recipes'
import CreateItem from './pages/CreateItem'
import EditItem from './pages/EditItem'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route exact path="/receitas" element={ <Recipes /> } />
        <Route exact path="/novareceita" element={ <CreateItem /> } />
        <Route exact path="/editarreceita" element={ <EditItem /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
