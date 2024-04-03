import { useState, useEffect } from 'react'
import { matchesList } from '../../matchesList';
import Hearth from '../../assets/svg/hearth.svg'

export const Matches = () => {

    const [itemsToShow, setItemsToShow] = useState(0);

    useEffect(() => {
        function handleResize() {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1280) {
                setItemsToShow(6); // Tela de PC
            } else if (screenWidth >= 768) {
                setItemsToShow(4); // Tablet
            } else {
                setItemsToShow(2); // Celular
            }
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className='grid xl:grid-cols-3 md:grid-cols-2 justify-center'>
            {matchesList.slice(0, itemsToShow).map((item, index) => (
                <div key={index} className='flex flex-col items-center py-8 gap-4'>
                    <div className='relative flex gap-4 w-full px-2'>
                        <img className=' size-44 object-cover rounded-full' src={item.maleImage} alt={item.maleName} />
                        <img className='absolute size-14 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 animate-pulse' src={Hearth} alt="" />
                        <img className='size-44 object-cover rounded-full' src={item.femaleImage} alt={item.femaleName} />
                    </div>

                    <p className='text-lg text-lime-800 font-bold'>{item.maleName} e {item.femaleName}</p>
                </div>
            ))}

        </section>
    );
}