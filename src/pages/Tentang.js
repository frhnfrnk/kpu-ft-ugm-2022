import Backbaru from "../assets/TentangKPU/Backbaru.png";
import Backbaru2 from "../assets/TentangKPU/Backbaru2.png";
import SplidePanitia from "../components/TentangKPU/Carousel.js";
import lineFooter from "../assets/decoration/line_bottom.png";
import {Helmet} from "react-helmet";
import { Fade, Zoom } from "react-reveal";


// import "antd/dist/antd.css";

export default function Tentang() {
  return (
    <>
      <Helmet>
        <title>Tentang | KPU FT UGM 2022</title>
      </Helmet>
      {/* bagian tentang kami */}
      <div className="bg-cover bg-[#E1DAD1]">
        <div className="bg-cover w-full bg-no-repeat w-full lg:h-[100vh] h-[85vh] flex justify-center items-center flex-col" style={{ backgroundImage: "url(" + Backbaru + ")" }}>
          <Fade top>
            <h1
              className="w-full text-center text-[28px] lg:text-[50px] font-Playfair text-[#2A374A] font-bold lg:mb-[28px] leading-[
                  37.32px] mb-[20px]"
            >
              Tentang Kami
            </h1>
          </Fade>
          <Zoom>
            <img src="/Logo_KPU.jpg" className="m-0 lg:w-[240px] lg:h-[240px] w-[148px] h-[148px]" alt="logokpu" />
          </Zoom>
          <Fade bottom>
            <div>
              <h2
                className="text-center mt-8 font-Lato text-[18px] lg:text-[30px] font-medium text-[#2A374A] lg:mt-[24px] leading-[
                            21.6px] mt-[25px]"
              >
                Komisi Pemilihan Umum
              </h2>
              <h2
                className="text-center font-Lato text-[18px] lg:text-[30px] font-medium text-[#2A374A] lg:mb-[179px] leading-[
                            21.6px] mb-[143px]"
              >
                Fakultas Teknik UGM 2022
              </h2>
            </div>
          </Fade>
        </div>
        <div className="">
          <Fade left>
            <h1 className="text-center sm:text-[18px] lg:text-[30px] font-bold font-Playfair text-[#2A374A]  mb-[5px] leading-[28.8px] lg:leading-[48px] lg:mb-[20px] lg:mt-[50px] ">PEMILU FAKULTAS TEKNIK UGM</h1>
            <p className="text-center text-[12px] lg:text-[18px] font-medium font-Lato text-[#35455D] lg:mr-[247px] lg:ml-[247px] ml-[20px] mr-[20px] lg:leading-[27px]">
              <b>Pemilihan Umum</b> Mahasiswa Fakultas Teknik Universitas Gadjah Mada (Pemilu) adalah sarana pelaksanaan kedaulatan mahasiswa berdasarkan Anggaran Dasar/Anggaran Rumah Tangga Keluarga Mahasiswa Fakultas Teknik Universitas
              Gadjah Mada. <br />
              <br />
              <b>Peserta Pemilu</b> adalah kandidat calon Ketua BEM KMFT UGM yang telah lolos verifikasi oleh KPU.
              <br />
              <br />
              <b>Pemilih</b> adalah seluruh mahasiswa Fakultas Teknik Universitas Gadjah Mada yang terdaftar secara akademik pada jenjang S1 reguler yang mempunyai hak untuk memilih dalam Pemilu.
            </p>
          </Fade>
          <Fade right>
            <h1 className="sm:text-[18px] lg:text-[30px]  font-bold text-center font-Playfair text-[#2A374A] lg:leading-[48px] leading-[28.8px] mb-[5px] lg:mb-[20px] lg:mt-[67px]">KPU FAKULTAS TEKNIK UGM</h1>
            <p className="text-center text-[12px] lg:text-[18px] font-medium text-[#35455D] font-Lato  lg:mr-[247px] lg:ml-[247px] lg:mb-[67px] lg:leading-[27px] ml-[20px] mr-[20px] ">
              <b>Komisi Pemilihan Umum</b> Fakultas Teknik Universitas Gadjah Mada yang selanjutnya disebut KPU adalah suatu komisi yang menyelenggarakan Pemilu berdasarkan Undang-Undang KMFT UGM tentang Pemilu dan terdiri dari SC KPU, OC
              KPU, Panitia Pengawas Pemilu dan Mahkamah Pemilu.
            </p>
          </Fade>
          <div className="pb-[2vh] lg:pb-[10vh] pt-[0.5vh] bg-cover bg-no-repeat" style={{ backgroundImage: "url(" + Backbaru2 + ")" }}>
            <h1 className="text-center lg:mt-[217px] text-[18px] lg:text-[30px] font-bold font-Playfair text-[#2A374A] leading-[28.8px] mt-[70px] lg:ml-[539px] lg:mr-[540px]">Panitia KPU FT UGM 2022</h1>
            <Zoom>
              <div class="Panitia" className="border-none">
                <SplidePanitia />
              </div>
            </Zoom>
          </div>
        </div>
        <img src={lineFooter} alt="line" className="bg-[#DECDB2] w-full h-auto"/>
      </div>
      {/* Akhir bagian tentang kami */}
    </>
  );
}
