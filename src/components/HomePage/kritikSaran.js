function Kritik(){
    return(
        <div>

            <div
                className="w-full md:h-[100vh] h-[60vh] bg-no-repeat bg-cover bg-center"
                style={{backgroundImage: `url(/imgKritik/bgkritik.png)`}}
                >
                    <h1 className="text-slate-700 font-serif md:text-4xl text-xl text-center pt-[15vh] md:pt-[33vh]">
                        Kritik dan Masukan
                    </h1>

                    <div className="md:h-[33vh] h-[23vh]  lg:w-auto border-0 rounded-xl pt-[3vh] flex justify-center">
                        <textarea
                            className="md:h-[30vh] h-[20vh] w-[75vw] lg:w-auto bg-c-05 bg-opacity-50 border-0 rounded-xl p-6"
                            rows="3"
                            cols="110"
                            id="text-translate"
                            name="translate"
                            placeholder="Ketik di sini...">
                            
                        </textarea>
                    </div>

                    <div className="flex justify-center pt-[3vh]">
                        <button className="bg-red-800 rounded-full p-3 md:text-lg text-sm text-white">
                            Kirim Pesan
                        </button>
                    </div>
            </div>

        </div>
    );
}

export default Kritik;