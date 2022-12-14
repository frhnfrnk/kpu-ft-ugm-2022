import React, { useEffect } from 'react'
import { useContext } from 'react';
import { StateContext } from '../Context/context';
import Zoom from 'react-reveal/Zoom';

const Clock = ({days,hours,minutes,seconds}) => {
    const {setIsCompleted,isClose, setIsClose} = useContext(StateContext)
    
    const clockStyle = "bg-[#2A374A] p-[10px] rounded-[10px] flex justify-center items-center flex-col text-[#E8E4E3] font-bold"
    const textCompleted = document.getElementById("textCompleted");
    const clock = document.getElementById("clock");


    useEffect(()=>{
        if(days === 0 && hours === 0 && minutes === 0 && seconds === 0){
            setIsClose(true);
        }
        else if(days < 0 && hours < 0 && minutes < 0 && seconds < 0){
            setIsClose(true);
        }
        else{
            setIsClose(false);
        }
    },[days,hours,minutes,seconds])

    return (
        <Zoom>
            <div className='w-[80%] lg:w-full h-[20vh] flex flex-col items-center justify-center pt-[10vh] lg:mb-[5vh] mb-[10vh] drop-shadow=[0px_5px_10px_rgba(63,50,35,0.15)] drop-shadow-[0px 12px 20px rgba(63,50,35,0.5)]'>
                {/* <h1 className='text-[30px] text-[#2A374A] font-bold font-Playfair-bold  mb-[25px]'>The votes close in</h1> */}
                {/* {isClose ? 
                null
                : <div id='clock' className='w-[50%] flex items-center justify-center text-[30px] font-Lato-bold'>
                {days < 10 ? <p className={clockStyle} id='days'>0{days}</p> : <p className={clockStyle} id='days'>{days}</p>}
                <p className='mx-[14px] lg:mx-[28px]'>:</p>
                {hours < 10 ? <p className={clockStyle} id='hours'>0{hours}</p> : <p className={clockStyle} id='hours'>{hours}</p>}
                <p className='mx-[12px] lg:mx-[28px]'>:</p>
                {minutes < 10 ? <p className={clockStyle} id='minutes'>0{minutes}</p> : <p className={clockStyle} id='minutes'>{minutes}</p>}
                <p className='mx-[12px] lg:mx-[28px]'>:</p>
                {seconds < 10 ? <p className={clockStyle} id='seconds'>0{seconds}</p> : <p className={clockStyle} id='seconds'>{seconds}</p>}
                </div>} */}

                <div id='textCompleted' className='textCompleted w-full h-full flex justify-center items-center'>
                    <h1 className='text-[24px] md:text-[40px] font-bold font-Playfair-bold'>Voting sedang berlangsung!</h1>
                </div>
            </div>
        </Zoom>
    )
}

export default Clock