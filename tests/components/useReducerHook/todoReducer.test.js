import todoReducer from "../../../src/components/useReducer/todoReducer"

describe('Pruebas en archivo todoReducer.js', () => {
    const estadoInicial = {
        id: 1,
        description: 'no-description',
        done: false,
    }

    test('Retorna el estado inicial', () => {
        const nuevoEstado = todoReducer(estadoInicial, {});
        //usamos toBe en vez de toEqual, porque
        //buscamos que ambos apunten a un mismo lugar en memoria
        expect(nuevoEstado[0]).toBe(estadoInicial);
    })

    test('Agrega un nuevo <TodoItem />', () => {
        const accionParaAgregar = {
            type: 'add-todo',
            payload: estadoInicial,
        };

        const nuevoEstado = todoReducer(estadoInicial, accionParaAgregar);

        expect(nuevoEstado.length).toBe(2);
        //usamos toContain en vez de toBe, porque
        //al igual que toEqual verifica que los valores sean iguales
        //y no la referencia
        expect(nuevoEstado).toContain(accionParaAgregar.payload);
    })

    test('Elimina un <TodoItem />', () => {
        const accionParaEliminar = {
            type: 'remove-todo',
            payload: estadoInicial,
        };

        const nuevoEstadoEliminado = todoReducer(estadoInicial, accionParaEliminar);

        expect(nuevoEstadoEliminado.length).toBe(0);
    })

    test('Cambia el estado de un <TodoItem />', () => {
        const accionParaCambiarEstado = {
            type: 'toggle-todo',
            payload: estadoInicial,
        }

        const nuevoEstado1 = todoReducer(estadoInicial, accionParaCambiarEstado);
        expect(nuevoEstado1[0].done).toBeTruthy();
        const nuevoEstado2 = todoReducer(nuevoEstado1, accionParaCambiarEstado);
        expect(nuevoEstado2[0].done).toBeFalsy();

    })
})