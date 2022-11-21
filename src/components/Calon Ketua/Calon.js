import Backbaru from "../../assets/TentangKPU/Backbaru.png";
import Hiasan_choose from "../../assets/Calon/Hiasan_choose.png";
import Group_71 from "../../assets/Calon/Group 71.png";
import Group_73 from "../../assets/Calon/Group 71.png";
import Frame_Calon from "../../assets/Calon/Frame_Calon.png";
import Frame_Calon2 from "../../assets/Calon/Frame_Calon2.png";

export default function Calon() {
  return (
    <>
      {/*Calon Section Start*/}
        <div className="bg-[#E1DAD1] h-full">
          <div className="bg-cover bg-center w-full h-screen bg-no-repeat" style={{ backgroundImage: "url(" + Backbaru + ")" }}>          
            <div className="text-center pt-16 text-[#2A374A] mx-auto">
              <h1 className="font-['Playfair'] text-4xl font-bold">Calon Ketua</h1>
              <p className="font-['Lato'] text-2xl">BEM KMFT UGM 2023</p>
            </div>
            <div className="grid lg:grid-cols-12 lg:px-[170px] justify-center">
              <div className="flex flex-col lg:col-span-4 lg:col-start-2"> 
                <img src={Frame_Calon2} alt="calon_2"/>
                <h1 className="">Hilmi Naufal Zulfani</h1>
              </div> 
              <div className="lg:col-span-4 lg:col-start-8"> 
                <img src={Frame_Calon} alt="calon_1"/>
                <h1 className="lg:col-span-4 lg:col-start-8">Ariel Excelsio T.S</h1>
              </div>            
            </div>
            <div className="mt-16 mx-auto">
              <button href="#" className="bg-gradient-to-r from-[#8A2D2D] to-[#6E2424] text-[#FFFFFF] rounded-full px-4 py-2 font-semibold">Vote Sekarang!</button>
            </div>  
          </div>  
          <div className="h-screen">
            <img src={Hiasan_choose} alt="hiasan" className=""/>
          </div>          
        </div>     
      {/*Calon Section End*/}  
    </>
  );
}