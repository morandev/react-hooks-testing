import { useForm } from "./hook/useForm";

const TodoAdd = ({addTodo}) => {
     const { description, onInputChange, onResetForm} = useForm({description: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        
          const todo = {
               id: new Date().getTime(),
               description,
               done: false
          };

          addTodo(todo);
          onResetForm();
    }
 
    return (
          <form
            onSubmit={handleSubmit}
          >
               <input
                    type="text"
                    placeholder="¿Que hay que hacer?"
                    className="form-control"
                    name="description"
                    pattern="[a-z ]{1,100}"
                    min={2}
                    title="solo letras en minusculas."
                    onChange={onInputChange}
                    required
               />
               <button type="submit" className="btn btn-outline-dark mt-1">
                    Agregar
               </button>
          </form>
     );
};

export default TodoAdd;
