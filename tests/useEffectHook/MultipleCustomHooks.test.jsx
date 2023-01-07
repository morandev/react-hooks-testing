import { render, screen } from "@testing-library/react";
import MultipleCustomHooks from "../../src/components/useEffectHook/MultipleCustomHooks";
import useFetch from "../../src/hooks/useFetch";

//0. mock de useFetch
jest.mock('../../src/hooks/useFetch');


describe('Pruebas en <MultipleCustomHooks />', () => {
    test('Renderiza el componente por defecto', () => {
        //0. useFetch is mocked. Como dependencia de MultipleCustomHooks, se debe
        //especificar en cada test.
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        });

        //1. renderizar el componente
        render( <MultipleCustomHooks />);
        //2. consultar a screen
        screen.debug();
        //3. pruebas
        const nextButton = screen.getByRole('button');
        
        expect( screen.getByText('Breaking bads quotes'));
        expect( screen.getByText('Cargando...'));
        expect( nextButton.disabled ).toBeTruthy();
    })
    
    test('Renderiza un <Quote />', () => {
        //0. useFetch is mocked. Como dependencia de MultipleCustomHooks, se debe
        //especificar en cada test.
        useFetch.mockReturnValue({
            data: [{
                author: 'Morandev',
                quote: 'Hola mundo!'
            }],
            isLoading: false,
            hasError: null,
        });
        
        //1. renderizar el componente
        render( <MultipleCustomHooks />);
        //2. pruebas
        const nextButton = screen.getByRole('button');
        
        expect( screen.getByText('Morandev') ).toBeTruthy();
        expect( screen.getByText('Hola mundo!') ).toBeTruthy();
        expect( nextButton.disabled ).toBeFalsy();
    })
})  