import Button from "./Components/Button";
import Todo from "./Components/Todo";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>My Todo</h1>
      <Button />
      <br />
      <br />
      <br />
      <Todo />
    </div>
  );
}
// anything that can be changed is called as state
// for example counter is a state value
