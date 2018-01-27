import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from '../Components/Nav/Nav';
import Home from '../Components/Home/Home';
import Portfolio from '../Components/Portfolio/Portfolio';
import Software from '../Components/Software/Software';
import Life from '../Components/Life/Life';
import SocialMedia from '../Components/SocialMedia/SocialMedia';

const RouterApp = () => (
  <Router>
    <div>
      <Nav />
      <SocialMedia />

      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/software" component={Software} />
      <Route exact path="/life" component={Life} />
    </div>
  </Router>
);

export default RouterApp;
