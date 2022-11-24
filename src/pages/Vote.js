import Backbaru2 from "../assets/Calon/backbaru2.png";
import Hiasan_choose from "../assets/Calon/Hiasan_choose.png";
import Frame_Calon from "../assets/Calon/Frame_Calon.png";
import Frame_Calon2 from "../assets/Calon/Frame_Calon2.png";
import lineFooter from "../assets/decoration/line_bottom.png";
import { useState } from "react";
import { useContext } from "react";
import { StateContext } from "../components/Context/context";
import Button from "../components/Button/button";

export default function Vote() {

  const [isOpen, setIsOpen] = useState(false);
  const [calon, setCalon] = useState("");
  const handleClick = async (event) =>{
    setCalon(event.currentTarget.id);
    setIsOpen(true);
  }

  return (
    <>
      {/*Calon Section Start*/}
        <div className="bg-[#E1DAD1] h-full">
          <div className="bg-cover bg-center w-full h-[120vh] bg-no-repeat flex flex-col content-center " style={{ backgroundImage: "url(" + Backbaru2 + ")" }}>          
            <div className="text-center mt-[16vh] h-auto text-[#2A374A] mx-auto">
              <p className="font-Lato text-[12px] md:text-[20px]" >Anda masuk sebagai raflyzaki2902@mail.ugm.ac.id</p>
              <h1 className="font-Playfair-bold text-[28px] md:text-[50px]">CALON KETUA BEM KMFT UGM 2023</h1>
              <p className="font-Lato text-[18px] md:text-[20px]">Klik Calon Ketua Pilihanmu!</p>
            </div>
            <div  className="card flex flex-col lg:flex-row justify-center items-center lg:justify-around w-[60%] h-[60%] lg:h-[40%] mx-auto mt-[10vmin] lg:mt-[6vmin] mb-[8rem] lg:mb-0"  >
              <div id="Calon Ketua No Urut 0" className="w-full lg:w-1/2 flex flex-col justify-center items-center cursor-pointer group transition-all  lg:pr-[5%]" onClick={handleClick}> 
                  <img src={Frame_Calon2} className="w-full md:w-[85%]" alt="calon_2"/>
                  <div className="transition-all text-center w-[80%] md:w-[320px] mt-[-4.6rem] md:mt-[-8.3rem] lg:mt-0 bg-[rgba(138,45,45,0.85)] py-[8px] md:py-[12px] block text-[#E8E4E3] text-[14px] md:text-[25px] rounded-[8px] lg:rounded-[20px] font-Playfair-semibold mx-auto lg:-translate-y-[7.3rem] group-hover:bg-[#E1DAD1] group-hover:text-[#8A2D2D]">
                    <h1 className="">Hilmi Naufal Zulfani</h1>
                  </div>
              </div>
              <div id="Calon Ketua No Urut 1" className="card w-full lg:w-1/2 flex flex-col justify-center items-center cursor-pointer group transition-all  lg:pl-[5%]" onClick={handleClick}> 
                <img src={Frame_Calon}  className="w-full md:w-[85%]" alt="calon_1"/>
                <div className="transition-all text-center w-[80%] md:w-[320px] mt-[-4.6rem] md:mt-[-8.3rem] lg:mt-0 bg-[rgba(138,45,45,0.85)] py-[8px] md:py-[12px] block text-[#E8E4E3] text-[14px] md:text-[25px] rounded-[8px] lg:rounded-[20px] font-Playfair-semibold mx-auto lg:-translate-y-[7.3rem] group-hover:bg-[#E1DAD1] group-hover:text-[#8A2D2D]">
                  <h1 className="">Ariel Excelsio T.S</h1>
                </div>
              </div>  
            </div>
          </div>  
          <div className="h-[80vh] flex justify-center items-center mb-[10vh]">
            <img src={Hiasan_choose} alt="hiasan" className=""/>
          </div>
          <img src={lineFooter} alt="line" className="w-full h-auto"/>
        </div>

        {isOpen === true ? 
        <div className="fixed w-[90%] md:w-[76%] rounded-[12px] lg:rounded-[20px] top-[20vh] left-[50%] -ml-[45%] md:-ml-[38%] h-[50vh] md:h-[60vh] bg-[#35455D] flex justify-center items-center">
            <div className="w-[97%] h-[97%] lg:h-[90%] border-[3px] rounded-[15px] lg:rounded-[40px] flex flex-col justify-center items-center mx-auto">
                <h3 className="text-[#E1DAD1] text-[18px] md:text-[30px] font-Lato font-bold text-center w-[70%]">Apakah Anda yakin Memilih <span className="lg:text-[30px] text-[16px] text-[#9D7E57]">{calon}</span> ?</h3>
                <p className="w-[50%] lg:w-full my-[10px] text-center font-Lato text-[12px] lg:text-[18px] text-[#E1DAD1]">Pilihan anda akan disimpan dan TIDAK dapat diganti lagi</p>
                <div className="flex w-[90%] md:w-1/2 justify-center items-center text-[20px] font-Lato">
                    <div className="w-1/2 flex justify-center">
                        <button onClick={() => {setIsOpen(false)}} className="h-[auto] w-[auto] py-[8px] px-[30px] text-white font-bold font-Lato text-[14px] lg:text-[20px] rounded-full mt-[40px] lg:mt-[20px] bg-gradient-to-r from-[#959595] to-[#959595] shadow-[0px_4px_5px_rgba(110,36,36,0.1),0px_4px_10px_rgba(55,18,18,0.25)] hover:bg-gradient-to-r hover:from-[#E1DAD1] hover:to-[#E1DAD1] hover:text-[#8A2D2D] hover:shadow-[0px_7px_20px_rgba(110,36,36,0.15),0px_10px_25px_1px_rgba(55,18,18,0.45)] transition-all active:bg-gradient-to-r active:from-[#BFB196] active:to-[#BFB196] active:text-[#3F3223] active:shadow-[0px_7px_20px_rgba(110,36,36,0.15),0px_10px_25px_1px_rgba(55,18,18,0.45)] active:border-none">Tidak, kembali</button>
                    </div>
                    <div className="w-1/2 flex justify-center">
                        <button className="h-[auto] w-[auto] py-[8px] px-[30px] text-white font-bold font-Lato text-[14px] lg:text-[20px] rounded-full mt-[40px] lg:mt-[20px] bg-gradient-to-r from-[#8A2D2D] to-[#6E2424] shadow-[0px_4px_5px_rgba(110,36,36,0.1),0px_4px_10px_rgba(55,18,18,0.25)] hover:bg-gradient-to-r hover:from-[#E1DAD1] hover:to-[#E1DAD1] hover:text-[#8A2D2D] hover:shadow-[0px_7px_20px_rgba(110,36,36,0.15),0px_10px_25px_1px_rgba(55,18,18,0.45)] transition-all active:bg-gradient-to-r active:from-[#BFB196] active:to-[#BFB196] active:shadow-[0px_7px_20px_rgba(110,36,36,0.15),0px_10px_25px_1px_rgba(55,18,18,0.45)] active:border-none">Ya, Pilih</button>
                    </div>
                </div>
            </div>

            <div className="hidden md:block close-btn absolute top-0 right-0 md:mt-[50px] md:mr-[50px]" onClick={() => {setIsOpen(false)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#E8E4E3" stroke="#E8E4E3" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x cursor-pointer hover:text-white">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </div>

            <div className="block md:hidden close-btn absolute top-0 right-0 mt-[20px] mr-[20px]" onClick={() => {setIsOpen(false)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#E8E4E3" stroke="#E8E4E3" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x cursor-pointer hover:text-white">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </div>
        </div>
        : null}

      {/*Calon Section End*/}  
    </>
  );
}