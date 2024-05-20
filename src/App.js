import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  
  const countWords = () => {
    const words = text.trim().split(/\s+/);
    return words.filter(word => word !== '').length;
  }

  return (
    <div className="App">
      <h1>Contador de Palavras</h1>
      <textarea
        rows="6"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite seu texto aqui..."
      />
      <p>Total de Palavras: {countWords()}</p>
    </div>
  );
}

export default App;
