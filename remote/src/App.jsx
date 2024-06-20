import { useState } from "react";
import "./App.css";
import Widget from "./components/Widget";

function App() {
  return (
    <div className="flex w-64 h-64 border-4 border-red-400">
      <Widget />
    </div>
  );
}

export default App;
