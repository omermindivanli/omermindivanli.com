import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../src/Components/Navbar/Navbar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);
});

it('renders without crashing', () => {
  const ul = document.createElement('ul');
  ReactDOM.render(<Navbar />, ul);
});

it('renders without crashing', () => {
  const li = document.createElement('li');
  ReactDOM.render(<Navbar />, li);
});
