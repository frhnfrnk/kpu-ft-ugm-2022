import Backbaru from "../assets/TentangKPU/Backbaru.png";
import Backbaru2 from "../assets/TentangKPU/Backbaru2.png";

export default function Tentang() {
  return (
    <>
      {/* bagian tentang kami */}
      <div className="bg-[#E1DAD1] ">
        <div className="bg-cover[length:full_300px]  p-[20px] bg-no-repeat" style={{ backgroundImage: "url(" + Backbaru + ")" }}>
          <h1 className="pt-[40px]  text-center text-[28px] sm:text-[12px] font-playfair text-[#2A374A] ">Tentang Kami</h1>
          <img src="/Logo_KPU.jpg" className="m-auto w-[148px] h-[148px]" alt="logokpu" />
          <div>
            <h2 className="text-center mt-4 font-lato text-[18px] text-[#2A374A]">Komisi Pemilihan Umum</h2>
            <h2 className="text-center font-lato text-[18px] text-[#2A374A] mb-8 ">Fakultas Teknik UGM 2022</h2>
          </div>
        </div>
        <div className="m-4">
          <h1 className="text-center text-[18px]  text-bold font-playfair text-[#2A374A] mt-20">PEMILU FAKULTAS TEKNIK UGM</h1>
          <p className="text-center text-[12px] font-lato m-2 p-2 text-[#35455D]">
            Pemilihan Umum Mahasiswa Fakultas Teknik Universitas Gadjah Mada (Pemilu) adalah sarana pelaksanaan kedaulatan mahasiswa berdasarkan Anggaran Dasar/Anggaran Rumah Tangga Keluarga Mahasiswa Fakultas Teknik Universitas Gadjah //
            Mada. <br />
            <br />
            Peserta Pemilu adalah kandidat calon Ketua BEM KMFT UGM yang telah lolos verifikasi oleh KPU.
            <br />
            <br />
            Pemilih adalah seluruh mahasiswa Fakultas Teknik Universitas Gadjah Mada yang terdaftar secara akademik pada jenjang S1 // reguler yang mempunyai hak untuk memilih dalam Pemilu.
          </p>
          <h1 className="text-[18px]  text-bold text-center font-playfair text-[#2A374A]">KPU FAKULTAS TEKNIK UGM</h1>
          <p className="text-center text-[12px] text-[#35455D] font-lato  p-2 mb-20">
            Komisi Pemilihan Umum Fakultas Teknik Universitas Gadjah Mada yang selanjutnya disebut KPU adalah suatu komisi yang menyelenggarakan Pemilu berdasarkan Undang-Undang KMFT UGM tentang Pemilu dan terdiri dari SC KPU, OC KPU,
            Panitia Pengawas Pemilu dan Mahkamah Pemilu.
          </p>
          <div className="bg-cover pt-px bg-no-repeat " style={{ backgroundImage: "url(" + Backbaru2 + ")" }}>
            <h1 className="text-center text-[18px]  text-bold font-playfair text-[#2A374A] mt-20">Panitia KPU FT UGM 2022</h1>
            <container>
              <img src="" alt="" />
              <h2>Staf Acara</h2>
              <p>a</p>
              <p>b</p>
              <p>c</p>
              <p></p>
            </container>
            <container>
              <img src="" alt="" />
              <h2>Staf Acara</h2>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </container>
            <container>
              <img src="" alt="" />
              <h2>Staf Acara</h2>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </container>
          </div>
        </div>
      </div>
      {/* Akhir bagian tentang kami */}
    </>
  );
}
