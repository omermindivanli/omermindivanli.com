import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

it('renders without crashing', () => {
  const head = document.createElement('h1');
  ReactDOM.render(<Header />, head);
});
