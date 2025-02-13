export const HowWorks = () => {
    

    return (
        <main className="w-full h-full bg-white flex flex-col items-center py-32">
            <section className=' h-full max-w-screen-xl flex flex-col items-center px-4 py-8 gap-8 md:flex-row'>

                <div className="max-w-lg w-11/12 h-52 bg-yellow-400 md:h-80">
                    <img
                        className="w-full h-full object-cover object-center transition-all duration-300 -translate-x-4 -translate-y-4 hover:-translate-x-0 hover:-translate-y-0"
                        src="img/home/home1.jpeg"
                        alt="Imagem 1"
                    />
                </div>
                <div className='flex flex-col gap-4 items-center md:items-start md: max-w-xl'>
                    <img src="svg/pata.svg" alt="" />
                    <h3 className='font-extrabold text-2xl text-lime-800 text-center pl-2 md:text-left md:text-3xl'>Cadastre seu <span className='text-yellow-400'>animal</span></h3>
                    <p className='px-2 text-sm text-center text-gray-700 md:text-left md:text-2xl md:font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, erat et convallis gravida, nisl libero imperdiet dolor, et vestibulum tortor quam in nunc.</p>
                </div>
            </section>

            <img className='md:hidden' src="svg/Line.svg" alt="" />
            <img className='hidden md:block' src="svg/bigLine.svg" alt="" />

            <section className=' h-full max-w-screen-xl flex flex-col items-center px-4 py-8 gap-8 md:flex-row-reverse'>
                <div className="max-w-lg w-11/12 h-52 bg-yellow-400 md:h-80 md:w-96">
                    <img
                        className="w-full h-full object-cover object-center transition-all duration-300 -translate-x-4 -translate-y-4 hover:-translate-x-0 hover:-translate-y-0"
                        src="img/home/home2.jpeg"
                        alt="Imagem 2"
                    />
                </div>
                <div className='flex flex-col gap-4 items-center md:items-start md:max-w-xl'>
                    <img src="svg/Lupa.svg" alt="" />
                    <h3 className='font-extrabold text-2xl text-lime-800 text-center pl-2 md:text-left md:text-3xl'><span className='text-yellow-400'>Procure</span> pretendentes</h3>
                    <p className='px-2 text-sm text-center text-gray-700 md:text-left md:text-2xl md:font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, erat et convallis gravida, nisl libero imperdiet dolor, et vestibulum tortor quam in nunc.</p>
                </div>
            </section>

            <img className=' -scale-x-100 md:hidden' src="svg/Line.svg" alt="" />
            <img className='hidden -scale-x-100 md:block' src="svg/bigLine.svg" alt="" />

            <section className=' h-full max-w-screen-xl flex flex-col items-center px-4 py-8 gap-8 md:flex-row'>

                <div className="max-w-lg w-11/12 h-52 bg-yellow-400 md:h-80 md:w-96">
                    <img
                        className="w-full h-full object-cover object-center transition-all duration-300 -translate-x-4 -translate-y-4 hover:-translate-x-0 hover:-translate-y-0"
                        src="img/home/home3.jpeg"
                        alt="Imagem 3"
                    />
                </div>
                <div className='flex flex-col gap-4 items-center md:items-start md:max-w-xl'>
                    <img src="svg/calendar.svg" alt="" />
                    <h3 className='font-extrabold text-2xl text-lime-800 text-center pl-2 md:text-left md:text-3xl'>Marque um<span className='text-yellow-400'> encontro</span> </h3>
                    <p className='px-2 text-sm text-center text-gray-700 md:text-left md:text-2xl md:font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, erat et convallis gravida, nisl libero imperdiet dolor, et vestibulum tortor quam in nunc.</p>
                </div>
            </section>
        </main>
    )
}