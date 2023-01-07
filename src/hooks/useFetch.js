import { useEffect, useState } from "react";
import { fetch } from "whatwg-fetch";

const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const myFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        })

        const rsp = await fetch(url);
        const data = await rsp.json();

        setState({
            data,
            isLoading: false,
            hasError: null,
        })
    }

    useEffect(() => {
        myFetch();
    }, [url])

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}

export default useFetch