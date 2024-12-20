import React from 'react';
import './styles.css';
import Header from './components/Header';
import Button from './components/Button';
import Card from './components/Card';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
