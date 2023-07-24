import { useEffect, useState } from "react";
import "./App.css";
import { getGreeting } from "./apiManager";

function App() {
  const [greeting, setGreeting] = useState("Not Connected to the API");

  useEffect(() => {
    getGreeting().then(setGreeting);
  }, []);
  return (
    <div className="App">
      <h1>{greeting.message}</h1>
    </div>
  );
}

export default App;
