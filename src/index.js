// React Core
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

// React Class'ın içinde component var onu import ediyor...
import RouterApp from './Router/Router';

// Rendering is here...
ReactDOM.render(<RouterApp />, document.getElementById('RouterApp'));

registerServiceWorker();
