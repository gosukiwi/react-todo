import './Todo.sass';

function Todo(props) {
  const todo = props.todo
  const onTodoChanged = props.onTodoChanged
  const onDeleteClicked = props.onDeleteClicked

  return (
    <div className="Todo">
      <input className="Todo__checkbox" type="checkbox" checked={todo.completed} onChange={() => onTodoChanged(todo)} />
      <span className="Todo__name" onClick={() => onTodoChanged(todo)}>{todo.name}</span>
      <button className="Todo__delete-button" type="button" onClick={() => onDeleteClicked(todo)}>&#x2715;</button>
    </div>
  );
}

export default Todo;
