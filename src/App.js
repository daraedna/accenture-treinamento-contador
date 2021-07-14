import React from 'react';
import './App.css';

function App() {

  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(pState => pState + 1)
  }
  return (
    <div>
      <p>Você clicou {count} vez{count > 1 && 'es'}</p>
      <button onClick={handleClick}>
        Clique aqui
      </button>
    </div>
  );
}

export default App;
