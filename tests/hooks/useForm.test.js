import { act, renderHook } from "@testing-library/react"
import useForm from "../../src/hooks/useForm"

describe('Pruebas en useForm', () => {
    const initForm = {
        name: 'Morandev',
        email: 'morandev@github.com'
    }

    test('Retorna el valor por defecto', () => {
        const { result } = renderHook(() => useForm(initForm));
        const { formState, onFormReset, onInputChange } = result.current;

        expect(formState).toEqual(initForm);
        expect(onInputChange).toEqual(expect.any(Function));
        expect(onFormReset).toEqual(expect.any(Function));
    })

    test('Actualizamos nombre dentro del formulario', () => {
        const nuevoEmail = 'morandev@gmail.com';

        //1. montar el hook
        const { result } = renderHook(() => useForm(initForm));
        //2. llamar onInputChange, usar act()
        const { onInputChange } = result.current;
        act(() => {
            onInputChange({ target: { name: 'email', value: nuevoEmail } })
        })
        //3. expect result.current.name === nuevoNombre
        expect(result.current.email).toBe(nuevoEmail)
        //4. expect result.current.formState.name === nuevoNombre
        expect(result.current.formState.email).toBe(nuevoEmail)
    })

    test('Reset del formulario', () => {
        const nuevoEmail = 'morandev@gmail.com';

        //1. montar el hook
        const { result } = renderHook(() => useForm(initForm));
        //2. llamar onInputChange, usar act()
        const { onInputChange, onFormReset } = result.current;
        act(() => {
            onInputChange({ target: { name: 'email', value: nuevoEmail } })
        })
        //3. expect result.current.name === nuevoNombre
        expect(result.current.email).toBe(nuevoEmail)
        //4. llamar onFormReset, expect result.current.formState === initForm, usarAct
        act(() => {
            onFormReset();
        })
        expect(result.current.formState).toEqual(initForm);
    })
})