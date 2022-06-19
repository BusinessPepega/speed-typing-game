
import './App.css';
import useWordGame from "./hooks/useWordGame.js"
import React from "react"

function App() {

  const { timeRemaining, startGame, handleChange, text, wordCount, isTimeRunning, textBoxRef } = useWordGame(3)

  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea
        onChange={handleChange}
        value = {text}
        disabled={!isTimeRunning}
        ref={textBoxRef}
      />
      <button 
        onClick={startGame}
        disabled={isTimeRunning}
      >
          start
      </button>
      <h4>Time remaining: {timeRemaining}</h4>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
