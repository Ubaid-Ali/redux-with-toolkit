import React from 'react';
import { Counter } from './features/counter/Counter';
import UserName from './features/name/UserName'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Counter />
        <p> break the line</p>
        <UserName />
      </header>
    </div>
  );
}

export default App;
