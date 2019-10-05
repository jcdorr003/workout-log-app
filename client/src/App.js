import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    )
  }
  
}

export default App;