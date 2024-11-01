import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from "./components/Home"
import Catprofile from "./components/Catprofile"
import Dogprofile from "./components/Dogprofile"
import Bunnyprofile from "./components/Bunnyprofile"
import './App.css'

function App() {

  return (
    <> 
      <Router>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/DOG" element={<Dogprofile />}/>
          <Route path="/CAT" element={<Catprofile />}/>
          <Route path="/BUNNY" element={<Bunnyprofile />}/> 
          <Route path="/*" element={<div> PET NOT FOUND </div>}/> 
        </Routes>
      </Router>
    </>
  )
}

export default App
