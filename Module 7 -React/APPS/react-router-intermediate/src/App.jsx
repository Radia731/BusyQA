import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'


function DashBoard(){
  return <h2>Login</h2>
}

function Login() {
  return <h2>Login</h2>;
}


function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <Router>
      <Switch>
     <Route path="/dashboard">
      {loggedIn ? <DashBoard /> : <Redirect to ="/login" />}
      </Route>
      <Route path = "/login" componetnt={Login} />
      <Redirect from="/" to="/dashboard" />
      </Switch>
    </Router>
  )
}

export default App;
