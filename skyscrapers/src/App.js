import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SkyscraperCell from './SkyscraperCell';
import SkyscraperHint from './SkyscraperHint';
import GogoPowerRangers from './GogoPowerRangers.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hintCells: Array(16).fill(0),
      skyscrapersCells: Array(16).fill(0),
    };
  }

  rollRandomState() {
    fetch("http://192.168.20.64:8089/api/solve", 
    {
      method: "GET"
    })
      .catch(function(x) {
        alert(x)
      })
        .then(function(respnse) {
            return respnse.json()
      })
      .then((data) => {

    this.setState({
      hintCells: this.state.hintCells.slice(),
      skyscrapersCells: data.result,
    });})
  }

  renderSkyscraperCell(index) {
    return (
      <SkyscraperCell value={this.state.skyscrapersCells[index]}/>
    )
  }

  handleClick(i) {
    const cells = this.state.hintCells.slice();
    cells[i] = (cells[i] + 1) % 5;
    this.setState({
      hintCells: cells,
      skyscrapersCells: this.state.skyscrapersCells
    });
  }

  renderSkyscraperHint(i) {
    return (
      <SkyscraperHint value={this.state.hintCells[i]} onClick={() => this.handleClick(i)} />
    )
  }

  render() {
    return (
      <div className="App">
        <div className="flex-skyscrapperHintRow">
          {this.renderSkyscraperHint(0)}
          {this.renderSkyscraperHint(1)}
          {this.renderSkyscraperHint(2)}
          {this.renderSkyscraperHint(3)}
        </div>
        <div className="flex-container">
          {this.renderSkyscraperHint(15)}
            {this.renderSkyscraperCell(0)}
            {this.renderSkyscraperCell(1)}
            {this.renderSkyscraperCell(2)}
            {this.renderSkyscraperCell(3)}
          {this.renderSkyscraperHint(4)}
        </div>
        <div className="flex-container">
          {this.renderSkyscraperHint(14)}
            {this.renderSkyscraperCell(4)}
            {this.renderSkyscraperCell(5)}
            {this.renderSkyscraperCell(6)}
            {this.renderSkyscraperCell(7)}
          {this.renderSkyscraperHint(5)}
        </div>
        <div className="flex-container">
          {this.renderSkyscraperHint(13)}
            {this.renderSkyscraperCell(8)}
            {this.renderSkyscraperCell(9)}
            {this.renderSkyscraperCell(10)}
            {this.renderSkyscraperCell(11)}
          {this.renderSkyscraperHint(6)}
        </div>
        <div className="flex-container">
          {this.renderSkyscraperHint(12)}
            {this.renderSkyscraperCell(12)}
            {this.renderSkyscraperCell(13)}
            {this.renderSkyscraperCell(14)}
            {this.renderSkyscraperCell(15)}
          {this.renderSkyscraperHint(7)}
        </div>
        <div className="flex-skyscrapperHintRow">
          {this.renderSkyscraperHint(8)}
          {this.renderSkyscraperHint(9)}
          {this.renderSkyscraperHint(10)}
          {this.renderSkyscraperHint(11)}
        </div>
        <GogoPowerRangers onClick={()=>this.rollRandomState()}/>
      </div>
    );
  }
}

export default App;
