import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/hooks/useTodo";


jest.mock("../../src/hooks/useTodo");

describe('Pruebas en <TodoApp />', () => {

    useTodo.mockReturnValue({
        todos: [
            { id: 1, description: 'hacer ejercicios', done: false },
            { id: 2, description: 'hacer la cena', done: true },
        ],
        todosCount: 2,
        pendingTodos: 1,
        handleDeleteTodo: jest.fn(),
        handleNewTodo: jest.fn(),
        handleToggleTodo: jest.fn()
    });
    
    test('debe de mostrar el componente correctamente', () => {
        
        
        render(<TodoApp />);
        // screen.debug();
        expect(screen.getByText('hacer ejercicios')).toBeTruthy();
        expect(screen.getByText('hacer la cena')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();

    });
})