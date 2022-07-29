import {fireEvent, render, screen} from '@testing-library/react';
import {MultipleCustomHooks} from '../../src/03-examples'
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {
    
    const mockIncrement = jest.fn();
    
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement,
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks/>);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('BreakingBad Quotes'));

        const nextButton = screen.getByRole('button', {name: 'Next Quote'});

        screen.debug();

    });
    
    test('debe de mostrar un Quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Jonatan', quote: 'Hola' }],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText('Hola')).toBeTruthy();
        expect(screen.getByText('Jonatan')).toBeTruthy();

        const nextButton = screen.getByRole('button', {name: 'Next Quote'});
        expect(nextButton.disabled).toBeFalsy();
        
    });

    test('debe de llamar la funcion de incrementar', () => { 
        

        useFetch.mockReturnValue({
            data: [{ author: 'Jonatan', quote: 'Hola' }],
            isLoading: false,
            hasError: null
        });
        
        
        render(<MultipleCustomHooks />);

        const nextButton = screen.getByRole('button', {name: 'Next Quote'});
        fireEvent.click( nextButton );
        expect(mockIncrement).toHaveBeenCalled();

    });
});