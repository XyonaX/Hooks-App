import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";


describe('Pruebas en <TodoItem />', () => {

    const todo = {
        id: 1,
        description: 'Hacer la compra',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe de mostrar el Todo pendiente de completar', () => {
        
        render(<TodoItem 
            todo={ todo }
            onToggleTodo={ onToggleTodoMock} 
            onDeleteTodo={onDeleteTodoMock}
            />
        
        );

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
        
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toBe('align-self-center ');
        expect(spanElement.className).toContain('align-self-center');
        

    });

    test('debe de mostrar el Todo Completado', () => {
        
        todo.done = true;

        render(<TodoItem 
            todo={ todo }
            onToggleTodo={ onToggleTodoMock} 
            onDeleteTodo={onDeleteTodoMock}
            />
        
        );

    
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');
        

    });
    
    test('span debe de llamar el ToggleTodo cuando se hace click', () => {
        
        render(<TodoItem 
            todo={ todo }
            onToggleTodo={ onToggleTodoMock} 
            onDeleteTodo={onDeleteTodoMock}
            />
        
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);
        expect(onToggleTodoMock).toHaveBeenCalledWith( todo.id );

    });

    test('button debe de llamar el deleTodo', () => {
        
        render(<TodoItem 
            todo={ todo }
            onToggleTodo={ onToggleTodoMock} 
            onDeleteTodo={onDeleteTodoMock}
            />
        
        );

        const spanButton = screen.getByRole('button');
        fireEvent.click(spanButton);
        expect(onDeleteTodoMock).toHaveBeenCalledWith( todo.id );

    });

});