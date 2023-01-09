/**
 * 
 * funcion pura de js
 * 
 * @returns 
 */
const todoReducer = (initState, action = {}) => {
    if(!Array.isArray(initState))
        initState = [initState];

    switch (action.type) {
        case 'add-todo': {
            return [
                ...initState,
                action.payload
            ];
        }

        case 'remove-todo': {
            return initState.filter(td => td.id !== action.payload.id)
        };

        case 'toggle-todo':
            return initState.map(td => {
                if (td.id === action.payload.id)
                    return { ...td, done: !td.done }

                return td;
            })

        default:
            return initState;
        // throw new Error('no case was found');
    }
}

export default todoReducer