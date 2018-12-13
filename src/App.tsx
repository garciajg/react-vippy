import React, { Component } from 'react';
import ImageComponent from './components/Image';
import UploadImage from './components/ImageUpload';
import Description from './components/Description';
import Header from './components/Header';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header name="COFFEE" />
          <h1>Welcome to Vippy</h1>
        </header>
        <Description countBy={4} />
        <ImageComponent token="legittoken" ctype="image/jpeg" />
        <UploadImage />
      </div>
    );
  }
}

export default App;
