function Tutor(){
    return(
        <div className="w-full md:h-[85vh] h-[40vh] bg-no-repeat bg-cover bg-center"
        style={{backgroundImage: `url(/imgKritik/bgtentang.png)`}}
        >

            <h1 className="text-slate-700 font-serif md:text-4xl text-xl text-center">
                Tata Cara Pemilihan
            </h1>

            <div className="flex justify-center pt-[3vh]">
                <img src= "/imgKritik/frametutor.png" className="w-80% h-80%"/>
            </div>

        </div>

    );
}

export default Tutor;