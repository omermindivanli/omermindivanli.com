import React from 'react';
import ReactDOM from 'react-dom';
import LabelBottomNavigation from './Components/LabelBottomNavigation/LabelBottomNavigation';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import RouterApp from './Router/Router';

ReactDOM.render(<RouterApp />, document.getElementById('RouterApp'));
ReactDOM.render(<LabelBottomNavigation />, document.getElementById('Footer'));

registerServiceWorker();
