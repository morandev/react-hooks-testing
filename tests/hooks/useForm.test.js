import { renderHook } from "@testing-library/react"
import useForm from "../../src/hooks/useForm"

describe('Pruebas en useForm', () => {

    test('Retorna el valor por defecto', () => {
        const initForm = {
            name: 'Morandev',
            email: 'morandev@github.com'
        }

        const { result } = renderHook(() => useForm(initForm));
        const { formState, onFormReset, onInputChange } = result.current;

        expect(formState).toEqual(initForm);
        expect(onInputChange).toEqual(expect.any(Function));
        expect(onFormReset).toEqual(expect.any(Function));
    })
})