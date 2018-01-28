import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Components/Footer/Footer';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import RouterApp from './Router/Router';

ReactDOM.render(<RouterApp />, document.getElementById('RouterApp'));
ReactDOM.render(<Footer />, document.getElementById('Footer'));

registerServiceWorker();
