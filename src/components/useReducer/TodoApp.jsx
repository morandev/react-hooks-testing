import { useTodos } from "../../hooks/useTodos";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

const TodoApp = () => {
     const { todos, todosCount, todosPendingCount, addTodo, deleteTodo, toggleTodo } = useTodos();

     return (
          <>
               <h1>
                    {`Todo App (${todosCount}) `}
                    <small>{`pendientes: (${todosPendingCount})`}</small>
               </h1>
               <hr />

               <div className="row">
                    <div className="col-7">
                         <TodoList
                              todos={todos}
                              deleteTodo={deleteTodo}
                              toggleTodo={toggleTodo}
                         />
                    </div>
                    <div className="col-5">
                         <h4>Agregar todo</h4>
                         <hr />
                         <TodoAdd addTodo={addTodo} />
                    </div>
               </div>
          </>
     );
};

export default TodoApp;
