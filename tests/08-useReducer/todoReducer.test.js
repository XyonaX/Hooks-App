import { todoReducer } from "../../src/08-useReducer/todoReducer";


describe('Prubas en todoReducer', () => { 

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false,
    }]

    test('debe de regresar el estado inicial', () => { 
        
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);


    });

    test('debe de agregar un todo', () => { 

        const action = {
            type: 'ADD_TODO',
            payload: {
                id: 2,
                description: 'Hacer ejercicio',
                done: false,
            }
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe( 2 );
        expect(newState).toContain(action.payload);

    });

    test('debe eliminar un TODO', () => { 

        const action = {
            type: 'DELETE_TODO',
            payload: 1,
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe( 0 );
        expect(newState).not.toContain(action.payload);

    });

    test('debe de realizar el Toggle del todo', () => { 

        const action = {
            type: 'TOGGLE_TODO',
            payload: 1,
        };
        
        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);        
        
    });
});