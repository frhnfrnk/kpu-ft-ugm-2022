import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

function Tentang(){
    return(
        <div className="w-full md:mt-[15vh] md:h-[50vh] lg:h-[80vh] h-[30vh] bg-no-repeat bg-cover bg-center my-[10vh]"
        >
            <div className="flex justify-center">
                <h1 className="lg:hidden block flex text-center text-[#2A374A] font-Playfair-semibold text-[20px] md:text-[32px]">
                        Tentang Pemilu FT UGM 2022</h1>
            </div>
            
            {/* grid gap-5 grid-cols-2 grid-rows-1 */}
            <div className="w-[90%] mx-auto flex justify-center items-center lg:pt-[10vh] h-[auto] lg:my-0 md:my-[50px] my-[20px]">
                <Fade left>
                    <div className="w-[50%] md:w-[60%] flex justify-center">
                        <img src= "/imgKritik/logokpuft.png" className=" flex justify-center md:w-[80%] md:h-[75%] h-[50%]"/>
                    </div>
                </Fade>
                {/* pt-[8vh] */}
                <Fade right>
                    <div className="w-[50%] lg:w-[40%] flex flex-col justify-center md:items-start items-center whitespace-normal">
                        <h1 className="hidden md:hidden lg:block lg:w-[100%] md:flex md:text-left md:text-[#2A374A] font-Playfair-semibold md:text-3xl md:pb-[2vh]">
                            Tentang Pemilu FT UGM 2022</h1>
                        <p className="hidden lg:block break-words text-justify text-[#35455D] font-Lato md:text-lg text-[16px] pb-[2.5vh]">Pemilihan Umum Mahasiswa Fakultas Teknik Universitas Gadjah Mada (Pemilu) adalah sarana pelaksanaan kedaulatan mahasiswa berdasarkan Anggaran Dasar/Anggaran Rumah Tangga Keluarga Mahasiswa Fakultas Teknik Universitas Gadjah Mada.</p>
                        <p className="lg:hidden break-words text-left text-[#35455D] font-Lato md:text-lg text-[12px] lg:pr-[20vh] ">Pemilihan Umum Mahasiswa Fakultas Teknik Universitas Gadjah Mada (Pemilu) adalah sarana pelaksanaan kedaulatan mahasiswa berdasarkan...</p>
                        <Link to="/tentang"><button className={`hidden lg:block h-[auto] w-[auto] py-[8px] px-[30px] text-white font-bold font-Lato text-[20px] rounded-full mt-[20px] lg:mt-[0px] bg-gradient-to-r from-[#8A2D2D] to-[#6E2424] shadow-[0px_4px_5px_rgba(110,36,36,0.1),0px_4px_10px_rgba(55,18,18,0.25)] hover:bg-gradient-to-r hover:from-[#E1DAD1] hover:to-[#E1DAD1] hover:text-[#8A2D2D] hover:shadow-[0px_7px_20px_rgba(110,36,36,0.15),0px_10px_25px_1px_rgba(55,18,18,0.45)] transition-all active:bg-gradient-to-r active:from-[#BFB196] active:to-[#BFB196] active:shadow-[0px_7px_20px_rgba(110,36,36,0.15),0px_10px_25px_1px_rgba(55,18,18,0.45)] active:border-none`}>Selengkapnya</button></Link>
                    </div>
                </Fade>
            </div>

            <div className="flex justify-center ">
                <Link to="/tentang"><button className={`lg:hidden h-[auto] w-[auto] py-[4px] px-[24px] text-white font-bold font-Lato text-[16px] md:text-[20px] rounded-full lg:mt-[20px] bg-gradient-to-r from-[#8A2D2D] to-[#6E2424] shadow-[0px_4px_5px_rgba(110,36,36,0.1),0px_4px_10px_rgba(55,18,18,0.25)] hover:bg-gradient-to-r hover:from-[#E1DAD1] hover:to-[#E1DAD1] hover:text-[#8A2D2D] hover:shadow-[0px_7px_20px_rgba(110,36,36,0.15),0px_10px_25px_1px_rgba(55,18,18,0.45)] transition-all active:bg-gradient-to-r active:from-[#BFB196] active:to-[#BFB196] active:shadow-[0px_7px_20px_rgba(110,36,36,0.15),0px_10px_25px_1px_rgba(55,18,18,0.45)] active:border-none`}>Selengkapnya</button></Link>
            </div>

        </div>


    );
}

export default Tentang;