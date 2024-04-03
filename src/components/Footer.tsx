import { RiFacebookBoxFill, RiInstagramFill, RiYoutubeFill, RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { MdOutlineFileCopy } from "react-icons/md";
import clickWeb from '../assets/svg/clickWeb.svg'
import completeLogo from '../assets/svg/completeLogo.svg'

export const Footer = () => {

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <footer className="w-full h-1/2 py-14 px-4 bg-lime-900/85 flex flex-col items-center md:flex-row md:justify-between md:h-3/4 md:px-12">
                <div className="h-full w-1/2 flex-col gap-12 hidden md:flex">
                    <img className="w-1/2" src={completeLogo} alt="" />
                    <div className="flex gap-4">
                        <nav className="w-2/3 flex flex-wrap">
                            <a href="#" className="w-1/2 text-white font-semibold text-lg py-2 transition-all hover:text-yellow-400">Sobre nós</a>
                            <a href="#" className="w-1/2 text-white font-semibold text-lg py-2 transition-all hover:text-yellow-400">Pets namorando</a>
                            <a href="#" className="w-1/2 text-white font-semibold text-lg py-2 transition-all hover:text-yellow-400">Como funciona</a>
                            <a href="#" className="w-1/2 text-white font-semibold text-lg py-2 transition-all hover:text-yellow-400">Comece agora!</a>
                            <a href="#" className="w-1/2 text-white font-semibold text-lg py-2 transition-all hover:text-yellow-400">Dúvidas frequentes</a>
                            <a href="#" className="w-1/2 text-white font-semibold text-lg py-2 transition-all hover:text-yellow-400">Contato</a>
                            <a href="#" className="w-1/2 text-white font-semibold text-lg py-2 transition-all hover:text-yellow-400">Blog</a>
                        </nav>
                        <div className="w-1/3 flex flex-col gap-2">
                            <h4 className="font-bold text-lg text-yellow-400">Ajude uma entidade</h4>
                            <div className="text-white">
                                <p className="flex items-center ">SOS Vida Animal <RiArrowDownSLine color="white" /></p>
                                <p>Banco Itaú: Ag <strong>8804</strong> conta <strong>01234-5</strong></p>
                                <p className="flex items-center ">PIX: <strong>43.660.696/0001-95 </strong> <MdOutlineFileCopy /></p>
                            </div>
                        </div>
                    </div>
                    <ul className="flex gap-4 items-center">
                        <li><a href="#" className=" text-white font-light text-sm transition-all hover:text-yellow-400">Política de privacidade</a></li>
                        <span className="size-0.5 rounded-full bg-white"></span>
                        <li><a href="#" className=" text-white font-light text-sm transition-all hover:text-yellow-400">Termos de uso</a></li>
                        <span className="size-0.5 rounded-full bg-white"></span>
                        <li><a href="#" className=" text-white font-light text-sm transition-all hover:text-yellow-400">Política de Cookies</a></li>
                        <span className="size-0.5 rounded-full bg-white"></span>
                        <li><a href="#" className=" text-white font-light text-sm transition-all hover:text-yellow-400">Política de cancelamento</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5 items-center md:w-1/4">
                    <h3 className="text-slate-50 font-bold text-xl text-center">Receba nossas novidades</h3>
                    <div className="min-w-64 flex p-2 pl-4 rounded-full bg-white justify-between">
                        <input
                            className="w-2/3 placeholder:text-lime-700 placeholder:font-semibold placeholder:text-sm"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Digite seu e-mail"
                        />
                        <button className="bg-yellow-400 p-2 px-4 text-white font-semibold rounded-full">Cadastrar</button>
                    </div>
                    <nav className="w-full flex justify-around">
                        <a className="p-6 bg-lime-800/75 rounded-full transition-all hover:scale-110" href="https://www.facebook.com/"><RiFacebookBoxFill color="white" size={25} /></a>
                        <a className="p-6 bg-lime-800/75 rounded-full transition-all hover:scale-110" href="https://www.instagram.com/"><RiInstagramFill color="white" size={25} /></a>
                        <a className="p-6 bg-lime-800/75 rounded-full transition-all hover:scale-110" href="https://www.youtube.com/"><RiYoutubeFill color="white" size={25} /></a>
                    </nav>
                    <p className="text-center text-xs font-semibold text-white md:hidden">
                        Pett Love - Relacionamento
                        <br />
                        CNPJ: 43.660.696/0001-95
                    </p>
                    <img className="md:hidden" src={clickWeb} alt="" />
                </div>
            </footer>
            <button className="w-full h-24 bg-lime-900/95 px-10 flex justify-center md:justify-between items-center" onClick={goTop}>
                <p className="text-xs font-semibold text-white hidden md:flex">
                    Pett Love - Relacionamento | CNPJ: 43.660.696/0001-95
                </p>
                <div className=" md:-translate-x-36">
                    <RiArrowUpSLine color="white" size={70} />
                </div>
                <img className="hidden md:block" src={clickWeb} alt="" />
            </button>

        </>
    )
}