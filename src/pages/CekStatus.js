import BackCekStatus from "../assets/CekStatus/BackCekStatus.png";
import Hiasan_choose from "../assets/Calon/Hiasan_choose.png";
import lineFooter from "../assets/decoration/line_bottom.png";
import { useState } from "react";
import Fade from 'react-reveal/Fade';
import axios from "axios";

  
function CekStatus() {

  const [data, setData] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const [database, setDatabase] = useState({});

  const [notRegistered, setNotRegistered] = useState("hidden");
  const result = document.getElementById("result");

  const handleChange = (event) => {
    setIsRegistered(false)
    setData(event.target.value);
  }
  const handleSubmit = async (e) => {
      e.preventDefault()
      await axios({
          baseURL: process.env.REACT_API_URL || "http://localhost:5000",
          method: "GET",
          url:`/users/${data}`,
        })
        .then((response) => {
          setDatabase(response.data);
          if(response.data.Email === undefined) {
            setIsRegistered(false);
            setNotRegistered("block")
          }
          else{
            setIsRegistered(true);
            setNotRegistered("hidden")
          }
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
            }
        })
      // Dummy data
      
  }
  

  return (
    <>
      <div className="bg-[#E1DAD1] h-[100vh] w-[100%]">
        <div className="bg-cover bg-center w-full h-full bg-no-repeat flex flex-col items-center justify-center" style={{ backgroundImage: "url(" + BackCekStatus + ")" }}>
          <div className="w-[90] lg:w-[25%] flex flex-col text-center space-y-3">
            <h1 className="text-[#2A374A] font-Playfair-bold text-4xl lg:text-5xl">Cek Status</h1>
            <p className="text-[#2A374A] font-Lato text-xl lg:text-2xl">Daftar Pemilihan Sementara</p>
            <form className="flex flex-col w-full md:flex-row justify-center items-center space-x-0 space-y-4 md:space-y-0 md:space-x-4 pt-4">
              <input onChange={handleChange} className="w-full font-Lato placeholder:text-[#9D7E57] pr-0 md:pr-12 pl-3 rounded-3xl bg-[#E8E4E3] border-2 border-solid border-[#9D7E57] py-1.5 hover:placeholder:text-[#8A2D2D] hover:border-[#8A2D2D] focus:placeholder:text-[#35455D] focus:border-[#35455D] shadow-[0px_7px_20px_rgba(110,36,36,0.15),0px_10px_25px_1px_rgba(55,18,18,0.45)] hover:shadow-[0px_7px_20px_rgba(110,36,36,0.15),0px_10px_25px_1px_rgba(55,18,18,0.45)] focus:shadow-[0px_7px_20px_rgba(110,36,36,0.15),0px_10px_25px_1px_rgba(55,18,18,0.45)]" placeholder="Ketik NIM Anda..." type="text" name="NIM"/>
              <button type="submit" onClick={handleSubmit} className="w-[50%] md:w-[50%] my-5 md:my-0 font-Lato bg-gradient-to-r from-[#8A2D2D] to-[#6E2424] hover:bg-gradient-to-r hover:from-[#E1DAD1] hover:to-[#E1DAD1] hover:text-[#8A2D2D] hover:shadow-[0px_7px_20px_rgba(110,36,36,0.15),0px_10px_25px_1px_rgba(55,18,18,0.25)] transition-all active:bg-gradient-to-r active:from-[#BFB196] active:to-[#BFB196] rounded-3xl py-[6px] text-[#FFFFFF] hover:text-[#8A2D2D] active:text-[#8A2D2D] drop-shadow-[0px_4px_5px_rgba(110,36,36,0.1)] hover:drop-shadow-[0px_7px_20px_rgba(110,36,36,0.15)] active:drop-shadow-[0px_7px_20px_rgba(110,36,36,0.15)]">Periksa</button>
            </form>
          </div>
          {isRegistered ? 
          <Fade top>
            <div id="result" className="w-[90%] md:w-[45%] mt-[5vh] lg:mt-[10vh] rounded-[12px] lg:rounded-[20px] h-[40vh] md:h-[40vh] bg-[#35455D] flex justify-center items-center">
              <div id="confirm" className="w-[97%] h-[97%] lg:h-[90%] border-[3px] rounded-[15px] lg:rounded-[40px] flex flex-col justify-center items-center mx-auto">
                <h3 className="text-[#E1DAD1] text-[24px] md:text-[30px] mb-[20px]">
                  NIU Anda Terdaftar
                </h3>
                <div className="text-[#E1DAD1] font-Lato md:text-[20px] text-[14px] flex">
                  <ul>
                    <li>Nama</li>
                    <li>NIM</li>
                    <li>Prodi</li>
                    <li>Email</li>
                  </ul>
                  <ul className="mx-[25px]">
                    <li>:</li>
                    <li>:</li>
                    <li>:</li>
                    <li>:</li>
                  </ul>
                  <ul>
                    <li>{database.Name}</li>
                    <li>{database.Nim}</li>
                    <li>{database.Jurusan}</li>
                    <li>{database.Email}</li>
                  </ul>
                </div>
              </div>
          </div>
          </Fade>
        :
        <Fade top>
          <div id="notRegistered" className={`${notRegistered} font-Lato font-bold my-[50px] text-[30px] text-[#8A2D2D]`}>
            NIU Anda Tidak Terdaftar!
          </div>
        </Fade>
        }
        </div>     
      </div>
      <div className="h-[80vh] flex justify-center items-center mb-[10vh]">
        <img src={Hiasan_choose} alt="hiasan" className=""/>
      </div>
      <img src={lineFooter} alt="line" className="w-full h-auto"/>

    </>
  );
}

export default CekStatus;