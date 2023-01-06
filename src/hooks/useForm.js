import { useState } from "react";

const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const onFormReset = () => setFormState(initialForm);

    return {
        ...formState,
        formState,
        onInputChange,
        onFormReset
    };
}


export default useForm