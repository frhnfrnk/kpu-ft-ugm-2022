import bg from "../assets/TentangKPU/Backbaru.png";
import logoCircle from "../assets/Logo/logo_circ.png";
import { Link } from "react-router-dom";
import Kritik from "../components/Terimakasih/Kritik";
import Button from "../components/Button/button";
import {Helmet} from "react-helmet";


function Terimakasih() {
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
          <Button text="Evaluasi" sizeText="16px"/>

      </div>
      <div className="bg-[#E1DAD1]">
        <Kritik />
      </div>
    </>
  );
}

export default Terimakasih;
