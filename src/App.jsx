import React, { useState } from "react";
import { CounterControls, ProgressBar, Header } from "./components";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState([0]);
  const [pointer, setPointer] = useState(0);

  const increment = () => {
    if (counter < 150) {
      updateCounter(counter + 1);
    }
  };

  const decrement = () => {
    if (counter > 0) {
      updateCounter(counter - 1);
    }
  };

  const undo = () => {
    if (pointer > 0) {
      setPointer(pointer - 1);
      setCounter(history[pointer - 1]);
    }
  };

  const redo = () => {
    if (pointer < history.length - 1) {
      setPointer(pointer + 1);
      setCounter(history[pointer + 1]);
    }
  };

  const updateCounter = (newCounter) => {
    const updatedHistory = history.slice(0, pointer + 1);
    setHistory([...updatedHistory, newCounter]);
    setPointer(pointer + 1);
    setCounter(newCounter);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <div className="flex flex-col items-center justify-center p-4 h-[calc(100vh-4rem)]">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">Limit Counter</h1>
        <div className="text-3xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
          {counter}
        </div>
        <ProgressBar value={counter} max={150} />
        <CounterControls
          onIncrement={increment}
          onDecrement={decrement}
          onUndo={undo}
          onRedo={redo}
          counter={counter}
        />
      </div>
    </div>
  );
};

export default App;
