import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
// import PrimeraApp from './PrimeraApp';

import './index.css'

const root = document.getElementById('root')

ReactDOM.render(
  <CounterApp value={123} />,
  // <PrimeraApp saludo={'Hola, soy Boddy perrito'} />,
  root
);
