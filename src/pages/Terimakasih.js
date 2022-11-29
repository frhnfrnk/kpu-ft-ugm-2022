import bg from "../assets/TentangKPU/Backbaru.png";
import logoCircle from "../assets/Logo/logo_circ.png";
import { Link, useNavigate } from "react-router-dom";
import Kritik from "../components/Terimakasih/Kritik";
import {Helmet} from "react-helmet";
import { useContext } from "react";
import { StateContext } from "../components/Context/context";
import { GoogleLogout } from "react-google-login";
import {Fade, Zoom} from 'react-reveal'

import Check from "../assets/ToastMessage/Check.png";
import WarningOctagon from "../assets/ToastMessage/WarningOctagon.png";

function Terimakasih() {

  const {setProfile, clientId} = useContext(StateContext)
  let navigate = useNavigate()




  const logOut = () => {
    setProfile(null);
    return navigate('/')
  };

  return (
    <>
      <Helmet>
        <title>Terimakasih | KPU FT UGM 2022</title>
      </Helmet>
      <div className="w-full h-[100vh] bg-cover bg-no-repeat bg-[#E1DAD1] flex flex-col justify-center items-center"
        style={{ backgroundImage: "url(" + bg + ")" }}>
          <Fade right>
            <div>
              <h1 className="text-center font-Playfair font-bold text-[calc(0.5rem+5vmin)] lg:text-[calc(0.5rem+3vmin)] text-[#2A374A]">Terima Kasih Atas<br/>Partisipasi Anda Dalam</h1>
            </div>
          </Fade>
          <Zoom>
            <div className="flex justify-center my-4 lg:my-2">
              <img src={logoCircle} alt="logoCircle" className="w-[40%] lg:w-[25%]"/>
            </div>
          </Zoom>
          <Fade left>
            <div>
              <h1 className="font-Lato text-[#2A374A] text-center font-bold lg:font-medium text-[calc(0.5rem+5vmin)] lg:text-[calc(1rem+3vmin)]">PEMILU FT UGM 2022</h1>
            </div>
          </Fade>
          {/* <div>
            <Link to="/"><button className="h-[42px] w-[120px] text-white rounded-full mt-[40px] lg:mt-[20px] bg-gradient-to-r from-[#8A2D2D] to-[#6E2424]">Evaluasi</button></Link>
          </div> */}
          <div className="flex justify-center items-center space-x-5">
            <Fade left>
              <a target="blank" href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSf3qNG8v0EON4PKfWrXQcT38a0xxSlYf06r010BLJgL5G32ng/viewform?usp=sf_link" className="flex justify-center items-center">
                <button className={`h-[auto] w-[auto] py-[8px] px-[30px] text-white font-bold font-Lato text-[16px] rounded-full bg-gradient-to-r from-[#8A2D2D] to-[#6E2424] shadow-[0px_4px_5px_rgba(110,36,36,0.1),0px_4px_10px_rgba(55,18,18,0.25)] hover:bg-gradient-to-r hover:from-[#E1DAD1] hover:to-[#E1DAD1] hover:text-[#8A2D2D] hover:shadow-[0px_7px_20px_rgba(110,36,36,0.15),0px_10px_25px_1px_rgba(55,18,18,0.45)] transition-all active:bg-gradient-to-r active:from-[#BFB196] active:to-[#BFB196] active:shadow-[0px_7px_20px_rgba(110,36,36,0.15),0px_10px_25px_1px_rgba(55,18,18,0.45)] active:border-none`}>Evaluasi</button>
                </a>
                {/*  */}
            </Fade>
            <Fade right>
              <GoogleLogout 
                clientId={clientId} 
                buttonText=""
                  render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}  className="border-[#A05252] hover:border-[#9D7E57] active:border-[#7E6546] border-2 rounded-full px-7 py-1.5 text-[#A05252] text-[16px] font-semibold ">Log Out</button>
                  )}
                onLogoutSuccess={logOut} />
            </Fade>
          </div>

      </div>
      <div className="bg-[#E1DAD1]">
        <Kritik />
      </div>

      {/* <div id='toast_success' className='absolute w-[500px] h-[48px] top-[-10vh] left-[50%] -ml-[200px] transition-all duration-[1000ms] flex justify-center'>
            <div className='bg-[#355D3B] w-[100%] h-full flex items-center justify-start rounded-[12px] shadow-[0px_10px_25px_1px_rgba(17,52,23,0.3)]'>
                <img src={Check} alt = "iconCheck" className='mx-[20px] w-[8%]'/>
                <p className='font-Lato font-bold text-[#FFFFFF] text-[20px]'>Success :<span className='font-normal'> Your account is logged out</span></p>
            </div>
        </div> */}

        {/* <div id='toast_failed' className='absolute w-[400px] h-[64px] top-[-10vh] left-[50%] -ml-[200px] transition-all duration-[1000ms]'>
            <div className='bg-[#8A2D2D] w-full h-full flex items-center justify-center rounded-[12px] shadow-[0px_10px_25px_1px_rgba(17,52,23,0.3)]'>
                <img src={WarningOctagon} alt = "iconCheck"/>
                <p className='font-Lato font-bold text-[#FFFFFF] text-[20px]'>Error :<span className='font-normal'> Logged out is Failed</span></p>
            </div>
      </div> */}
    </>
  );
}

export default Terimakasih;
