import "./Todo.css";
import { Calendar, TrashFill } from "react-bootstrap-icons";

function Todo({index, todo, page, changeTodoState }) {
  return (
    <div className="todo-item" onClick={() => changeTodoState(todo, index)}>
      <div className="day">
        <Calendar size={30} />
        <span>{todo.day}</span>
      </div>

      <span className={todo.done ? 'done' : ''}>{todo.title}</span>

      <div>
        {page === 'all' ? <span onClick={(e) => changeTodoState(todo, index, e)}><TrashFill className="delete-icon" color="#f74040" size={25} /></span> : null}
      </div>
    </div>
  );
}

export default Todo;
