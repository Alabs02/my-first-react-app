import { useState, useEffect } from "react";

const useFetch = (endpoint) => {
    const abortCont = new AbortController()


    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(endpoint, { signal: abortCont.signal })
        .then(response => {
            if (!response.ok) throw Error('Could not fetch that resource')
            return response.json()
        })
        .then(response => {
            console.log(response)
            setData(response)
            setIsPending(false)
            setError(null)
        })
        .catch(error => {
            if (error.name === 'AbortError') {
                console.log('fetch aborted')
            } else {
                setError(error.message)
                setIsPending(false)
                setTimeout(() => {
                    setError(null)
                }, 8000);
                console.log('Error: ', error)
            }
        })
    }, [endpoint])

    return { data, isPending, error }
}

export default useFetch
