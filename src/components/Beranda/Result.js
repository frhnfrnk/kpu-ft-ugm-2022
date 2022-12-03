
export default function Result () {

    //  console.log(data)
    return(
        <div className="h-[30vh] md:h-[50vh] w-full lg:mt-[30vh]">
            <div className='xl:w-2/3 lg:w-4/5 w-full mx-auto h-[80vh] lg:h-[50vh] mt-[5vh]'>
                <div className="bg-result w-full h-full bg-no-repeat bg-contain 2xl:bg-cover pt-1"
                >
                    <div className="p-[25px]">
                        <h1 className="font-Playfair-semibold text-[14px] md:text-[30px] text-white text-center mb-[2vh] lg:mb-[5vh]">Live Presentase Jumlah Suara Calon Ketua</h1>
                        <div className="flex flex-col px-[2vh] md:px-[5vh] w-full mx-auto">
                            <div className="flex flex-col md:flex-row mb-[1vh] md:mb-[2vh] lg:mb-[5vh]">
                                <h2 className="lg:w-[40%] w-full font-Lato md:text-[26px] text-[14px] text-[#E8E4E3] mb-[10px] lg:mb-0">1. Hilmi Naufal Zulfani</h2>
                                <div className="lg:w-[60%] w-full h-[24px] md:h-[40px] bg-[#E1DAD1] rounded-[30px]">
                                    <div className="w-[61.05%] h-full bg-gradient-to-r from-[#5B1D1D] to-[#8A2D2D] rounded-[30px] font-Lato text-[14px] md:text-[24px] text-[#e8e4e3] text-end">
                                        <p className="w-[90%] ">51.05%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row">
                                <h2 className="lg:w-[40%] w-full font-Lato md:text-[26px] text-[14px] text-[#E8E4E3] mb-[10px] lg:mb-0">2. Ariel Excelsio T. S.</h2>
                                <div className="lg:w-[60%] w-full h-[24px] md:h-[40px] bg-[#E1DAD1] rounded-[30px]">
                                    <div className="w-[55.95%] h-full bg-gradient-to-r from-[#5B1D1D] to-[#8A2D2D] rounded-[30px] font-Lato text-[14px] md:text-[24px] text-[#e8e4e3] text-end">
                                        <p className="w-[90%] ">48.94%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}