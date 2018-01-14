import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from '../Components/Navbar/Navbar';
import Home from '../Components/Home/Home';
import Portfolio from '../Components/Portfolio/Portfolio';
import Software from '../Components/Software/Software';
import Life from '../Components/Life/Life';
import SocialMedia from '../Components/SocialMedia/SocialMedia';
import Footer from '../Components/Footer/Footer';

const RouterApp = () => (
  <Router>
    <div>
      <Navbar />

      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/software" component={Software} />
      <Route exact path="/life" component={Life} />

      <SocialMedia />
      <Footer />
    </div>
  </Router>
);

export default RouterApp;
