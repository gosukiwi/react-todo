import './TodoSummary.sass';

function TodoSummary(props) {
  const todos = props.todos
  const total = todos.length
  const completed = todos.reduce((accu, todo) => {
    if (todo.completed) accu += 1
    return accu
  }, 0)

  return (
    <div className="TodoSummary">
      <span>Completed </span>
      <span className="TodoSummary__completed">{completed}</span>
      <span>/</span>
      <span className="TodoSummary__total">{total}</span>
    </div>
  );
}

export default TodoSummary;
