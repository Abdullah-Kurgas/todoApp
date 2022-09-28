import "./App.css";
import Header from "./components/Header";
import Todo from "./components/Todo";
import AddForm from "./components/AddForm";
import { addTodo, deleteTodo, changeTodo } from './actions';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  let page = useSelector(state => state.page);
  let todos = useSelector(state => state.todos);

  let dispatch = useDispatch();

  let changeTodoState = (todo, index, e) => {
    if (e) {
      e.stopPropagation();
      dispatch(deleteTodo(todo, index));
      return;
    }
    dispatch(changeTodo(todo, index));
  };

  let addTodoBtn = (value) => {
    if (!value || value?.length === 0) return;

    let newTodo = {
      id: todos.length + 1,
      title: value,
      day: new Date().getDate(),
      done: false
    };

    dispatch(addTodo(newTodo));
  };

  return (
    <div className="parent">
      <div className="app">
        <Header />

        <div className="todo-template">
          {todos.length === 0 ? (
            <div className="no-items">
              <span>No items</span>
            </div>
          ) : (
            todos.map((todo, index) => {
              if (page === "done" && todo.done)
                return (
                  <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    page={page}
                    changeTodoState={changeTodoState}
                  />
                );
              if (page === "pending" && !todo.done)
                return (
                  <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    page={page}
                    changeTodoState={changeTodoState}
                  />
                );
              if (page === "all")
                return (
                  <div key={index}>
                    {index === 0 ? <button className="clear-all-btn" onClick={(e) => changeTodoState(false, undefined, e)}>Clear All</button> : null}
                    <Todo
                      todo={todo}
                      index={index}
                      page={page}
                      changeTodoState={changeTodoState}
                    />
                  </div>
                );
              return null;
            })
          )}
        </div>

        <AddForm addTodo={addTodoBtn} />
      </div>
    </div>
  );;
}

export default App;