import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

// import Badge from './components/Badge';
import BadgeNew from './pages/BadgeNew';

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __en_dónde__);
// If we include the tags '</>' it will be an element, but if we don't put those tags
// ...it will be a component, so be careful
// Because ReactDOM.render receives only elements and not components
ReactDOM.render(<BadgeNew />, container);    //ReactDOM is like analog to .appendChild()
