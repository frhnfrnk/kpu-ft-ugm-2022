import Button from "../Button/button";
import bgBottom from "../../assets/decoration/bgBottom.png";
import lineFooter from "../../assets/decoration/line_bottom.png";



function Kritik(){
    return(
        <div>

            <div
                className="w-full h-[100vh] flex flex-col place-content-center bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: "url(" + bgBottom + ")" }}
                >

                    <h1 className="text-[#2A374A] font-Playfair-semibold md:text-4xl text-2xl text-center pt-[10vh]">
                        Kritik dan Masukan
                    </h1>

                    <div className="md:h-[43vh] h-[33vh] lg:w-auto border-0 rounded-xl pt-[3vh] mt-[25px] mb-[30px] flex justify-center ">
                        <textarea
                            className="resize-none md:h-[40vh] font-Lato text-[#2A374A] h-[30vh] w-[75vw] lg:w-auto bg-c-05 bg-opacity-50 border-8 border-[#2A374A] rounded-2xl p-6 shadow-[0px_10px_15px_rgba(21,28,37,0.3)]"
                            rows="3"
                            cols="110"
                            id="text-translate"
                            name="translate"
                            placeholder="Ketik di sini...">
                            
                        </textarea>
                    </div>


                    <Button text="Kirim Pesan" sizeText="20px"/>
            </div>
            <img src={lineFooter} alt="line" className="bg-[#DECDB2] w-full h-auto "/>

        </div>
        
    );
}

export default Kritik;