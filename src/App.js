import React from 'react';
import Login from './pages/Login';
import OTP from './pages/OTP';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
          <Route path="/"  component={Login} exact/>
          <Route path="/otp" component={OTP} exact />
          <Route path="/signup" component={SignUp} exact />
      </Switch>
    </Router>
  );
}

export default App;
