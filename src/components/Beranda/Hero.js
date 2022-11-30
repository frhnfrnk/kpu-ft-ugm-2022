import React, { useEffect, useContext } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { Link, useNavigate } from "react-router-dom";
import Back_kertas from "../../assets/Hero/Back_kertas.png";
import Hiasan_wow from "../../assets/Hero/Hiasan_wow.png";
import iconCheck from "../../assets/ToastMessage/CheckCircle.png";
import warningCircle from "../../assets/ToastMessage/WarningCircle.png";
import { StateContext } from "../Context/context";
import { Fade } from "react-reveal";
import axios from 'axios';


export default function Hero() {

  const {isCompleted, setProfile, profile, clientId, setIsLogin, isLogin, isChoose, setIsChoose, isDPT, setIsDPT, isClose} = useContext(StateContext)
  let navigate = useNavigate();
  
  useEffect(() => {
    const initClient = () => {
          gapi.auth2.init({
          clientId: clientId,
          scope: ''
        });
     };
     gapi.load('client:auth2', initClient);
  });

  // useEffect(() => {
  //   if (isLogin) {

  function login(email){

     axios({
      baseURL: process.env.REACT_API_URL || "https://env-1613447.user.cloudjkt01.com",
      method: "GET",
      url:`/users/email/${email}`,
    })
    .then((response) => {
      setIsLogin(true)
      if(response.data.Email === undefined) {
        setIsDPT(false)
      }
      else{
        setIsDPT(true)
      }

    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    });

    axios({
      baseURL: process.env.REACT_API_URL || "https://env-1613447.user.cloudjkt01.com",
      method: "GET",
      url:`/pemilih/${email}`,
    })
    .then((response) => {
      if(response.data.Email === undefined) {
        setIsChoose(false)
        navigate('/vote')
      }
      else{
        setIsChoose(true)
        navigate('/terimakasih')
      }

    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    });
  }

  useEffect(() => {
      
  }, [profile, isDPT, isChoose]);

  const onSuccess = (res) => {
    setProfile(res.profileObj);
    login(res.profileObj.email)
    
  };
  const onFailure = (err) => {
    console.log('failed:', err);

  };



  return (
    <>
      {/*Hero Section Start*/}
        <div className="bg-[#E1DAD1] h-[100vh] w-[100%]">
          <div className="w-full bg-cover bg-center w-full h-full bg-no-repeat flex justify-center" style={{ backgroundImage: "url(" + Back_kertas + ")" }}>
            <div className="w-[100%] h-[100%] flex flex-col lg:flex-row justify-center items-center mt-[5vh] lg:mt-[-5vh]">
              <Fade left>
                <div className="w-full h-[40%] lg:w-[50%] mt-0 lg:mt-[-50px] flex flex-col lg:text-left justify-center items-center mx-auto pl-[9vw] md:pl-[25%] lg:pl-[9vw]">
                  <div className="mx-auto w-[90%] text-[#2A374A] font-Playfair-bold text-[54px] md:text-[95px]">
                    <h1 className="drop-shadow-[-8px_2px_10px_rgba(22,22,22,0.6)] lg:drop-shadow-[-8px_2px_10px_rgba(22,22,22,0.25)] mb-[-25px] lg:mb-[-50px]">KPUFT</h1>
                    <h1 className="drop-shadow-[-8px_2px_10px_rgba(22,22,22,0.7)] lg:drop-shadow-[-8px_2px_10px_rgba(22,22,22,0.25)]">UGM <span className="text-5xl lg:text-[85px]">2022</span></h1>
                  </div>
                  <div className="mx-auto w-[90%] text-[#2A374A] font-['Lato'] font-medium text-[16px] lg:mt-[-20px] lg:mb-[5px]">
                    <p>Pemilihan Umum</p>
                    <p>Ketua BEM KMFT UGM 2023</p>
                  </div>    
                  <p className="mx-auto w-[90%] text-[#6E2424] font-['Lato'] text-[12px] font-bold text-base">29 November - 1 Desember 2022</p>    
                  <div className="mx-auto w-[90%] mt-4 space-x-4">
                    
                    {!isClose ? 
                    // <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="bg-gradient-to-r from-[#8A2D2D] to-[#6E2424] text-[#FFFFFF] rounded-full px-4 py-2 font-semibold shadow-[0px_4px_10px_rgba(55,18,18,0.25)] hover:bg-gradient-to-r hover:from-[#E1DAD1] hover:to-[#E1DAD1] hover:text-[#8A2D2D] hover:shadow-[0px_7px_20px_rgba(110,36,36,0.15),0px_10px_25px_1px_rgba(55,18,18,0.45)] active:bg-gradient-to-r active:from-[#BFB196] active:to-[#BFB196] active:shadow-[0px_7px_20px_rgba(110,36,36,0.15),0px_10px_25px_1px_rgba(55,18,18,0.45)] active:border-none transition-all">Vote Sekarang!</button> 
                    <button href="#" className="bg-gradient-to-r from-[#959595] to-[#959595] text-[#FFFFFF] lg:text-[16px] text-[14px] rounded-full px-6 py-2 font-semibold shadow-[0px_4px_10px_rgba(55,18,18,0.25)] cursor-default">Vote Ditutup</button>
                    
                    : 
                    <GoogleLogin
                              clientId={clientId}
                              buttonText=""
                              render={renderProps => (
                                <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="bg-gradient-to-r from-[#8A2D2D] to-[#6E2424] text-[#FFFFFF] rounded-full px-4 py-2 font-semibold shadow-[0px_4px_10px_rgba(55,18,18,0.25)] hover:bg-gradient-to-r hover:from-[#E1DAD1] hover:to-[#E1DAD1] hover:text-[#8A2D2D] hover:shadow-[0px_7px_20px_rgba(110,36,36,0.15),0px_10px_25px_1px_rgba(55,18,18,0.45)] active:bg-gradient-to-r active:from-[#BFB196] active:to-[#BFB196] active:shadow-[0px_7px_20px_rgba(110,36,36,0.15),0px_10px_25px_1px_rgba(55,18,18,0.45)] active:border-none transition-all">Vote Sekarang!</button> 
                              )}
                              onSuccess={onSuccess}
                              onFailure={onFailure}
                              cookiePolicy={'single_host_origin'}
                              isSignedIn={true}
                          />
                    }

                    

                    <Link to="/info-calon"><button  className="border-[#A05252] hover:border-[#9D7E57] lg:text-[16px] text-[14px] active:border-[#7E6546] border-2 rounded-full px-7 py-1.5 text-[#A05252] font-semibold ">Lihat Calon</button></Link>
                  </div>         
                </div>
              </Fade>
              <Fade right>
                <div className="w-full h-[full] lg:w-[50%] flex justify-center items-start">
                  <img src={Hiasan_wow} className="w-[80%] lg:w-[100%]" alt="vote_image" />
                </div>
              </Fade>
            </div>
          </div>  

          {/* <div id='toast_success' className='absolute w-[500px] h-[48px] top-[-10vh] left-[50%] -ml-[200px] transition-all duration-[1000ms] flex justify-center'>
              <div className='bg-[#355D3B] w-[100%] h-full flex items-center justify-start rounded-[12px] shadow-[0px_10px_25px_1px_rgba(17,52,23,0.3)]'>
                  <img src={iconCheck} alt = "iconCheck" className='mx-[20px] w-[8%]'/>
                  <p className='font-Lato font-bold text-[#FFFFFF] text-[20px]'>Success :<span className='font-normal'> Your login is successfull</span></p>
              </div>
          </div>

          <div id='toast_failed' className='absolute w-[400px] h-[48px] top-[-10vh]  left-[50%] -ml-[200px] transition-all duration-[1000ms] flex justify-center'>
              <div className='bg-[#8A2D2D] w-[90%] h-full flex items-center justify-start rounded-[12px] shadow-[0px_10px_25px_1px_rgba(17,52,23,0.3)]'>
                  <img src={warningCircle} alt = "iconCheck" className='mx-[20px] w-[8%]'/>
                  <p className='font-Lato font-bold text-[#FFFFFF] text-[20px]'>Error :<span className='font-normal'> Your login is Failed</span></p>
              </div>
        </div> */}

        </div>
      {/*Hero Section End*/}
    </>
  );
}