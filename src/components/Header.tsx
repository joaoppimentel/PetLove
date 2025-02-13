import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom'

export const Header = () => {
    return (

        <>
            <header className="max-h-32 w-full flex justify-between p-6 md:bg-white z-50">
                <label className='size-14 bg-white border-4 border-lime-700 rounded-full flex items-center justify-evenly md:w-32 md:h-12 md:px-4'
                    htmlFor="menu">
                    <div className='flex flex-col gap-1'>
                        <i className='h-1 w-5 bg-lime-700'></i>
                        <i className='h-1 w-4 bg-lime-700'></i>
                    </div>
                    <input className='hidden' type="checkbox" name="menu" id="menu" />
                    <span className="hidden font-bold text-lime-700 md:block">Menu</span>
                </label>
                <Link to="/"><img className='relative md:scale-150 md: translate-y-3 z-50' src="svg/logo.svg" alt="Pett Love" /></Link>
                <label className='size-14 bg-lime-700 rounded-full flex items-center justify-evenly md:w-32 md:h-12 md:px-4' htmlFor="enter">
                    <FaRegUser color='white' size={32} />
                    <input className='hidden' type="checkbox" name="enter" id="enter" />
                    <span className="hidden font-bold text-white md:block">Entrar</span>
                </label>
            </header>
        </>
    )
}