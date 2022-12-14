import lineFooter from "../../assets/decoration/line_bottom.png";
import Button from "../Button/button";
import Fade from "react-reveal/Fade";


function Calonnew(){
    return(
        <div className="bgLetter static bg-[#E1DAD1] lg:h-[100vh] md:h-[auto] h-[auto] md:pt-[0vh] lg:pt-[10vh] bg-no-repeat bg-cover bg-center"
        >
            <div className="lg:flex lg:justify-center lg:space-x-[30vh]"
            >
                <Fade left>
                    <div className="relative flex justify-center group">
                        <h1 className="absolute bottom-20 left-[5vh] md:bottom-[10vh] md:left-[10vh] lg:bottom-[13vh] lg:left-[-1vh] z-50 bg-slate-700 text-xl opacity-80 lg:opacity-0 group-hover:opacity-80 duration-500 group-hover:duration-700 group-hover:delay-15 font-serif text-white md:text-3xl rounded-lg p-3">1. Hilmi Naufal Zulfani</h1>
                        <h2 className="absolute text-white bg-slate-600 opacity-100 lg:opacity-0 group-hover:opacity-80 duration-500 group-hover:duration-700 group-hover:delay-15 rounded-md md:text-lg md:top-[23vh] lg:left-[-5vh] top-[15vh] left-[2vh] z-50 text-xs p-1">
                            #Teknik1Tujuan <br/> 
                            #BersamaSatukan1Teknik
                        </h2>
                        <h2 className="absolute text-white bg-slate-600 opacity-80 lg:opacity-0 group-hover:opacity-80 duration-500 group-hover:duration-700 group-hover:delay-15 rounded-md md:text-xl md:top-[38vh] lg:right-[-3vh] top-[23vh] right-[3vh] z-50 text-sm md:p-4 p-2">
                            Pilih Nomor 1
                        </h2>
                        <div className="flex justify-center   ">
                            <img src="/imgKritik/calonkiri.png" alt="calon" loading="lazy"
                            className="w-[75%] md:w-[57vh] lg:grayscale lg:sepia-[0.5] opacity-100 group-hover:opacity-100 duration-500 group-hover:grayscale-0 group-hover:sepia-0 group-hover:duration-700 group-hover:delay-50"/>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="relative flex justify-center group">
                        <h1 className="absolute bottom-20 right-[3vh] md:bottom-[10vh] md:right-[10vh] lg:bottom-[13vh] lg:right-[-1vh] z-50 bg-slate-700 text-xl opacity-80 lg:opacity-0 group-hover:opacity-80 duration-500 group-hover:duration-700 group-hover:delay-15 font-serif text-white md:text-3xl rounded-lg p-3">2. Ariel Excelsio T. S.</h1>
                        <h2 className="absolute text-white bg-slate-600 opacity-80 lg:opacity-0 group-hover:opacity-80 duration-500 group-hover:duration-700 group-hover:delay-15 rounded-md md:text-lg md:top-[23vh] lg:right-[-5vh] top-[15vh] md:right-[5vh] right-[2vh] z-50 text-xs p-1">
                            #YangTeknik2Aja
                        </h2>
                        <h2 className="absolute text-white bg-slate-600 opacity-80 lg:opacity-0 group-hover:opacity-80 duration-500 group-hover:duration-700 group-hover:delay-15 rounded-md md:text-xl md:top-[38vh] lg:left-[-3vh] top-[23vh] left-[3vh] z-50 text-sm md:p-4 p-2">
                            Pilih Nomor 2
                        </h2>
                        <div className="flex justify-center">
                            <img src="/imgKritik/calonkanan.png" loading="lazy"
                            className="w-[75%] md:w-[57vh] lg:grayscale lg:sepia-[0.5] opacity-100 group-hover:opacity-100 duration-500 group-hover:grayscale-0 group-hover:sepia-0 group-hover:duration-700 group-hover:delay-50"/>
                        </div>
                    </div>
                </Fade>
            </div>

            <div>
                <Button to="/info-calon" text="Tentang Calon" sizeTextlg="24px" sizeTextmd="20px" sizeText="16px"/>
                <img src={lineFooter} alt="line" className="mt-[10vh] w-full h-[auto]"/>
            </div>
            
        </div>
    )
}

export default Calonnew;