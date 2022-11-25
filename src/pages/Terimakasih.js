import bg from "../assets/TentangKPU/Backbaru.png";
import logoCircle from "../assets/Logo/logo_circ.png";
import { Link, useNavigate } from "react-router-dom";
import Kritik from "../components/Terimakasih/Kritik";
import {Helmet} from "react-helmet";
import { useContext } from "react";
import { StateContext } from "../components/Context/context";
import { GoogleLogout } from "react-google-login";


function Terimakasih() {

  const {isCompleted, profile, setProfile, clientId} = useContext(StateContext)
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
          <div>
            <h1 className="text-center font-Playfair font-bold text-[calc(0.5rem+5vmin)] lg:text-[calc(0.5rem+3vmin)] text-[#2A374A]">Terima Kasih Atas<br/>Partisipasi Anda Dalam</h1>
          </div>
          <div className="flex justify-center my-4 lg:my-2">
            <img src={logoCircle} alt="logoCircle" className="w-[40%] lg:w-[25%]"/>
          </div>
          <div>
            <h1 className="font-Lato text-[#2A374A] text-center font-bold lg:font-medium text-[calc(0.5rem+5vmin)] lg:text-[calc(1rem+3vmin)]">PEMILU FT UGM 2022</h1>
          </div>
          {/* <div>
            <Link to="/"><button className="h-[42px] w-[120px] text-white rounded-full mt-[40px] lg:mt-[20px] bg-gradient-to-r from-[#8A2D2D] to-[#6E2424]">Evaluasi</button></Link>
          </div> */}
          <div className="flex justify-center items-center space-x-5">
            <Link to="/" className="flex justify-center items-center">
              <button className={`h-[auto] w-[auto] py-[8px] px-[30px] text-white font-bold font-Lato text-[16px] rounded-full bg-gradient-to-r from-[#8A2D2D] to-[#6E2424] shadow-[0px_4px_5px_rgba(110,36,36,0.1),0px_4px_10px_rgba(55,18,18,0.25)] hover:bg-gradient-to-r hover:from-[#E1DAD1] hover:to-[#E1DAD1] hover:text-[#8A2D2D] hover:shadow-[0px_7px_20px_rgba(110,36,36,0.15),0px_10px_25px_1px_rgba(55,18,18,0.45)] transition-all active:bg-gradient-to-r active:from-[#BFB196] active:to-[#BFB196] active:shadow-[0px_7px_20px_rgba(110,36,36,0.15),0px_10px_25px_1px_rgba(55,18,18,0.45)] active:border-none`}>Evaluasi</button>
              </Link>
            <GoogleLogout 
                clientId={clientId} 
                buttonText=""
                  render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}  className="border-[#A05252] hover:border-[#9D7E57] active:border-[#7E6546] border-2 rounded-full px-7 py-1.5 text-[#A05252] text-[16px] font-semibold ">Log Out</button>
                  )}
                onLogoutSuccess={logOut} />
          </div>

      </div>
      <div className="bg-[#E1DAD1]">
        <Kritik />
      </div>
    </>
  );
}

export default Terimakasih;
