import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import ProgressBar from "./Component/Progress";


function App() {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCompleted((prev) => {
        if (prev >= 100) {
          clearInterval(intervalId);
          return 100;
        } else {
          return prev + 10;
        }
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="App">
      <ProgressBar bgcolor={"#6a1b9a"} completed={completed} />
    </div>
  );
}

export default App;