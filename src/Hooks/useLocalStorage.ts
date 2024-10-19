import { useEffect, useState } from 'react'


export default function useLocalStorage(key: string, initialValue: any) {
    const [value, setValue] = useState(() => {
        const savedValue = JSON.parse(localStorage.getItem(key) || "{}")
        savedValue ? savedValue : initialValue

    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])

    return [value, setValue]
}