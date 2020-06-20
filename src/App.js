import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import SignIn from './pages/SignUpAndSignIn/SignIn';
import { Switch, Route } from 'react-router-dom';

function App (){
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signup' component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
