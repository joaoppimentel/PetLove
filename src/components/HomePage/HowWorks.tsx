import Pata from '../../assets/svg/pata.svg'
import Lupa from '../../assets/svg/Lupa.svg'
import Calendar from '../../assets/svg/calendar.svg'
import Line from '../../assets/svg/Line.svg'
import bigLine from '../../assets/svg/bigLine.svg'

export const HowWorks = () => {
    

    return (
        <main className="w-full h-full bg-white flex flex-col items-center py-32">
            <section className=' h-full max-w-screen-xl flex flex-col items-center px-4 py-8 gap-8 md:flex-row'>

                <div className="max-w-lg w-11/12 h-52 bg-yellow-400 md:h-80">
                    <img
                        className="w-full h-full object-cover object-center transition-all duration-300 -translate-x-4 -translate-y-4 hover:-translate-x-0 hover:-translate-y-0"
                        src="https://s3-alpha-sig.figma.com/img/860b/1e1f/daec5a1c3c824db91b809673297cfa58?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=blkhcMA-E3495hwS20aa3memWOncfq2U2lCIXFtsvnWGC5QkyLLfp3XJ2EFcr1ePb0LkRuKJRIXNV4nPfoEMgebch9~9nPioqZ4Btz-aTeQTUVqhOVxZNQX0hodrXGDbdqeuOH3xDhKIOKWYIkG0zR~SKLiVJ-5vIU~UkhK7EqHPG2G3p47wZLd7ffadoayDgfpyY4gkUztzaVABnYkLWHwTFf1a2dnZVhGTU4MH78lD8ADnoec1xTh9zj8fL6lv7Z0K98tGnMTVb~4QaH37WImOGVg9qeZqpqBn~UzdhE1hJb39kzJSEGDcRm3EGykeakmWy9S-bTtwTosiBsxwJg__"
                        alt="Imagem 1"
                    />
                </div>
                <div className='flex flex-col gap-4 items-center md:items-start md: max-w-xl'>
                    <img src={Pata} alt="" />
                    <h3 className='font-extrabold text-2xl text-lime-800 text-center pl-2 md:text-left md:text-3xl'>Cadastre seu <span className='text-yellow-400'>animal</span></h3>
                    <p className='px-2 text-sm text-center text-gray-700 md:text-left md:text-2xl md:font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, erat et convallis gravida, nisl libero imperdiet dolor, et vestibulum tortor quam in nunc.</p>
                </div>
            </section>

            <img className='md:hidden' src={Line} alt="" />
            <img className='hidden md:block' src={bigLine} alt="" />

            <section className=' h-full max-w-screen-xl flex flex-col items-center px-4 py-8 gap-8 md:flex-row-reverse'>
                <div className="max-w-lg w-11/12 h-52 bg-yellow-400 md:h-80 md:w-96">
                    <img
                        className="w-full h-full object-cover object-center transition-all duration-300 -translate-x-4 -translate-y-4 hover:-translate-x-0 hover:-translate-y-0"
                        src="https://s3-alpha-sig.figma.com/img/f732/c803/752267f59302aaae7f3eac9ec7d101f2?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dSenmRZ3ju31DYyKmDYKiCZFBxJH1rRiYO5hHvTs9mx3473DgV1NZ3YKd7-sizqvRwoKXJIYKtv36vPTkv6emzoE1zDaT3DkZh~-aZ4xnFjasmcUrbKTAYWhfMN8m~bmXHJ9jddu~uWk86vEea-O-qyc-TWHtOlRdf0bTgsgXiHLaaXP-IZL7Weh6PFrbgwNyktv6LY2pS5NBM~Zk~arB3eWrdW8gt-pycG80F69vEWwjMlZoJdbX8GfVwOqLv3~mXVko1e24i0Fg~q3daHjXOk-rcbb4qA2dUfrj-rrDK4FY0JbcjvP63ZZ6dRKFPG6OcRQ2ifmcrYzECDin399fw__"
                        alt="Imagem 2"
                    />
                </div>
                <div className='flex flex-col gap-4 items-center md:items-start md:max-w-xl'>
                    <img src={Lupa} alt="" />
                    <h3 className='font-extrabold text-2xl text-lime-800 text-center pl-2 md:text-left md:text-3xl'><span className='text-yellow-400'>Procure</span> pretendentes</h3>
                    <p className='px-2 text-sm text-center text-gray-700 md:text-left md:text-2xl md:font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, erat et convallis gravida, nisl libero imperdiet dolor, et vestibulum tortor quam in nunc.</p>
                </div>
            </section>

            <img className=' -scale-x-100 md:hidden' src={Line} alt="" />
            <img className='hidden -scale-x-100 md:block' src={bigLine} alt="" />

            <section className=' h-full max-w-screen-xl flex flex-col items-center px-4 py-8 gap-8 md:flex-row'>

                <div className="max-w-lg w-11/12 h-52 bg-yellow-400 md:h-80 md:w-96">
                    <img
                        className="w-full h-full object-cover object-center transition-all duration-300 -translate-x-4 -translate-y-4 hover:-translate-x-0 hover:-translate-y-0"
                        src="https://s3-alpha-sig.figma.com/img/56b1/ff9c/675a447f831300b853e63a7522c6f02e?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QKeK8nJCsLpkABjPnK1VeFIoqdaxCca-hMxB0ZxHFHJZNnmd82gOd01utw7zJAkRsm8sE7bjtjw71Nt3e92cjy7Uebc4PPjMFJYDfJig0RojIqR~zGg73VbzUew6JIKgDm3jlAwYVrKPco2Vi8nCI4XG1niJuDttd-lYozjWuqQgo4m5ocfNrmXQbr09WGznIYowiTHYJzRt6nq97SQwCJwJfDVUDpbuez1OSUgxKueMIeE7wCF-I2Vr~lQJPnH9tXcl1virHiLMIvt~kl-9wcLFsaoWRFcDjvZUeY~Tyl6xcVcvLQ1M3uJ15ZvG9lXwwHZwjEj8kxDrkrv64wKhnQ__"
                        alt="Imagem 3"
                    />
                </div>
                <div className='flex flex-col gap-4 items-center md:items-start md:max-w-xl'>
                    <img src={Calendar} alt="" />
                    <h3 className='font-extrabold text-2xl text-lime-800 text-center pl-2 md:text-left md:text-3xl'>Marque um<span className='text-yellow-400'> encontro</span> </h3>
                    <p className='px-2 text-sm text-center text-gray-700 md:text-left md:text-2xl md:font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, erat et convallis gravida, nisl libero imperdiet dolor, et vestibulum tortor quam in nunc.</p>
                </div>
            </section>
        </main>
    )
}