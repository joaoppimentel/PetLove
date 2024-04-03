import { StartNow } from '../components/HomePage/StartNow'
import { HowWorks } from '../components/HomePage/HowWorks'
import { useState, useEffect } from 'react'

export const HomePage = () => {
    
    const [isOpen, setIsOpen] = useState(false)

    useEffect(()=>{
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 500);
        return () => clearTimeout(timer);
    }, [])

    return (
        <main className={`transition-all duration-1000 ${isOpen ? 'opacity-100 -translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <StartNow />
            <HowWorks />
        </main>
    )
}
