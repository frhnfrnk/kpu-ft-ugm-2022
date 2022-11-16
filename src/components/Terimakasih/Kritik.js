import LineBottom from '../../assets/decoration/line_bottom.png'
import Button from '../Button/button';


function Kritik2(){
    return(
        <div>

            <div
                className="w-full h-[100vh] flex flex-col place-content-center bg-no-repeat bg-cover bg-center"
                >
                    <h1 className="text-[#2A374A] font-Playfair-semibold md:text-4xl text-2xl text-center">
                        Kritik dan Masukan
                    </h1>

                    <div className="md:h-[43vh] h-[33vh]  lg:w-auto border-0 rounded-xl pt-[3vh] mt-[25px] flex justify-center">
                        <textarea
                            className="md:h-[40vh] h-[30vh] w-[75vw] lg:w-auto bg-c-05 bg-opacity-50 border-8 border-[#2A374A] rounded-2xl p-6"
                            rows="3"
                            cols="110"
                            id="text-translate"
                            name="translate"
                            placeholder="Ketik di sini...">
                            
                        </textarea>
                    </div>

                    <Button text="Kirim Pesan" />
            </div>
            <img src={LineBottom} alt="line-bottom" className="w-full"/>
        </div>
    );
}

export default Kritik2;