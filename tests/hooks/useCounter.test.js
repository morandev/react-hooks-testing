const { renderHook, act } = require("@testing-library/react")
const { useCounter } = require("../../src/hooks/useCounter")

describe('Pruebas en useCounter', () => {

    test('retorna valores por defecto', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, setCounter, increment, decrement, reset } = result.current;

        expect(counter).toBe(10);
        expect(increment).toEqual(expect.any(Function))
        expect(decrement).toEqual(expect.any(Function))
        expect(reset).toEqual(expect.any(Function))
    })

    test('debe generar el counter en 100', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;

        expect(counter).toBe(100);
    })

    test('incrementa el contador', () => {
        const { result } = renderHook(() => useCounter());

        act(() => { result.current.increment(); }); // wrap para una funcion que actualiza el estado o re-renderiza un componente

        expect( result.current.counter ).toBe(11);
    })

    test('decrementa el contador', () => {
        const { result } = renderHook(() => useCounter());

        act(() => { result.current.decrement(); }); // wrap para una funcion que actualiza el estado o re-renderiza un componente

        expect( result.current.counter ).toBe(9);
    })

    test('decrementa el contador', () => {
        const initVal = 540;
        const { result } = renderHook(() => useCounter(initVal));

        act(() => {
            result.current.increment(2);
            result.current.decrement(102);
            result.current.reset();
        }); // wrap para una funcion que actualiza el estado o re-renderiza un componente

        expect( result.current.counter ).toBe(initVal);
    })

})