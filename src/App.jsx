import "./App.css";
import { Dropdown } from "./components/Dropdown";

const words = [
  "monitor",
  "program",
  "application",
  "keyboard",
  "javascript",
  "typescript",
  "gaming",
  "network",
];

function App() {
  return (
    <div className="App">
      <Dropdown words={words} />
    </div>
  );
}

export default App;
