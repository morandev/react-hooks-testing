import { useState } from "react";

export const useCounter = (initialVal = 10) => {

    const [counter, setCounter] = useState(initialVal);

    const increment = (amount = 1) => {
        setCounter(counter + amount);
    }

    const decrement = (amount = 1) => {
        setCounter(p => p - amount);
    }

    const reset = () => {
        setCounter(initialVal);
    }

    return { counter, setCounter, increment, decrement, reset };
}
