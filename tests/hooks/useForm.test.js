import {act,renderHook} from '@testing-library/react'
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Jonatan',
        email: 'jonatan.google.com',
    }


    test('debe de regresar los valores por defecto', () => { 

        const {result} = renderHook(() => useForm(initialForm));

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            handleInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });
   
    });

    test('debe de cambiar el nombre del formulario', () => {

        const newValue = 'Juan';
        const {result} = renderHook(() => useForm(initialForm));
        const {handleInputChange} = result.current;
        act(() => {
            handleInputChange({target: {name: 'name', value: newValue}});
        });
        expect(result.current.formState.name).toBe(newValue);
        expect(result.current.name).toBe(newValue);
        //handleInputChange //act, event...
        //expect
    });

    test('debe de cambiar el nombre del formulario', () => {

        const newValue = 'Juan';
        const {result} = renderHook(() => useForm(initialForm));
        const {handleInputChange,onResetForm} = result.current;
        act(() => {
            handleInputChange({target: {name: 'name', value: newValue}});
            onResetForm();
        });
        expect(result.current.formState.name).toBe(initialForm.name);
        expect(result.current.name).toBe(initialForm.name);
        //handleInputChange //act, event...
        //expect
    });

});