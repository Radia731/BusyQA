import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

function App() {
  

  return (
    <Router>
      <div>
      <nav>
          <Link to ="/">Home</Link> <br />
          <Link to ="/about">About</Link> <br />
          <Link to ="/contact">Contact</Link>  <br />
      </nav>
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
      </Switch>
      </div>
      </Router>
  )
}

export default App
