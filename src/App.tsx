import React from 'react';

import logo from './logo.svg';

function App() {
  return (
    <div className="text-center">
      <header className="bg-slate-800 min-h-screen flex flex-col items-center justify-center text-[calc(10px_+_2vmin)] text-white">
        <img
          src={logo}
          className="h-[40vmin] motion-safe:animate-[spin_20s_linear_infinite] pointer-events-none"
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="text-[#61dafb]"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
