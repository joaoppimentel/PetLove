import fullLogo from '../assets/svg/completeLogo.svg'
import Logo from '../assets/svg/logo.svg'

export const Loading = () => {

    return (
        <div className="size-full absolute bg-black/35 flex flex-col gap-20 md:gap-44 justify-center items-center transition-all">
            <img className='w-4/5 max-w-xl' src={fullLogo} alt="" />
            <div className="relative flex justify-center items-center">
                <span className="absolute animate-spin rounded-full size-52 border-t-4 border-b-4 border-t-yellow-400 border-b-lime-700"/>
                <img src={Logo} className="size-42"/>
            </div>
        </div>
    )
}