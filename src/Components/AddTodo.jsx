import { useState } from "react";

function AddTodo({ handleAddTodo }) {
  const [text, setText] = useState("");
  const handleChnage = (e) => {
    //event.target is nothing but the input value
    setText(e.target.value);
  };

  const onClick = () => {
    handleAddTodo(text);
    setText("");
  };
  return (
    <div>
      <input onChange={handleChnage} value={text} placeholder="Add Something" />
      <button onClick={onClick}>ADD</button>
    </div>
  );
}
export default AddTodo;
