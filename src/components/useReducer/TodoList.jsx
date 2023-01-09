import TodoItem from "./TodoItem";

const TodoList = ({ todos = [], deleteTodo, toggleTodo }) => {
     return (
          <ul className="list-group">
               {todos.map(({ id, description, done }) => (
                    <TodoItem 
                         key={id}
                         id={id}
                         description={description}
                         done={done}
                         deleteTodo={deleteTodo}
                         toggleTodo={toggleTodo}
                    />
               ))}
          </ul>
     );
};

export default TodoList;
