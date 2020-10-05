import React from 'react';
import Routes from './routes'
import Header from './components/header'
import './global.css'


export default function App() {
  return (
    <div className="app">
      <Header/> 
      <Routes/>
    </div>
  );
}


