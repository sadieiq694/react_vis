import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import RealGraph from './RealGraph.js'
import AppPassedData from './AppPassedData.js'

//import './index.css';


const graphData = require('./data/dummy_data.json');

ReactDOM.render(
  <div>
    <App data={graphData}/>
    <AppPassedData data={graphData}/>
    <RealGraph data={graphData}/>
  </div>,
  document.getElementById('root')
);
