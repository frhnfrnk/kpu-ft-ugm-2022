import Back_kertas from "../../assets/Hero/Back_kertas.png";
import Hiasan_wow from "../../assets/Hero/Hiasan_wow.png";

export default function Hero() {
  return (
    <>
      {/*Hero Section Start*/}
        <div className="bg-[#E1DAD1] lg:h-screen h-full">
          <div className="bg-cover bg-center w-full h-full lg:h-screen bg-no-repeat" style={{ backgroundImage: "url(" + Back_kertas + ")" }}>
            <div className="grid lg:grid-cols-12 lg:pl-[170px]">
              <div className="flex flex-col lg:col-span-5 lg:col-start-1 lg:pt-40 pt-28 gap-2 lg:text-left text-center lg:mx-0 mx-auto">
                <div className="text-[#2A374A] font-['Playfair'] font-bold text-6xl lg:text-7xl">
                  <h1 className="drop-shadow-[-8px_2px_10px_rgba(22,22,22,0.5)]">KPUFT</h1>
                  <h1 className="drop-shadow-[-8px_2px_10px_rgba(22,22,22,0.5)]">UGM <span className="text-5xl lg:text-6xl">2022</span></h1>
                </div>
                <div className="className=text-[#2A374A] font-['Lato'] font-medium text-2xl">
                  <p>Pemilihan Umum</p>
                  <p>Ketua BEM KMFT UGM 2023</p>
                </div>    
                <p className="text-[#6E2424] font-['Lato'] text-sm font-bold text-base">29 November - 1 Desember 2022</p>    
                <div className="mt-4 space-x-4">
                  <button href="#" className="bg-gradient-to-r from-[#8A2D2D] to-[#6E2424] text-[#FFFFFF] rounded-full px-4 py-2 font-semibold">Vote Sekarang!</button>
                  <button href="#" className="border-[#A05252] border-2 rounded-full px-7 py-1.5 text-[#A05252] font-semibold">Lihat Calon</button>       
                </div>         
              </div>
              <div className="lg:col-span-7 lg:col-start-6 lg:pt-28 pt-16 pb-36 lg:pr-[95px] md:mx-auto mx-12 lg:mx-0">
                <img src={Hiasan_wow} className="" alt="vote_image" />
              </div>
            </div>
          </div>  
        </div>
      {/*Hero Section End*/}
    </>
  );
}