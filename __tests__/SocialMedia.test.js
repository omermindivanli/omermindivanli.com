import React from 'react';
import ReactDOM from 'react-dom';
import SocialMedia from '../src/Components/SocialMedia/SocialMedia';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SocialMedia />, div);
});
