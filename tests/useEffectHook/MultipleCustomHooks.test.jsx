import { render, screen } from "@testing-library/react";
import MultipleCustomHooks from "../../src/components/useEffectHook/MultipleCustomHooks";

describe('Pruebas en <MultipleCustomHooks />', () => {
    test('Renderiza el componente por defecto', () => {
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
})