/* Footer Component */
import React from 'react';
import './Article.css';

const Article = () => (
  <div id="Article" className="container bg-light">
    <div className="row container">
      <div className="col-sm-4 border">
        <h3>Side Bar</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      </div>
      <div className="col-sm-8 border">
        <h3>Article Post Flow</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      </div>
    </div>
  </div>
);
export default Article;
