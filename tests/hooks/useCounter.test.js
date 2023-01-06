const { renderHook } = require("@testing-library/react")
const { useCounter } = require("../../src/hooks/useCounter")

describe('Pruebas en useCounter', () => {

    test('retorna valores por defecto', () => {
        const { result } = renderHook( () => useCounter() );
        const { counter, setCounter, increment, decrement, reset } = result.current;
        
        expect( counter ).toBe( 10 );
        expect( increment ).toEqual( expect.any( Function ))
        expect( decrement ).toEqual( expect.any( Function ))
        expect( reset ).toEqual( expect.any( Function ))
    })
    
    test('debe generar el counter en 100', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { counter } = result.current;
        
        expect( counter ).toBe( 100 );
    })

})