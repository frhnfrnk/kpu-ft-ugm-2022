import bgBottom from "../../assets/decoration/bgBottom.png";
import lineFooter from "../../assets/decoration/line_bottom.png";


function Kritik(){


    return(
        <div>

            <div
                className="w-full h-[100vh] flex flex-col place-content-center bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: "url(" + bgBottom + ")" }}
                >

                    <form id="kritik_form" className="flex flex-col place-content-center" >
                        <h1 className="text-[#2A374A] font-Playfair-semibold md:text-4xl text-2xl text-center pt-[10vh]">
                            Kritik dan Masukan
                        </h1>

                        <div className="md:h-[43vh] h-[33vh] lg:w-auto border-0 rounded-xl pt-[3vh] mt-[25px] mb-[30px] flex justify-center ">
                            <textarea
                                
                                className="resize-none md:h-[40vh] font-Lato text-[#2A374A] h-[30vh] w-[75vw] lg:w-auto bg-c-05 bg-opacity-50 border-8 border-[#2A374A] rounded-2xl p-6 shadow-[0px_10px_15px_rgba(21,28,37,0.3)]"
                                rows="3"
                                cols="110"
                                id="kritik_form"
                                name="kritik_form"
                                placeholder="Ketik di sini...">
                            </textarea>
                        </div>
                        <div className="flex justify-center">
                            <button className="h-[auto] w-[auto] py-[8px] px-[30px] text-white font-bold font-Lato text-[20px] rounded-full mt-[40px] lg:mt-[20px] bg-gradient-to-r from-[#8A2D2D] to-[#6E2424] shadow-[0px_4px_5px_rgba(110,36,36,0.1),0px_4px_10px_rgba(55,18,18,0.25)] hover:bg-gradient-to-r hover:from-[#E1DAD1] hover:to-[#E1DAD1] hover:text-[#8A2D2D] hover:shadow-[0px_7px_20px_rgba(110,36,36,0.15),0px_10px_25px_1px_rgba(55,18,18,0.45)] transition-all active:bg-gradient-to-r active:from-[#BFB196] active:to-[#BFB196] active:shadow-[0px_7px_20px_rgba(110,36,36,0.15),0px_10px_25px_1px_rgba(55,18,18,0.45)] active:border-none">Kirim Pesan</button>
                        </div>
                    </form>
                    
            </div>
            <img src={lineFooter} alt="line" className="bg-[#DECDB2] w-full h-auto "/>

        </div>
        
    );
}

export default Kritik;