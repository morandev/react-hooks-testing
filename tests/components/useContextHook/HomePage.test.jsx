const { render, screen } = require("@testing-library/react")
import { UserContext } from '../../../src/context/userContext/UserContext'
import HomePage from '../../../src/pages/HomePage'

describe('Pruebas en <HomePage />', () => {

    const user = {
        id: 1,
        name: 'morandev',
    }

    test('Renderiza el componente sin data de usuario', () => {
        render(
        <UserContext.Provider value={{user: null}}>
            <HomePage />
        </UserContext.Provider>
        );

        // screen.debug();

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');
    })

    test('Renderiza el componente con data de usuario', () => {
        render(
        <UserContext.Provider value={{user}}>
            <HomePage />
        </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe(JSON.stringify(user, null, 3));
    })


})