import Backbaru from "../assets/TentangKPU/Backbaru.png";
import Backbaru2 from "../assets/TentangKPU/Backbaru2.png";

export default function Tentang() {
  return (
    <>
      {/* bagian tentang kami */}
      <div className="w-auto h-auto bg-cover bg-[#E1DAD1]  ">
        <div className="bg-cover bg-no-repeat w-full h-[100vh] p-[20px] " style={{ backgroundImage: "url(" + Backbaru + ")" }}>
          <h1 className="pt-[10vh] m-[4px] text-center sm:text-[28px] lg:text-[50px] font-Playfair text-[#2A374A] font-bold">Tentang Kami</h1>
          <img src="/Logo_KPU.jpg" className="m-auto lg:w-[240px] lg:h-[240px] sm:w-[148px] sm:h-[148px]" alt="logokpu" />
          <div>
            <h2 className="text-center mt-4 font-Lato sm:text-[18px] lg:text-[30px] font-medium text-[#2A374A]">Komisi Pemilihan Umum</h2>
            <h2 className="text-center font-Lato sm:text-[18px] lg:text-[30px] font-medium text-[#2A374A] mb-8 ">Fakultas Teknik UGM 2022</h2>
          </div>
        </div>
        <div className="m-4">
          <h1 className="text-center sm:text-[18px] lg:text-[30px] font-bold font-Playfair text-[#2A374A] mt-20">PEMILU FAKULTAS TEKNIK UGM</h1>
          <p className="text-center sm:text-[12px] lg:text-[18px] font-medium font-Lato m-2 p-2 text-[#35455D] ">
            Pemilihan Umum Mahasiswa Fakultas Teknik Universitas Gadjah Mada (Pemilu) adalah sarana pelaksanaan kedaulatan mahasiswa berdasarkan Anggaran Dasar/Anggaran Rumah Tangga Keluarga Mahasiswa Fakultas Teknik Universitas Gadjah
            Mada. <br />
            <br />
            Peserta Pemilu adalah kandidat calon Ketua BEM KMFT UGM yang telah lolos verifikasi oleh KPU.
            <br />
            <br />
            Pemilih adalah seluruh mahasiswa Fakultas Teknik Universitas Gadjah Mada yang terdaftar secara akademik pada jenjang S1 reguler yang mempunyai hak untuk memilih dalam Pemilu.
          </p>
          <h1 className="sm:text-[18px] lg:text-[30px]  font-bold text-center font-Playfair text-[#2A374A]">KPU FAKULTAS TEKNIK UGM</h1>
          <p className="text-center sm:text-[12px] lg:text-[18px] font-medium text-[#35455D] font-Lato  p-5 mb-20">
            Komisi Pemilihan Umum Fakultas Teknik Universitas Gadjah Mada yang selanjutnya disebut KPU adalah suatu komisi yang menyelenggarakan Pemilu berdasarkan Undang-Undang KMFT UGM tentang Pemilu dan terdiri dari SC KPU, OC KPU,
            Panitia Pengawas Pemilu dan Mahkamah Pemilu.
          </p>
          <div className="bg-cover w-full bg-repeat-x  " style={{ backgroundImage: "url(" + Backbaru2 + ")" }}>
            <h1 className="text-center sm:text-[18px] lg:text-[30px] font-Playfair font-bold text-[#2A374A] mt-30">Panitia KPU FT UGM 2022</h1>
          </div>
        </div>
      </div>
      {/* Akhir bagian tentang kami */}
    </>
  );
}
