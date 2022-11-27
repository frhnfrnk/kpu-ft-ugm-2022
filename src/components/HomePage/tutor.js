import TutorCarousel from './tutorialCarousel';
import Fade from 'react-reveal/Fade';


function Tutor(){
    return(
        
        <>
            <Fade bottom>
                <div className='w-full h-auto'>
                    <h1 className="text-[#2A374A] font-Playfair-bold md:text-4xl text-xl text-center">
                        Tata Cara Pemilihan
                    </h1>
                    <div className="w-full md:h-[55vh] lg:h-[85vh] flex justify-center items-center h-[50vh] bg-no-repeat bg-cover bg-center"
                    >


                        <div className="w-[90%] h-[100%] mx-auto flex justify-center items-center bg-no-repeat bg-cover bg-center" 
                        // style={{ backgroundImage: "url(" + Frame + ")" }}
                        >
                            <div className='w-auto h-auto'>
                                <TutorCarousel />
                            </div>
                            

                        </div>

                    </div>
                </div>
            </Fade>
        </>

    );
}

export default Tutor;