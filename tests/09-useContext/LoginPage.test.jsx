import {render,screen,fireEvent} from '@testing-library/react'
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';


describe('Pruebas en <LoginPage/>', () => {
   
    const user = {
        id: 1,
        name: 'Juan',
    }
    
    test('debe de mostrar el componente sin el usuario', () => {

        render(    
            <UserContext.Provider value={{user: null}}>
                
                <LoginPage />

            </UserContext.Provider>
        );
        // screen.debug()
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
        console.log(preTag.innerHTML);
    });
    
    test('debe de mostrar el setUser cuando se hace click en el boton', () => {

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{user: user, setUser: setUserMock}}>
                
                <LoginPage />

            </UserContext.Provider>
        );
        // screen.debug()
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(setUserMock).toHaveBeenCalled();
        expect(setUserMock).toHaveBeenCalledWith({
            "email": "jonatan.google.com",
            "id": 123,
            "name": "Jonatan"
        });

    });
});