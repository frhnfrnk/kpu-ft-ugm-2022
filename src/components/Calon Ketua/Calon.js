import Backbaru from "../../assets/Calon/Backbaru.png";
import inner1 from "../../assets/Calon/inner1.png";
import inner2 from "../../assets/Calon/inner2.png";
import overlay from "../../assets/Calon/overlay.png";
import Hiasan_choose from "../../assets/Calon/Hiasan_choose.png";
import Group_71 from "../../assets/Calon/Group 71.png";
import Group_73 from "../../assets/Calon/Group 71.png";
import Frame_Calon from "../../assets/Calon/Frame_Calon.png";
import Frame_Calon2 from "../../assets/Calon/Frame_Calon2.png";
import { useState } from "react";

export default function Calon() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/*Calon Section Start*/}
        <div className="bg-[#E1DAD1] h-full">
          <div className="bg-cover bg-center w-full h-[100vh] bg-no-repeat flex flex-col content-center " style={{ backgroundImage: "url(" + Backbaru + ")" }}>          
            <div className="text-center pt-[15vh] text-[#2A374A] mx-auto">
              <h1 className="font-['Playfair'] text-4xl font-bold">Calon Ketua</h1>
              <p className="font-['Lato'] text-2xl">BEM KMFT UGM 2023</p>
            </div>
            <div className="grid lg:grid-cols-12 lg:px-[170px] justify-center">
              <div className="flex flex-col lg:col-span-4 lg:col-start-2 cursor-pointer hover:scale-110 transition-all" onClick={() => {setIsOpen(true)}}> 
                <img src={Frame_Calon2} alt="calon_2" className="hover:mb-[50px] transition-all"/>
                <div className="transition-all lg:col-span-4 lg:col-start-8 text-center w-[320px] mx-auto bg-[rgba(138,45,45,0.85)] py-[12px] block text-[#E8E4E3] text-[25px] rounded-[20px] font-Playfair-semibold -translate-y-[7.6rem] ">
                  <h1 className="">Hilmi Naufal Zulfani</h1>
                </div>
              </div> 
              <div className="flex flex-col lg:col-span-4 lg:col-start-8 cursor-pointer hover:scale-110 transition-all" onClick={() => {setIsOpen(true)}}> 
                <img src={Frame_Calon} alt="calon_1" className="hover:mb-[50px] transition-all"/>
                <div className="transition-all lg:col-span-4 lg:col-start-8 text-center w-[320px] mx-auto bg-[rgba(138,45,45,0.85)] py-[12px] block text-[#E8E4E3] text-[25px] rounded-[20px] font-Playfair-semibold -translate-y-[7.6rem] ">
                  <h1 className="">Ariel Excelsio T.S</h1>
                </div>
              </div>            
            </div>
            <div className="mt-16 flex justify-center mx-auto">
              <button href="#" className="bg-gradient-to-r from-[#8A2D2D] to-[#6E2424] text-[#FFFFFF] rounded-full px-4 py-2 font-semibold">Vote Sekarang!</button>
            </div>  
          </div>  
          <div className="h-screen">
            <img src={Hiasan_choose} alt="hiasan" className=""/>
          </div>          
        </div>

        { isOpen ? (
          <div className="popup calon1 w-[1140px] h-[1773px] absolute top-[15vh] left-[50%] -ml-[40vw] mx-auto bg-[#D8CBBC] bg-center bg-no-repeat bg-cover flex justify-center items-center rounded-[40px]" style={{ backgroundImage: "url(" + overlay + ")" }}>
          <div className="popup-inner w-[1080px] h-[1753px] flex justify-center items-center bg-center bg-no-repeat bg-contain" style={{ backgroundImage: "url(" + inner1 + ")" }}>
            <div className="popup-inner2 w-[1018px] h-[1653px] flex justify-center items-center bg-center bg-no-repeat bg-contain" style={{ backgroundImage: "url(" + inner2 + ")" }}>
              {/* Make a close btn */}
              <div className="close-btn absolute top-0 right-0 mt-[100px] mr-[100px]" onClick={() => {setIsOpen(false)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x cursor-pointer hover:text-white">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
              
            </div>
          </div>
        </div>  
        ) : null }}  
      {/*Calon Section End*/}  
    </>
  );
}