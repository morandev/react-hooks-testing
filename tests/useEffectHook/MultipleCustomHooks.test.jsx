import { fireEvent, render, screen } from "@testing-library/react";
import MultipleCustomHooks from "../../src/components/useEffectHook/MultipleCustomHooks";
import useFetch from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

//0. mock de useFetch y useCounter
jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("Pruebas en <MultipleCustomHooks />", () => {
     //necesitamos un mock de la funcion incrementar
     //del contador, que es la segunda dependencia de MultipleCustomHooks
     //para realizar el tercer test
     const mockIncrement = jest.fn();

     /**
      * mock del valor de retorno de la dependencia useCounter,
      * 
      * se realizo a nivel de describe(), para no repetir sentencias en los tests
      */
     useCounter.mockReturnValue({
          counter: 1,
          increment: mockIncrement,
     });

     //buena practica - antes de cada prueba, reiniciar los mocks
     beforeEach(() => {
          jest.clearAllMocks();
     })

     test("Renderiza el componente por defecto", () => {
          //0. useFetch is mocked. Como dependencia de MultipleCustomHooks, se debe
          //especificar en cada test.
          useFetch.mockReturnValue({
               data: null,
               isLoading: true,
               hasError: null,
          });

          //1. renderizar el componente
          render(<MultipleCustomHooks />);
          //2. consultar a screen
          screen.debug();
          //3. pruebas
          const nextButton = screen.getByRole("button");

          expect(screen.getByText("Breaking bads quotes"));
          expect(screen.getByText("Cargando..."));
          expect(nextButton.disabled).toBeTruthy();
     });

     test("Renderiza un <Quote />", () => {
          //0. useFetch is mocked. Como dependencia de MultipleCustomHooks, se debe
          //especificar en cada test.
          useFetch.mockReturnValue({
               data: [
                    {
                         author: "Morandev",
                         quote: "Hola mundo!",
                    },
               ],
               isLoading: false,
               hasError: null,
          });

          //1. renderizar el componente
          render(<MultipleCustomHooks />);
          //2. pruebas
          const nextButton = screen.getByRole("button");

          expect(screen.getByText("Morandev")).toBeTruthy();
          expect(screen.getByText("Hola mundo!")).toBeTruthy();
          expect(nextButton.disabled).toBeFalsy();
     });

     test("Se incrementa el contador (segunda dependencia de MultipleCustomHooks)", () => {
          //0. useFetch is mocked. Como primer dependencia de MultipleCustomHooks, se debe
          //especificar en cada test.
          useFetch.mockReturnValue({
               data: [
                    {
                         author: "Morandev",
                         quote: "Hola mundo!",
                    },
               ],
               isLoading: false,
               hasError: null,
          });

          //1. renderizar el componente
          render(<MultipleCustomHooks />);
          //2. nextButton - el contador se incrementa al darle click
          const nextButton = screen.getByRole("button");
          //3. mock o disparo del click en el button
          fireEvent.click( nextButton );
          //4. prueba - que el mock de la funcion increment haya sido invocado
          expect( mockIncrement ).toHaveBeenCalled();
     });
});
