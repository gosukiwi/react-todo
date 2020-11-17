import './TodoApp.sass';
import Todo from './Todo';
import TodoSummary from './TodoSummary'
import { useState, useRef } from 'react';

// Generate an unique ID for each TODO
// NOTE: In dev mode, when the browser refreshes, this starts again from 0 and
// breaks. It could be fixed by using something like `sessionStorage` but it
// would be an overkill for this simple app IMO.
let todoIdCounter = 0
function nextID() {
  return todoIdCounter++
}

// Initial list of TODOs
const INITIAL_TODOS = [{
  id: nextID(),
  name: 'Write a book',
  completed: false
}, {
  id: nextID(),
  name: 'Plant a tree',
  completed: true
}];

// TODO app entry point
function TodoApp() {
  const todoNameInput = useRef(null)
  const [todos, setTodos] = useState(INITIAL_TODOS);

  function handleAddButtonClicked() {
    const name = todoNameInput.current.value;
    if (name === '') return;

    const newTodo = { id: nextID(), name, completed: false };
    setTodos(todos.concat(newTodo));
    todoNameInput.current.value = '';
  }

  function handleFormSubmitted(e) {
    e.preventDefault();
  }

  function handleTodoChanged(todo) {
    setTodos(todos.map((current) => {
      if (todo.id === current.id) current.completed = !current.completed
      return current
    }));
  }

  function handleTodoDeleteClicked(todo) {
    setTodos(todos.filter((current) => todo.id !== current.id));
  }

  return (
    <form className="TodoApp" onSubmit={handleFormSubmitted}>
      {todos.length === 0 &&
        <div className="TodoApp__Empty">Nothing here!</div>
      }

      {todos.map((todo, index) => <Todo key={index} todo={todo} onTodoChanged={handleTodoChanged} onDeleteClicked={handleTodoDeleteClicked} />)}

      <div className="TodoInput">
        <input className="TodoInput__input" ref={todoNameInput} type="text" placeholder="New Todo" />
        <button className="TodoInput__button" type="submit" onClick={handleAddButtonClicked}>Add</button>
      </div>

      <TodoSummary todos={todos} />
    </form>
  );
}

export default TodoApp;
