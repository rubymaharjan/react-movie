import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from './components/Home';
import Nav from './components/nav';
import Popular from './components/content';
import Test1 from './components/a1';
import Test2 from './components/a1';
import Main from './components/main';
import Page from './components/page';
import Playing from './components/playing'
import Rated from './components/rated';
import Upcoming from './components/upcoming'
import Tab from './components/tab';
import Login from './login/login';
import Signup from './login/signup';
import Landing from './components/landing';

function App() {
  return (
    <div className="App">

      {/* <Landing /> */}
      {/* <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Popular} />
          <Route path="/rated" component={Rated} />
          <Route path="/latest" component={Playing} />
          <Route path="/upcoming" component={Upcoming} />
          <Route path="/signup" component={Signup} />

        </Switch>
      </BrowserRouter> */}
      {/* <Nav /> */}
      <Login />
      {/* <Tab /> */}
      {/* <Home/> */}
      {/* <Test2/> */}
      {/* <Main/>
      <Page/> */}
    </div>
  );
}

export default App;