export const Loading = () => {

    return (
        <div className="size-full absolute bg-black/35 flex flex-col gap-20 md:gap-44 justify-center items-center transition-all">
            <img className='w-4/5 max-w-xl' src="svg/completeLogo.svg" alt="" />
            <div className="relative flex justify-center items-center">
                <span className="absolute animate-spin rounded-full size-52 border-t-4 border-b-4 border-t-yellow-400 border-b-lime-700"/>
                <img src="svg/logo.svg" className="size-42"/>
            </div>
        </div>
    )
}