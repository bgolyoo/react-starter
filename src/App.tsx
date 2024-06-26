import { useState } from 'react';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="pag-4 flex justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="h-24 p-6 hover:drop-shadow-lg" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-24 p-6 hover:drop-shadow-lg" alt="React logo" />
        </a>
      </div>
      <h1 className="text-5xl">Vite + React</h1>
      <button className="btn" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <p className="text-neutral-400">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
