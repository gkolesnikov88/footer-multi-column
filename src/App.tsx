import React from 'react';
import './App.css';
import Newsletter from './components/Newsletter';
import Logo from './components/Logo';
import Socials from './components/Socials';

function App() {
  return (
    <div className="App">
      <footer className='footer'>
        <Newsletter />
        <Logo />
        <Socials />
      </footer>
    </div>
  );
}

export default App;
