import "./App.css";
import Notification from "./Notification.js";
import { createContext } from "react";
import { data } from "./mock/flights.js";

export let TransactionContext = createContext();

function App() {
  return (
    <div className="App">
      <TransactionContext.Provider value={data}>
        <header className="App-header" />
        <Notification />
      </TransactionContext.Provider>
    </div>
  );
}

export default App;
