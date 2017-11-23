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
      cells: Array(16).fill(null),
    };
  }

renderSkyscraperCell(i) {
  return (
    <SkyscraperCell value={i}/>
  )
}

handleClick(i) {
 window.alert(''+i);
}

renderSkyscraperHint(i) {
  return (
    <SkyscraperHint onClick={() => this.handleClick(i)} />
  )
}
  render() {
    return (
      <div className="App">
 <div className="flex-skyscrapperHintRow">
   {this.renderSkyscraperHint(1)}
   {this.renderSkyscraperHint(2)}
    {this.renderSkyscraperHint(3)}
   {this.renderSkyscraperHint(4)}
   </div>
 <div className="flex-container">
   {this.renderSkyscraperHint(16)}
      {this.renderSkyscraperCell()}
      {this.renderSkyscraperCell()}
      {this.renderSkyscraperCell()}
      {this.renderSkyscraperCell()}
   {this.renderSkyscraperHint(5)}
 </div>

  <div className="flex-container">
   {this.renderSkyscraperHint(15)}
      {this.renderSkyscraperCell()}
      {this.renderSkyscraperCell()}
      {this.renderSkyscraperCell()}
      {this.renderSkyscraperCell()}
   {this.renderSkyscraperHint(6)}
</div>
 <div className="flex-container">
   {this.renderSkyscraperHint(14)}
      {this.renderSkyscraperCell()}
      {this.renderSkyscraperCell()}
      {this.renderSkyscraperCell()}
      {this.renderSkyscraperCell()}
   {this.renderSkyscraperHint(7)}
</div>
    <div className="flex-container">
   {this.renderSkyscraperHint(13)}
      {this.renderSkyscraperCell()}
      {this.renderSkyscraperCell()}
      {this.renderSkyscraperCell()}
      {this.renderSkyscraperCell()}
   {this.renderSkyscraperHint(8)}
  </div>
   <div className="flex-skyscrapperHintRow">
      {this.renderSkyscraperHint(9)}
      {this.renderSkyscraperHint(10)}
      {this.renderSkyscraperHint(11)}
      {this.renderSkyscraperHint(12)}
   </div>
<GogoPowerRangers />
</div>
    );
  }
}

export default App;
