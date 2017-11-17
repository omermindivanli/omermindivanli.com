// React Core
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// React Class'ın içinde component var onu import ediyor...
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Article from './Components/Article/Article';
import Navbar from './Components/Navbar/Navbar';

// Rendering is here...
ReactDOM.render(<Header />, document.getElementById('app'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
ReactDOM.render(<Article />, document.getElementById('article'));
ReactDOM.render(<Navbar />, document.getElementById('navbar'));
