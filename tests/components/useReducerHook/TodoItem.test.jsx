import { fireEvent, render, screen } from "@testing-library/react";
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

        const liElement = screen.getByRole('listitem');
        const spanElement = screen.getByLabelText('span');

        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between')

        expect( spanElement.className ).not.toContain('text-decoration-line-through')
    })

    test('Renderiza el estado final de un TODO', () => {
        _todo.done = true;

        render( <TodoItem 
                    id={_todo.id}
                    description={_todo.description}
                    done={_todo.done}
                    deleteTodo={deleteTodoMock}
                    toggleTodo={toggleTodoMock}
                /> );
                
                const spanElement = screen.getByLabelText('span');
                
                expect( spanElement.className ).toContain('text-decoration-line-through')
            })
            
            
            test('boton-done ejecuta la funcion toggleTodo luego de un click', () => {
                
                render( <TodoItem 
                            id={_todo.id}
                            description={_todo.description}
                            done={_todo.done}
                            deleteTodo={deleteTodoMock}
                            toggleTodo={toggleTodoMock}
                        /> );

                const botonDone = screen.getByLabelText('boton-done');

                fireEvent.click(botonDone);

                expect( toggleTodoMock ).toHaveBeenCalledWith(_todo.id);
            }) 

            test('boton-del ejecuta la funcion deleteTodo luego de un click', () => {
                
                render( <TodoItem 
                            id={_todo.id}
                            description={_todo.description}
                            done={_todo.done}
                            deleteTodo={deleteTodoMock}
                            toggleTodo={toggleTodoMock}
                        /> );

                const botonDone = screen.getByLabelText('boton-del');

                fireEvent.click(botonDone);

                expect( deleteTodoMock ).toHaveBeenCalledWith(_todo.id);
            }) 
            
})