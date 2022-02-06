import useTodos from 'hooks/useTodos';
import { useState } from 'react';

const Todo = () => {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useTodos();

  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo('');
  };

  const deleteTodo = todo => {
    setTodos(todos.filter(item => item !== todo));
  };
  return (
    <div>
      <br />
      <form onSubmit={addTodo}>
        <input value={todo} onChange={e => setTodo(e.target.value)} />
        <button tpye="submit">Ekle</button>
        <button onClick={() => setTodos([])}>Reset Todo</button>
      </form>
      <ul>
        {todos?.map((todoItem, i) => (
          <li key={i}>
            {todoItem} <button onClick={() => deleteTodo(todoItem)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
