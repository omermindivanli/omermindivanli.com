import React from 'react';
import ReactDOM from 'react-dom';
import Thoughts from './Thoughts';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Thoughts />, div);
});
