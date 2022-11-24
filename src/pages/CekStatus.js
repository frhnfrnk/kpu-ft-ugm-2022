import BackCekStatus from "../assets/CekStatus/BackCekStatus.png";
import Hiasan_choose from "../assets/Calon/Hiasan_choose.png";

function CekStatus() {
  return (
    <>
      <div className="bg-[#E1DAD1] h-[100vh] w-[100%]">
        <div className="bg-cover bg-center w-full h-full bg-no-repeat flex items-center justify-center" style={{ backgroundImage: "url(" + BackCekStatus + ")" }}>
          <div className="flex flex-col text-center space-y-3">
            <h1 className="text-[#2A374A] font-Playfair-bold text-4xl lg:text-5xl">Cek Status</h1>
            <p className="text-[#2A374A] font-Lato text-xl lg:text-2xl">Daftar Pemilihan Sementara</p>
            <div className="flex justify-center space-x-4 pt-4">
              <label>
                <input className="placeholder:text-[#9D7E57] pr-12 pl-3 rounded-3xl bg-[#E8E4E3] border-2 border-solid border-[#9D7E57] py-1.5 hover:placeholder:text-[#8A2D2D] hover:border-[#8A2D2D] focus:placeholder:text-[#35455D] focus:border-[#35455D] drop-shadow-[0px_4px_5px_rgba(110,36,36,0.1)] hover:drop-shadow-[0px_7px_20px_rgba(110,36,36,0.15)] focus:hover:drop-shadow-[0px_7px_20px_rgba(110,36,36,0.15)]" placeholder="Ketik NIM Anda..." type="text" name="NIM"/>
              </label>
              <button href="#" className="bg-gradient-to-r from-[#8A2D2D] to-[#6E2424] hover:bg-[#E1DAD1] active:bg-[#BFB196] rounded-3xl py-[6px] text-[#FFFFFF] hover:text-[#8A2D2D] active:text-[#8A2D2D] px-7 drop-shadow-[0px_4px_5px_rgba(110,36,36,0.1)] hover:drop-shadow-[0px_7px_20px_rgba(110,36,36,0.15)] active:drop-shadow-[0px_7px_20px_rgba(110,36,36,0.15)]">Periksa</button>
            </div>
          </div>
        </div>     
      </div>
      <div className="h-[80vh] flex justify-center items-center mb-[10vh]">
        <img src={Hiasan_choose} alt="hiasan" className=""/>
      </div>
    </>
  );
}

export default CekStatus;