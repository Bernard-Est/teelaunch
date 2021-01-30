import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Mainpage from './Components/MainPage';

function App() {
  return (
    <div className="App">
      <div className="spacing">
      <Header></Header>
      </div>

      <div className="MainPage">
        <Mainpage></Mainpage>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
