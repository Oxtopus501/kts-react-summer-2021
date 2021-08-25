import React from 'react';
import logo from './logo.svg';
import './App.css';
import GitRepoTile from './layouts/components/GitRepoTile.js';
import SearchForm from './layouts/components/SearchForm.js';

function App() {
  return (
    <>
    <SearchForm />
      <div className="repo-list">
        
        <GitRepoTile />
        <GitRepoTile />
        <GitRepoTile />
        
      </div>
    </>

    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
