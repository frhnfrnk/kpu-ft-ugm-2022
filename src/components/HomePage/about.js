import { Link } from "react-router-dom";
import aboutImg from "../../assets/Logo/aboutImg.png"
import Button from "../Button/button";

function Tentang(){
    return(
        <div className="w-full md:pt-[15vh] md:h-[80vh] h-[20vh] bg-no-repeat bg-cover bg-center mb-[10vh]"
        >
            <div className="flex justify-center">
                <h1 className="md:hidden flex text-center text-[#2A374A] font-Playfair-semibold  text-[20px]">
                        Tentang Pemilu FT UGM 2022</h1>
            </div>
            
            {/* grid gap-5 grid-cols-2 grid-rows-1 */}
            <div className="w-[90%] mx-auto flex justify-center items-center md:pt-[10vh] h-[auto] my-0 my-[20px]">
                <div className="w-[50%] md:w-[60%] flex justify-center">
                    <img src= "/imgKritik/logokpuft.png" className=" flex justify-center md:w-[80%] md:h-[75%] h-[50%]"/>
                </div>
                {/* pt-[8vh] */}
                <div className="w-[50%] md:w-[40%] flex flex-col justify-center md:items-start items-center whitespace-normal">
                    <h1 className="hidden md:block md:w-[100%] md:flex md:text-left md:text-[#2A374A] font-Playfair-semibold md:text-3xl md:pb-[2vh]">
                        Tentang Pemilu FT UGM 2022</h1>
                    <p className="hidden lg:block break-words text-justify text-[#35455D] font-Lato md:text-lg text-[16px] pb-[2.5vh]">Pemilihan Umum Mahasiswa Fakultas Teknik Universitas Gadjah Mada (Pemilu) adalah sarana pelaksanaan kedaulatan mahasiswa berdasarkan Anggaran Dasar/Anggaran Rumah Tangga Keluarga Mahasiswa Fakultas Teknik Universitas Gadjah Mada.</p>
                    <p className="md:hidden break-words text-left text-[#35455D] font-Lato md:text-lg text-[12px] md:pr-[20vh] ">Pemilihan Umum Mahasiswa Fakultas Teknik Universitas Gadjah Mada (Pemilu) adalah sarana pelaksanaan kedaulatan mahasiswa berdasarkan...</p>
                    <Link to="/tentang"><button className={`hidden md:block h-[auto] w-[auto] py-[8px] px-[30px] text-white font-bold font-Lato text-[20px] rounded-full mt-[20px] lg:mt-[0px] bg-gradient-to-r from-[#8A2D2D] to-[#6E2424] shadow-[0px_4px_5px_rgba(110,36,36,0.1),0px_4px_10px_rgba(55,18,18,0.25)] hover:bg-gradient-to-r hover:from-[#E1DAD1] hover:to-[#E1DAD1] hover:text-[#8A2D2D] hover:shadow-[0px_7px_20px_rgba(110,36,36,0.15),0px_10px_25px_1px_rgba(55,18,18,0.45)] transition-all active:bg-gradient-to-r active:from-[#BFB196] active:to-[#BFB196] active:shadow-[0px_7px_20px_rgba(110,36,36,0.15),0px_10px_25px_1px_rgba(55,18,18,0.45)] active:border-none`}>Selengkapnya</button></Link>
                </div>
            </div>

            <div className="flex justify-center ">
                <Link to="/tentang"><button className={`md:hidden h-[auto] w-[auto] py-[4px] px-[24px] text-white font-bold font-Lato text-[16px] md:text-[20px] rounded-full lg:mt-[20px] bg-gradient-to-r from-[#8A2D2D] to-[#6E2424] shadow-[0px_4px_5px_rgba(110,36,36,0.1),0px_4px_10px_rgba(55,18,18,0.25)] hover:bg-gradient-to-r hover:from-[#E1DAD1] hover:to-[#E1DAD1] hover:text-[#8A2D2D] hover:shadow-[0px_7px_20px_rgba(110,36,36,0.15),0px_10px_25px_1px_rgba(55,18,18,0.45)] transition-all active:bg-gradient-to-r active:from-[#BFB196] active:to-[#BFB196] active:shadow-[0px_7px_20px_rgba(110,36,36,0.15),0px_10px_25px_1px_rgba(55,18,18,0.45)] active:border-none`}>Selengkapnya</button></Link>
            </div>

        </div>


    );
}

export default Tentang;