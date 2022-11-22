function Tentang(){
    return(
        <div className="w-full md:pt-[15vh] md:h-[80vh] h-[40vh] bg-no-repeat bg-cover bg-center"
        style={{backgroundImage: `url(/imgKritik/bgtentang.png)`}}
        >
            <div className="flex justify-center">
                <h1 className="md:invisible flex text-left text-slate-700 font-serif  text-xl">
                        Tentang Pemilu FT UGM 2022</h1>
            </div>
            
            {/* grid gap-5 grid-cols-2 grid-rows-1 */}
            <div className="flex justify-center items-center md:pt-[15vh] h-[18vh]">
                <div className="w-[50%] flex justify-end">
                    <img src= "/imgKritik/logokpuft.png" className=" flex justify-center md:w-[75%] md:h-[75%] h-[50%]"/>
                </div>
                {/* pt-[8vh] */}
                <div className="w-[50%] whitespace-normal px-4">
                    <h1 className="invisible md:visible md:w-[50%] md:flex md:text-left md:text-slate-700 md:font-serif md:text-3xl md:pb-[2vh]">
                        Tentang Pemilu FT UGM 2022</h1>
                    <p className="break-words text-justify text-black font-sans-serif md:text-lg text-[8px] pb-[2.5vh] md:pr-[20vh]">Pemilihan Umum Mahasiswa Fakultas Teknik Universitas Gadjah Mada (Pemilu) adalah sarana pelaksanaan kedaulatan mahasiswa berdasarkan Anggaran Dasar/Anggaran Rumah Tangga Keluarga Mahasiswa Fakultas Teknik Universitas Gadjah Mada.</p>
                    <button className="invisible md:visible md:bg-red-800 md:rounded-full md:p-3 md:text-lg md:text-white">
                            Selengkapnya
                    </button>
                </div>
            </div>

            <div className="flex justify-center ">
                <button className="md:invisible bg-red-800 rounded-full p-3 md:text-lg text-sm text-white">
                            Selengkapnya
                </button>
            </div>

        </div>

    );
}

export default Tentang;