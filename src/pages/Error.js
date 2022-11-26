import bgError from "../assets/TentangKPU/BgError.png";
import {Helmet} from "react-helmet";
import lineFooter from "../assets/decoration/line_bottom.png";


function Error() {
  return (
    <>
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>
      <div class="bg-[#E1DAD1] h-full w-full">
        <div
          class="lg:bg-cover bg-cover bg-center flex justify-center items-center
         w-full h-[100vh] bg-no-repeat sm:bg-no-repeat lg:bg-repeat-x"
          style={{ backgroundImage: "url(" + bgError + ")" }}
        >
          <h1 class="text-[#2A374A] font-bold font-Playfair lg:text-[120px] text-[45px] text-center p-[20px] lg:p-[295px] drop-shadow-[-8px_2px_10px_rgba(22,22,22,0.5)]">ERROR 404</h1>
        </div>
        <div className="w-full h-[30vh] flex flex-col justify-center items-center text-[#35455D]">
          <h1 className="font-Lato mb-[2vh] text-[30px]">Mengapa halaman ini muncul? Kemungkinan:</h1>
          <ul className="list-disc font-Lato text-[18px]">
            <li>Halaman tidak ditemukan</li>
            <li>Anda telah memilih dan tidak diperkenankan memilih kembali</li>
            <li>Email Anda tidak terdaftardi Daftar Pemilih Tetap KPU FT UGM</li>
            <li>Anda tidak memiliki akses pada halaman ini</li>
          </ul>
        </div>
        <img src={lineFooter} alt="line-bottom" className="w-full h-[20px]" />
      </div>
    </>
  );
}

export default Error;
