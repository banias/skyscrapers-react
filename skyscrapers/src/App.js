import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SkyscraperCell from './SkyscraperCell';

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

renderSkyscraperHint(i) {
  return (
    <button class="flex-skyscraperHint" >
     </button>
  )
}
  render() {
    return (
      <div className="App">
 <div class="flex-skyscrapperHintRow">
   {this.renderSkyscraperHint()}
   {this.renderSkyscraperHint()}
    {this.renderSkyscraperHint()}
   {this.renderSkyscraperHint()}
   </div>
 <div class="flex-container">
   
   {this.renderSkyscraperHint()}
      {this.renderSkyscraperCell(1)}
      {this.renderSkyscraperCell()}
      {this.renderSkyscraperCell()}
      {this.renderSkyscraperCell()}
   {this.renderSkyscraperHint()}
 </div>

  <div class="flex-container">
   {this.renderSkyscraperHint()}
      {this.renderSkyscraperCell()}
      {this.renderSkyscraperCell()}
      {this.renderSkyscraperCell()}
      {this.renderSkyscraperCell()}
   {this.renderSkyscraperHint()}
</div>
 <div class="flex-container">
   {this.renderSkyscraperHint()}
      {this.renderSkyscraperCell()}
      {this.renderSkyscraperCell()}
      {this.renderSkyscraperCell()}
      {this.renderSkyscraperCell()}
   {this.renderSkyscraperHint()}
</div>
    <div class="flex-container">
   {this.renderSkyscraperHint()}
      {this.renderSkyscraperCell()}
      {this.renderSkyscraperCell()}
      {this.renderSkyscraperCell()}
      {this.renderSkyscraperCell()}
   {this.renderSkyscraperHint()}
  </div>
   <div class="flex-skyscrapperHintRow">
      {this.renderSkyscraperHint()}
      {this.renderSkyscraperHint()}
      {this.renderSkyscraperHint()}
      {this.renderSkyscraperHint()}
   </div>     
</div>
    );
  }
}

export default App;
