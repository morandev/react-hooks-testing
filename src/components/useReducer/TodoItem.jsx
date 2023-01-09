const TodoItem = ({ id, description, done, deleteTodo, toggleTodo }) => {
     const handleDelete = () => {
          deleteTodo(id);
     };

     const toggleDone = () => {
          toggleTodo(id);
     };

     return (
          <li className="list-group-item d-flex justify-content-between">
               <span
                    className={`align-self-center user-select-none pe-auto ${
                         done && "text-decoration-line-through"
                    }`}
               >
                    {description}
               </span>
               <div>
                    <button
                         className={`btn ${
                              done
                                   ? "btn-outline-warning"
                                   : "btn-outline-success"
                         }`}
                         onClick={toggleDone}
                    >
                         {done ? "TODO" : "DONE"}
                    </button>
                    <button
                         className="btn btn-outline-danger"
                         onClick={handleDelete}
                    >
                         DEL
                    </button>
               </div>
          </li>
     );
};

export default TodoItem;
