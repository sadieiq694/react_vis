import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
//import ForceGraph2D from './ForceGraph2D';
//import { ForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force';
//import './index.css';

/*
class Square extends React.Component {

    render() {
      return (
        <button 
            className="square" 
            onClick={ () => {this.props.onClick()}}
        >
          {this.props.value}
        </button>
      );
    }
}

  
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        }
    }

    handleClick(i) {
        const squares = this.state.squares.slice(); // creates a copy of squares 
        squares[i] = 'X';
        this.setState({squares: squares});
    }

    renderSquare(i) {
      return (
        <Square 
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />
        );
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
}
  
class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status *//*}</div>
            <ol>{/* TODO *//*}</ol>
          </div>
        </div>
      );
    }
}
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  
  */

  // <!--<script src="../../src/packages/react-force-graph-2d/dist/react-force-graph-2d.js"></script>-->
    //const miser = require('../data/miserables.json');

    /*ReactDOM.render(
    <div>
        <body>
            <ForceGraph zoom simulationOptions={{ height: 500, width: 500 }}>
                <ForceGraphNode node={{ id: 'first-node' }} fill="red" radius='35'/>
                <ForceGraphNode node={{ id: 'second-node' }} fill="blue" />
                <ForceGraphNode node={{ id: 'third-node' }} fill="yellow" />
                <ForceGraphLink link={{ source: 'first-node', target: 'second-node' }} />
                <line x1={150} y1={0} x2={150} y2={300} zoomable stroke="green" />
            </ForceGraph>
        </body>
    </div>, 
    document.getElementById("root")
    )*/

    const graphData = require('./data/dummy_data.json');

    ReactDOM.render(
      <App data={graphData}/>,
      document.getElementById('root')
    );
