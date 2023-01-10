import { render, screen } from "@testing-library/react";
import TodoItem from "../../../src/components/useReducer/TodoItem";

describe('Pruebas en <TodoItem />', () => {

    //data de prueba
    const _todo = {
        id: 1,
        description: 'ir a almorzar',
        done: false,
    }
    
    //funciones de prueba
    const deleteTodoMock = jest.fn();
    const toggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('Renderiza un pre-estado de un TODO', () => {
        render( <TodoItem 
                    id={_todo.id}
                    description={_todo.description}
                    done={_todo.done}
                    deleteTodo={deleteTodoMock}
                    toggleTodo={toggleTodoMock}
                /> );
        screen.debug();

        const liElement = screen.getByRole('listitem');
        const spanElement = screen.getByLabelText('span');

        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between')

        expect( spanElement.className ).not.toContain('text-decoration-line-through')
    })
    
})