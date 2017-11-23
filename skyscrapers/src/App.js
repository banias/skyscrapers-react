import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




class App extends Component {
renderSkyscraperCell(i) {
  return (
    <button class="flex-item">
     </button>
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
 <div class="flex-container">
   {this.renderSkyscraperHint()}
   {this.renderSkyscraperHint()}
    {this.renderSkyscraperHint()}
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
      {this.renderSkyscraperHint()}
      {this.renderSkyscraperHint()}
      {this.renderSkyscraperHint()}
   </div>     
</div>
    );
  }
}

export default App;
