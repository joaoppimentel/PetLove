import { Matches } from "../components/PetDates/Matches"
import { useState, useEffect } from "react"

export const PetDates = () => {
    const [oldMatches, setOldMatches] = useState(false);

    const [isOpen, setIsOpen] = useState(false)

    useEffect(()=>{
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 500);
        return () => clearTimeout(timer);
    }, [])

    return (
        <main className={`transition-all duration-1000 ${isOpen ? 'opacity-100 -translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <section className="bg-white py-14 flex flex-col items-center pt-20">
                <div className="text-center">
                    <h3 className="text-2xl text-lime-800 font-black md:text-4xl "><span className="text-yellow-400">Pets</span> namorando</h3>
                    <p className=" font-medium text-gray-500 py-6 md:text-xl">Duis aute irure dolor in reprehenderit in voluptate</p>
                </div>
                <Matches />
                <span className="h-20 w-5/6 max-w-3xl bg-gray-200 md:h-28"></span>
                <Matches />
                {oldMatches &&
                    <>
                        <span className="h-20 w-5/6 max-w-3xl bg-gray-200 md:h-28"></span>
                        <Matches />
                    </>
                }
                <button className="px-20 py-5 bg-yellow-400 rounded-full text-lime-800/95 font-bold" onClick={() => setOldMatches(!oldMatches)}>{oldMatches ? 'Esconder' : 'Carregar'} mais antigos</button>
            </section>
        </main>
    )
}