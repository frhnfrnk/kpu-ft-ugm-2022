import Frame from '../../assets/decoration/frametutor.png'
import TutorCarousel from './tutorialCarousel';

function Tutor(){
    return(
        
        <>
            <h1 className="text-slate-700 font-serif md:text-4xl text-xl text-center">
                Tata Cara Pemilihan
            </h1>
            <div className="w-full md:h-[55vh] lg:h-[85vh] flex justify-center items-center h-[40vh] bg-no-repeat bg-cover bg-center"
            >


                <div className="w-[90%] h-[100%] mx-auto flex justify-center items-center bg-no-repeat bg-cover bg-center" 
                // style={{ backgroundImage: "url(" + Frame + ")" }}
                >
                    <div className='w-auto h-auto'>
                        <TutorCarousel />
                    </div>
                    

                </div>

            </div>
        </>

    );
}

export default Tutor;