import React, { useState } from 'react';
import TerminalLoader from './components/TerminalLoader';
import HomePage from './components/HomePage';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <div className="relative">
      {loading ? (
        <TerminalLoader onComplete={handleLoadingComplete} />
      ) : (
        <div>
          <HomePage />
        </div>
      )}
    </div>
  );
}

export default App;
