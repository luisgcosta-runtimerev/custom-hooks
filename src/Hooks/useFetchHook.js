import { useEffect, useState } from "react"

export default function useFetchHook(url = '', options = {}){
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        fetch(url, options)
            .then(res => res.json())
            .then(d => setData(d))
            .catch(error => setError(error.message))
            .finally(setIsLoading(false))
    },[])

    console.log('My use fetch hook render')
    return {
        data, error, isLoading
    }
}