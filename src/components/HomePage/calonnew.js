import lineFooter from "../../assets/decoration/line_bottom.png";
import Button from "../Button/button";


function Calonnew(){
    return(
        <div className="bgLetter static bg-[#E1DAD1] md:h-[100vh] h-[135vh] md:pt-[10vh] bg-no-repeat bg-cover bg-center"
        >
            <div className="md:flex md:justify-center md:space-x-[30vh]"
            >
                <div className="relative flex justify-center group">
                    <h1 className="absolute bottom-20 left-[5vh] md:bottom-[13vh] md:left-[-1vh] z-50 bg-slate-700 text-xl opacity-80 lg:opacity-0 group-hover:opacity-80 duration-500 group-hover:duration-700 group-hover:delay-15 font-serif text-white md:text-3xl rounded-lg p-3">1. Hilmi Naufal Zulfani</h1>
                    <h2 className="absolute text-white bg-slate-600 opacity-100 lg:opacity-0 group-hover:opacity-80 duration-500 group-hover:duration-700 group-hover:delay-15 rounded-md md:text-lg md:top-[23vh] md:left-[-5vh] top-[15vh] left-[2vh] z-50 text-xs p-1">
                        #Teknik1Tujuan <br/> 
                        #BersamaSatukan1Teknik
                    </h2>
                    <h2 className="absolute text-white bg-slate-600 opacity-80 lg:opacity-0 group-hover:opacity-80 duration-500 group-hover:duration-700 group-hover:delay-15 rounded-md md:text-xl md:top-[38vh] md:right-[-3vh] top-[23vh] right-[3vh] z-50 text-sm md:p-4 p-2">
                        Pilih Nomor 1
                    </h2>
                    <div className="flex justify-center   ">
                        <img src="/imgKritik/calonkiri.png" 
                        className="w-[75%] md:w-[57vh] lg:grayscale lg:sepia-[0.5] opacity-100 group-hover:opacity-100 duration-500 group-hover:grayscale-0 group-hover:sepia-0 group-hover:duration-700 group-hover:delay-50"/>
                    </div>
                </div>
                <div className="relative flex justify-center group">
                    <h1 className="absolute bottom-20  right-[3vh] md:bottom-[13vh] md:right-[-1vh] z-50 bg-slate-700 text-xl opacity-80 lg:opacity-0 group-hover:opacity-80 duration-500 group-hover:duration-700 group-hover:delay-15 font-serif text-white md:text-3xl rounded-lg p-3">2. Ariel Excelsio T. S.</h1>
                    <h2 className="absolute text-white bg-slate-600 opacity-80 lg:opacity-0 group-hover:opacity-80 duration-500 group-hover:duration-700 group-hover:delay-15 rounded-md md:text-lg md:top-[23vh] md:right-[-5vh] top-[15vh] right-[2vh] z-50 text-xs p-1">
                        #YangTeknik2Aja
                    </h2>
                    <h2 className="absolute text-white bg-slate-600 opacity-80 lg:opacity-0 group-hover:opacity-80 duration-500 group-hover:duration-700 group-hover:delay-15 rounded-md md:text-xl md:top-[38vh] md:left-[-3vh] top-[23vh] left-[3vh] z-50 text-sm md:p-4 p-2">
                        Pilih Nomor 2
                    </h2>
                    <div className="flex justify-center">
                        <img src="/imgKritik/calonkanan.png"
                        className="w-[75%] md:w-[57vh] lg:grayscale lg:sepia-[0.5] opacity-100 group-hover:opacity-100 duration-500 group-hover:grayscale-0 group-hover:sepia-0 group-hover:duration-700 group-hover:delay-50"/>
                    </div>
                </div>
            </div>

            <div>
                <Button text="Tentang Calon" sizeText="16px" />
                <img src={lineFooter} alt="line" className="mt-[10vh] w-full h-[auto]"/>
            </div>
            
        </div>
    )
}

export default Calonnew;