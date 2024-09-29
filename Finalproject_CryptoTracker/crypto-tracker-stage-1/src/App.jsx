import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import CryptoDashboard from './components/CryptoDashboard.jsx'
import Navigation from './components/Navigation.jsx'
import WatchList from './components/WatchList.jsx'
import './styles/CryptoCards.css'

function App() {

  return (
  <>
       <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={ <CryptoDashboard/> } />
            <Route path="/watchList" element={ <WatchList/> } />
            <Route path="*" element={ <div>Not Found</div> } />
         </Routes>
         </Router>
    </>
  )
}

export default App
