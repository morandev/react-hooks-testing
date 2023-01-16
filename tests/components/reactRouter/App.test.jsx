const { render, screen } = require("@testing-library/react");
import { MemoryRouter } from 'react-router-dom';
import App from '../../../src/App';
import LoginPage from "../../../src/pages/LoginPage"
import { UserContext } from "../../../src/context/userContext/UserContext"

describe('Test en <App />', () => {

    test('Renderiza <HomePage />', () => {
        //<MemoryRouter /> proporciona lo necesario para testear 
        //componentes dependientes de ReactRouterDom
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )
        
        expect( screen.getByText('Home Page!') ).toBeTruthy();
    })

    test('Renderiza <LoginPage />', () => {
        //<MemoryRouter /> proporciona lo necesario para testear 
        //componentes dependientes de ReactRouterDom
        render(
            <MemoryRouter initialEntries={['/login']}>
                <UserContext.Provider value={{user: null}}>
                    <LoginPage />
                </UserContext.Provider>
            </MemoryRouter>
        );
        
        expect( screen.getByText('Login Page!') ).toBeTruthy();
    })

});