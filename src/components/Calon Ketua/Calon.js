import Backbaru2 from "../../assets/Calon/backbaru2.png";
import overlay from "../../assets/Calon/overlay.png";
import Hiasan_choose from "../../assets/Calon/Hiasan_choose.png";
import Frame_Calon from "../../assets/Calon/Frame_Calon.png";
import Frame_Calon2 from "../../assets/Calon/Frame_Calon2.png";
import lineFooter from "../../assets/decoration/line_bottom.png";
import { useState } from "react";
import Button from "../Button/button";
import { useContext } from "react";
import { StateContext } from "../Context/context";
import { Fade, Zoom } from "react-reveal";

export default function Calon() {

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const {isCompleted} = useContext(StateContext)


  return (
    <>
      {/*Calon Section Start*/}
        <div className="bg-[#E1DAD1] h-full">
          <div className="bg-cover bg-center w-full h-[120vh] bg-no-repeat flex flex-col content-center " style={{ backgroundImage: "url(" + Backbaru2 + ")" }}>          
            <Fade top>
              <div className="text-center mt-[16vh] h-auto text-[#2A374A] mx-auto">
                <h1 className="font-Playfair-bold text-[28px] md:text-[50px]">Calon Ketua</h1>
                <p className="font-Lato text-[18px] md:text-[30px]">BEM KMFT UGM 2023</p>
              </div>
            </Fade>
            {/* <div className="grid lg:grid-cols-12 lg:px-[170px] justify-center">
              <div className="flex flex-col lg:col-span-4 lg:col-start-2 cursor-pointer group transition-all" onClick={() => {setIsOpen(true)}}> 
                <img src={Frame_Calon2} alt="calon_2"/>
                <div className="transition-all lg:col-span-4 lg:col-start-8 text-center w-[320px] mx-auto bg-[rgba(138,45,45,0.85)] py-[12px] block text-[#E8E4E3] text-[25px] rounded-[20px] font-Playfair-semibold -translate-y-[7.6rem] group-hover:bg-[#E1DAD1] group-hover:text-[#8A2D2D]">
                  <h1 className="">Hilmi Naufal Zulfani</h1>
                </div>
              </div> 
              <div className="flex flex-col lg:col-span-4 lg:col-start-8 cursor-pointer group transition-all" onClick={() => {setIsOpen(true)}}> 
                <img src={Frame_Calon} alt="calon_1"/>
                <div className="transition-all lg:col-span-4 lg:col-start-8 text-center w-[320px] mx-auto bg-[rgba(138,45,45,0.85)] py-[12px] block text-[#E8E4E3] text-[25px] rounded-[20px] font-Playfair-semibold -translate-y-[7.6rem] group-hover:bg-[#E1DAD1] group-hover:text-[#8A2D2D]">
                  <h1 className="">Ariel Excelsio T.S</h1>
                </div>
              </div>            
            </div> */}
            <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-around w-[60%] h-[60%] lg:h-[40%] mx-auto mt-[10vmin] lg:mt-[6vmin] mb-[8rem] lg:mb-0">
              <Fade left>
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center cursor-pointer group transition-all  lg:pr-[5%]" onClick={() => {setIsOpen1(true)}}> 
                    <img src={Frame_Calon2} className="w-full md:w-[85%]" alt="calon_2"/>
                    <div className="transition-all text-center w-[80%] md:w-[320px] mt-[-4.6rem] md:mt-[-8.3rem] lg:mt-0 bg-[rgba(138,45,45,0.85)] py-[8px] md:py-[12px] block text-[#E8E4E3] text-[14px] md:text-[25px] rounded-[8px] lg:rounded-[20px] font-Playfair-semibold mx-auto lg:-translate-y-[7.3rem] group-hover:bg-[#E1DAD1] group-hover:text-[#8A2D2D]">
                      <h1 className="">Hilmi Naufal Zulfani</h1>
                    </div>
                </div>
              </Fade>
              <Fade right>
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center cursor-pointer group transition-all  lg:pl-[5%]" onClick={() => {setIsOpen2(true)}}> 
                  <img src={Frame_Calon}  className="w-full md:w-[85%]" alt="calon_1"/>
                  <div className="transition-all text-center w-[80%] md:w-[320px] mt-[-4.6rem] md:mt-[-8.3rem] lg:mt-0 bg-[rgba(138,45,45,0.85)] py-[8px] md:py-[12px] block text-[#E8E4E3] text-[14px] md:text-[25px] rounded-[8px] lg:rounded-[20px] font-Playfair-semibold mx-auto lg:-translate-y-[7.3rem] group-hover:bg-[#E1DAD1] group-hover:text-[#8A2D2D]">
                    <h1 className="">Ariel Excelsio T.S</h1>
                  </div>
                </div>  
              </Fade>  
            </div>
            {isCompleted ? <Button to="/vote" text="Vote Sekarang" sizeText="20px"/> : 
              <Fade bottom>
                <div className="flex justify-center">
                  <button href="#" className="bg-gradient-to-r from-[#959595] to-[#959595] text-[#FFFFFF] rounded-full px-6 py-2 font-semibold shadow-[0px_4px_10px_rgba(55,18,18,0.25)] cursor-default">Vote Ditutup</button>
                </div>
              </Fade>
            }
          </div>  
          <div className="h-[80vh] flex justify-center items-center mb-[10vh]">
            <Zoom>
              <img src={Hiasan_choose} alt="hiasan" className=""/>
            </Zoom>
          </div>
          <img src={lineFooter} alt="line" className="w-full h-auto"/>
        </div>

        { isOpen1 ? (
          <div className="popup calon1 w-[90vw] md:w-[80vw] h-[auto] py-[20px] absolute top-[15vh] left-[50%] -ml-[45vw] md:-ml-[40vw] bg-[#D8CBBC] bg-center bg-no-repeat bg-cover flex justify-center items-center rounded-[14px] lg:rounded-[40px] brightness-110 shadow-[0px_-6px_15px_2px_rgba(63,50,35,0.1),0px_8px_25px_1px_rgba(63,50,35,0.16),0px_35px_40px_2px_rgba(63,50,35,0.32)]" style={{ backgroundImage: "url(" + overlay + ")" }}>
            <div className="popup-inner py-[10px] w-[95%] h-[95%] flex justify-center items-center border-[#8A2D2D] border-[2px] lg:border-[6px] rounded-[16px] lg:rounded-[40px]">
                <div className="flex flex-col py-[20px] px-[25px] popup-inner2 w-[95%] h-[95%] flex justify-center items-center border-[#8A2D2D] border-[2px] lg:border-[6px] rounded-[10px] lg:rounded-[40px]">
              {/* Make a close btn */}
              <div className="close-btn absolute top-0 right-0 mt-[70px] mr-[50px] md:mt-[100px] md:mr-[100px]" onClick={() => {setIsOpen1(false)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#8A2D2D" stroke="#8A2D2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x cursor-pointer hover:text-white">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>

              <div className="flex lg:flex-row flex-col h-auto mx-auto">
                <div className="w-full lg:w-[30%] p-6 flex justify-center">
                  <img src={Frame_Calon2} className="w-[60%] lg:w-[100%]"  alt="calon_1"/>
                </div>
                <div className="w-full md:w-[70%] py-3">
                  <h1 className="font-Playfair-bold text-[14px] lg:text-[40px] text-[#35455D]">Hilmi Naufal Zulfani</h1>
                  <h3 className="font-Lato text-[24px] text-[#35455D]">Departemen Teknik Kimia</h3>
                  <h3 className="font-Playfair-bold text-[24px] text-[#35455D] mt-[20px]">Profil</h3>
                  <p className="text-[#151C25] text-[18px] font-Lato indent-8">Teknik atau engineering memiliki arti rekayasa. Tentu rekayasa di sini adalah upaya untuk merancang sesuatu yang bernilai positif dan bermanfaat bagi kehidupan manusia. Begitu juga dengan mahasiswanya yang merupakan para calon insinyur pembangun dan pelopor bangsa. Paradigma yang menjadikan seluruh csivitas atau warga menjadi seseorang yang pemikir, solid, dan disiplin, tetapi tetap peduli dan menyenangkan karena untuk Teknik jelas “No Party, No Happy”.</p>
                </div>
              </div>
              <div>
                <p className="text-[#151C25] text-[18px] font-Lato indent-8">Badan Eksekutif Mahasiswa KMFT UGM merupakan sebuah lembaga mahasiswa di KMFT UGM yang memiliki peranan eksekutif untuk bisa menjalankan fungsi inisiator dan inklusi seluruh kekuatan kreatif mahasiswa secara terpadu dan selaras. Agar dapat melaksanakannya, tentu kita harus berpikir secara mendasar dan bertanya, “Mengapa BEM KMFT UGM ada dan dibutuhkan?” serta “Apa masalah utama dan menjadi prioritas di KMFT serta bagaimana cara menyeleaikannya?” Terdapat beberapa permasalahan yang sangat menjadi perhatian kita semua, baik dari sudut pandang lembaga maupun mahasiswa. Contohnya adalah rasa kepemilikan fungsionaris terhadap organisasi dan apa yang organisasi bisa berikat kepada para fungsionarisnya; manajemen keuangan lembaga; persebaran dan dan efektivitas program yang akan berpengaruh terhadap stabilitas kinerja; berbagai macam isu kemahasiswaan, keteknikan, dan nasional yang dinamis dan fluktuatif; isu sinergitas, kemitraan, dan keterlibatan seluruh elemen; responsibilitas program; transparansi dan komunikasi antar bidang dan lembaga; iklim pergerakan dan pengabdian di teknik; serta pengembangan kreativitas akademik dan minat bakat mahasiswa. Oleh karena itu, dibutuhkan sistem yang mampu menaungi berbagai macam aspirasi dan dan tanggap kritis terhadap fluktuasi yang ada.</p>
              </div>
              <div>
                <h3 className="font-Playfair-bold text-[24px] text-[#35455D] mt-[20px]">Visi</h3>
                <p className="text-[#151C25] text-[18px] font-Lato">BEM KMFT UGM sebagai lembaga penghimpun dan penggerak kolaborasi mahasiswa teknik yang berkelanjutan dan tepat guna.</p>
              </div>
              <div>
                <h3 className="font-Playfair-bold text-[24px] text-[#35455D] mt-[20px]">Misi</h3>
                <ul className="list-decimal px-[20px]">
                  <li className="text-[#151C25] text-[18px] font-Lato">Membangun konstruksi internal organisasi yang kolaboratif, sistemik, dan terarah berdasarkan prinsip kesempatan.</li>
                  <li className="text-[#151C25] text-[18px] font-Lato">Membentuk ekosistem program kemahasiswaan yang responsif dan substantif melalui kemitraan forum dan kelembagaan.</li>
                  <li className="text-[#151C25] text-[18px] font-Lato">Menghadirkan pola pergerakan dan pengabdian yang aplikatif serta kritis terhadap isu sosial, politik, dan lingkungan.</li>
                  <li className="text-[#151C25] text-[18px] font-Lato">Menyediakan ruang kreasi, pengembangan minat, dan kompetensi mahasiswa sesuai kebutuhan, terpadu, dan adaptif.</li>
                  <li className="text-[#151C25] text-[18px] font-Lato">Mengoptimalkan fungsi media riset dan komunikasi dengan mekanisme cepat tanggap, transparan, dan terintegrasi.</li>
                </ul>
              </div>
              <div className="w-full">
                <h3 className="font-Playfair-bold text-[24px] text-[#35455D] mt-[20px]">Daftar Riwayat Hidup</h3>
                <iframe className="rounded-[10px] w-[100%] h-[50vh]" src="https://drive.google.com/file/d/11c9aWkvPfFWbGgC_8pUWuxTXgCyiunuR/preview" title="CV Hilmi Naufal"></iframe>
              </div>
            </div>
          </div>
        </div>  
        ) : null } 
      {/*Calon Section End*/}

        { isOpen2 ? (
             <div className="popup calon1 w-[90vw] md:w-[80vw] h-[auto] py-[20px] absolute top-[15vh] left-[50%] -ml-[45vw] md:-ml-[40vw] bg-[#D8CBBC] bg-center bg-no-repeat bg-cover flex justify-center items-center rounded-[14px] lg:rounded-[40px] brightness-110 shadow-[0px_-6px_15px_2px_rgba(63,50,35,0.1),0px_8px_25px_1px_rgba(63,50,35,0.16),0px_35px_40px_2px_rgba(63,50,35,0.32)]" style={{ backgroundImage: "url(" + overlay + ")" }}>
              <div className="popup-inner py-[10px] w-[95%] h-[95%] flex justify-center items-center border-[#8A2D2D] border-[2px] lg:border-[6px] rounded-[16px] lg:rounded-[40px]">
                <div className="flex flex-col py-[20px] px-[25px] popup-inner2 w-[95%] h-[95%] flex justify-center items-center border-[#8A2D2D] border-[2px] lg:border-[6px] rounded-[10px] lg:rounded-[40px]">
                  {/* Make a close btn */}
                  <div className="close-btn absolute top-0 right-0 mt-[70px] mr-[50px] lg:mt-[100px] lg:mr-[100px]" onClick={() => {setIsOpen2(false)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#8A2D2D" stroke="#8A2D2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x cursor-pointer hover:text-white">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </div>

                  <div className="flex lg:flex-row flex-col h-auto mx-auto">
                    <div className="w-full lg:w-[30%] p-6 flex justify-center">
                      <img src={Frame_Calon} className="w-[60%] lg:w-[100%]"  alt="calon_2"/>
                    </div>
                    <div className="w-full lg:w-[70%] py-0 lg:py-3">
                      <h1 className="font-Playfair-bold text-[16px] text-center lg:text-[40px] text-[#35455D]">Ariel Excelsio</h1>
                      <h3 className="font-Lato text-center text-[14px] lg:text-[24px] text-[#35455D]">Departemen Teknik Nuklir dan Teknik Fisika</h3>
                      <h3 className="font-Playfair-bold text-[14px] lg:text-[24px] text-[#35455D] mt-[20px]">Profil</h3>
                      <p className="text-[#151C25] text-[12px] lg:text-[18px] font-Lato indent-8 text-justify">Ariel Excelsio Tandirerung Senobua, mahasiswa Departemen Teknik Nuklir dan Fisika angkatan 2020. Lahir di Depok, 26 Desember 2002 besar di Tangerang Selatan dan sekarang menimba ilmu di kota istimewa, Yogyakarta. Seperti mahasiswa pada umumnya yang mencari jati diri dunia perkuliahan untuk mempersiapkan diri jadi manusia dewasa. Semua berawal dari departemen tercinta DTNTF, di angkatan 2020 panggilan hati memanggil untuk menjadi Koordinator Angkatan 2020 yang kemudian berlanjut menjadi Ketua Angkatan, jabatan yang ditanggung tanpa masa jabatan.</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#151C25] text-[12px] lg:text-[18px] text-justify font-Lato indent-8"> Organisasi pertama, BEM KM UGM menjadi tempat singgah pertama untuk belajar organisasi di tingkat Universitas. Dengan segala lika-liku baik-buruk didalamnya diputuskan untuk meninggalkan organisasi tersebut dan memulai kisah baru di BEM KMFT. Ditambah dengan kisah luar biasa dari PPSMB Kesatria, membuka mata dan pikiran tentang fakultas terbaik dan terbesar di Universitas Gadjah Mada, Fakultas Teknik. Slogan teknik satu, teknik jaya, teknik Universitas Gadjah Mada membekas di hati dan jiwa. Dan itulah alasan utama kenapa Saya ingin mewujudkan slogan tersebut tidak hanya diucapkan namun diaplikasikan dan resapi setiap jiwa mahasiswa Fakultas Teknik Universitas Gadjah Mada, dan menurut saya BEM KMFT UGM merupakan wadah terbaik untuk itu. Dari niat sederhana tersebut terwujudlah gerakan berani untuk mencalonkan diri sebagai Calon Ketua BEM KMFT UGM periode selanjutnya. </p>
                  </div>
                  <div className="w-full">
                    <h3 className="font-Playfair-bold text-[14px] lg:text-[24px] text-[#35455D] mt-[20px]">Visi</h3>
                    <p className="text-[#151C25] text-[12px] lg:text-[18px] font-Lato">BEM KMFT UGM sebagai wadah kolaborasi yang dinamis dan relevan untuk mewujudkan sinergitas satu teknik.</p>
                  </div>
                  <div className="w-full">
                    <h3 className="font-Playfair-bold text-[14px] lg:text-[24px] text-[#35455D] mt-[20px]">Misi</h3>
                    <ul className="list-decimal px-[20px] text-[12px] lg:text-[18px] text-[#151C25] font-Lato text-justify">
                      <li >Mengoptimalkan fungsi support system demi terlaksananya tata kelola organisasi yang ideal</li>
                      <li >Mewadahi segala kebutuhan yang terkait dengan pengembangan kreativitas dan kesejahteraan mahasiswa</li>
                      <li >Menginisiasi gerakan yang dinamis berbasis keteknikan</li>
                      <li >Menyebar kebermanfaatan melalui pengabdian kepada masyarakat</li>
                      <li >Mengembangkan ruang ruang kolaborasi dengan seluruh stakeholder di dalam dan luar Fakultas Teknik</li>
                    </ul>
                  </div>
                  <div className="w-full">
                    <h3 className="font-Playfair-bold text-[14px] lg:text-[24px] text-[#35455D] mt-[20px]">Daftar Riwayat Hidup</h3>
                    <iframe className="rounded-[10px] w-[100%] h-[50vh]" src="https://drive.google.com/file/d/1Xp5G3UbrtGHxCgZdGxMdIp9lrSzpJL2q/preview" title="CV Ariel Excelcio"></iframe>
                  </div>
                </div>
              </div>
            </div>  
            ) : null }


      {/*Calon Section End*/}  
    </>
  );
}