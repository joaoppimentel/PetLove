import {Link} from 'react-router-dom'

export const StartNow = () => {
    

    return (
        <div className="flex flex-col items-center gap-6 py-6 mt-20">
            <h4 className="font-semibold text-gray-500 text-lg">COMO FUNCIONA</h4>
            <h3 className="w-3/4 text-center text-2xl text-lime-800 font-black md:text-4xl md:w-1/3">Encontre um love para o seu animal sem sair de casa.</h3>
            <Link to='/date' className="bg-yellow-400 px-16 p-4 rounded-full text-lime-800 font-bold">Comece agora!</Link>
        </div>
    )
}