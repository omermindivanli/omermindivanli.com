import React from 'react';
import ReactDOM from 'react-dom';
import Software from '../src/Components/Software/Software';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Software />, div);
});
