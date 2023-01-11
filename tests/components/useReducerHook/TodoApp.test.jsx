import { render, screen } from "@testing-library/react";
import TodoApp from "../../../src/components/useReducer/TodoApp";
import { useTodos } from "../../../src/hooks/useTodos";

jest.mock("../../../src/hooks/useTodos");

describe("Pruebas en <TodoApp />", () => {

     useTodos.mockReturnValue({
          todos: [
            { id: 1, description: 'do homework', done: false }
          ],
          todosCount: 1,
          todosPendingCount: 1,
          addTodo: jest.fn(),
          deleteTodo: jest.fn(),
          toggleTodo: jest.fn(),
     });

     test("Renderiza <TodoApp /> en estado inicial", () => {
          render(<TodoApp />);
        //   screen.debug();
        expect( screen.getByText('do homework') ).toBeTruthy();
     });
});
