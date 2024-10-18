import { useEffect, useState } from 'react'


export default function useLocalStorage(key: string, initialValue: any) {
    const [value, setValue] = useState(() => {
        const savedValue = JSON.parse(localStorage.getItem(key))
        if (savedValue) return savedValue
        return initialValue
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])

    return [value, setValue]
}