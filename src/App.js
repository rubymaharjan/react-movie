import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from './components/Home';
import Nav from './components/nav';
import Popular from './components/content';
import Playing from './components/playing'
import Rated from './components/rated';
import Upcoming from './components/upcoming'
import Tab from './components/tab';
import Signup from './login/signup';
// import Signup from './login/signup';
import Forgot from './login/forgot';
import Landing from './components/landing';
import Login from './login/login'
import Social from './login/social'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Signup} />
          <Route path="/popular" exact component={Popular} />
          <Route path="/rated" component={Rated} />
          <Route path="/latest" component={Playing} />
          <Route path="/upcoming" component={Upcoming} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;