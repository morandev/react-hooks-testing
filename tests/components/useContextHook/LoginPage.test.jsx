import { fireEvent, render, screen } from "@testing-library/react"
import LoginPage from "../../../src/pages/LoginPage"
import { UserContext } from "../../../src/context/userContext/UserContext"

describe('Pruebas en <LoginPage />', () => {
    const _user = {
        nombre: 'Edward',
        apellido: 'Jurao Diaz',
        rol: 'Java Teach Lead',
    }
    
    const setUserMock = jest.fn();

    beforeEach( () => {
        jest.resetAllMocks();
    })

    test('Muestra el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>
        );
        
        const nombreTd = screen.getByLabelText('nombre');
        const apellidoTd = screen.getByLabelText('apellido');
        const rolTd = screen.getByLabelText('rol');
        
        expect( nombreTd.innerHTML ).toBeFalsy();
        expect( apellidoTd.innerHTML ).toBeFalsy();
        expect( rolTd.innerHTML ).toBeFalsy();
    })
    
    test('Debe llamar el setUser ', () => {
        render(
            <UserContext.Provider value={{user: _user, setUser: setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const saveButton = screen.getByLabelText('save-button');
        fireEvent.click(saveButton);
        
        expect( setUserMock ).toHaveBeenCalled();
    })
})