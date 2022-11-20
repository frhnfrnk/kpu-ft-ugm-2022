import Button from "../Button/button";

function Kritik(){
    return(
        <div>

            <div
                className="w-full h-[100vh] bg-no-repeat bg-cover bg-center"
                style={{backgroundImage: `url(/imgKritik/bgkritik.png)`}}
                >
                    <h1 className="text-[#2A374A] font-Playfair-semibold md:text-4xl text-2xl text-center pt-[33vh]">
                        Kritik dan Masukan
                    </h1>

                    <div className="md:h-[33vh] h-[33vh]  lg:w-auto border-0 rounded-xl pt-[3vh] flex justify-center">
                        <textarea
                            className="md:h-[30vh] h-[30vh] w-[75vw] lg:w-auto bg-c-05 bg-opacity-50 border-8 border-[#2A374A] rounded-2xl p-6"
                            rows="3"
                            cols="110"
                            id="text-translate"
                            name="translate"
                            placeholder="Ketik di sini...">
                            
                        </textarea>
                    </div>

                    <Button text="Kirim Pesan" />
            </div>

        </div>
    );
}

export default Kritik;