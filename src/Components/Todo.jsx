import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

function Todo() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    const newItem = {
      title: text,
      status: false,
      id: new Date().toDateString() + text
    };
    setTodos([...todos, newItem]);
  };
  //console.log(todos);
  return (
    <div>
      <AddTodo handleAddTodo={handleAddTodo} />
      <ul>
        {todos.map((item) => (
          <TodoItem key={item.id} title={item.title} status={item.status} />
        ))}
      </ul>
    </div>
  );
}
export default Todo;
