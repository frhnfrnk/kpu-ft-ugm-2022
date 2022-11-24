import { useContext } from "react";
import Back_kertas from "../../assets/Hero/Back_kertas.png";
import Hiasan_wow from "../../assets/Hero/Hiasan_wow.png";
import { StateContext } from "../Context/context";

export default function Hero() {

  const {isCompleted} = useContext(StateContext)

  return (
    <>
      {/*Hero Section Start*/}
        <div className="bg-[#E1DAD1] h-[100vh] w-[100%]">
          <div className="bg-cover bg-center w-full h-full bg-no-repeat flex justify-center" style={{ backgroundImage: "url(" + Back_kertas + ")" }}>
            <div className="w-[90%] h-full flex items-center mt-[-5vh]">
              <div className="w-[45%] flex flex-col lg:text-left justify-center lg:pl-[100px]">
                <div className="text-[#2A374A] font-Playfair-bold text-6xl lg:text-[95px]">
                  <h1 className="drop-shadow-[-8px_2px_10px_rgba(22,22,22,0.25)]">KPUFT</h1>
                  <h1 className="drop-shadow-[-8px_2px_10px_rgba(22,22,22,0.25)]">UGM <span className="text-5xl lg:text-[85px]">2022</span></h1>
                </div>
                <div className="className=text-[#2A374A] font-['Lato'] font-medium text-2xl">
                  <p>Pemilihan Umum</p>
                  <p>Ketua BEM KMFT UGM 2023</p>
                </div>    
                <p className="text-[#6E2424] font-['Lato'] text-sm font-bold text-base">29 November - 1 Desember 2022</p>    
                <div className="mt-4 space-x-4">
                  
                  {isCompleted ? <button href="#" className="bg-gradient-to-r from-[#8A2D2D] to-[#6E2424] text-[#FFFFFF] rounded-full px-4 py-2 font-semibold shadow-[0px_4px_10px_rgba(55,18,18,0.25)] hover:bg-gradient-to-r hover:from-[#E1DAD1] hover:to-[#E1DAD1] hover:text-[#8A2D2D] hover:shadow-[0px_7px_20px_rgba(110,36,36,0.15),0px_10px_25px_1px_rgba(55,18,18,0.45)] active:bg-gradient-to-r active:from-[#BFB196] active:to-[#BFB196] active:shadow-[0px_7px_20px_rgba(110,36,36,0.15),0px_10px_25px_1px_rgba(55,18,18,0.45)] active:border-none transition-all">Vote Sekarang!</button> : <button href="#" className="bg-gradient-to-r from-[#959595] to-[#959595] text-[#FFFFFF] rounded-full px-6 py-2 font-semibold shadow-[0px_4px_10px_rgba(55,18,18,0.25)] cursor-default">Vote Ditutup</button>}
                  <button href="#" className="border-[#A05252] hover:border-[#9D7E57] active:border-[#7E6546] border-2 rounded-full px-7 py-1.5 text-[#A05252] font-semibold "><span className="drop-shadow-[0px_7px_20px_rgba(110,36,36,0.15),0px_10px_25px_rgba(55,18,18,0.45)]">Lihat Calon</span></button>       
                </div>         
              </div>
              <div className="w-[55%]">
                <img src={Hiasan_wow} className="w-[100%]" alt="vote_image" />
              </div>
            </div>
          </div>  
        </div>
      {/*Hero Section End*/}
    </>
  );
}