import React, { useEffect, useState } from 'react'

const Clock = ({days,hours,minutes,seconds}) => {
    
    const clockStyle = "bg-[#2A374A] w-[50px] h-[70px] rounded-[10px] flex justify-center items-center flex-col text-[#E8E4E3] font-bold"
    const textCompleted = document.getElementsByClassName("textCompleted");


    useEffect(()=>{
        if(days === 0 && hours === 0 && minutes === 0 && seconds === 0){
            textCompleted[0].style.display = "block";
        }
        else{
            textCompleted[0].style.display = "none";
        }
    },[days,hours,minutes,seconds])

    return (
        <div className='w-full h-[20vh] flex flex-col items-center justify-center pt-[10vh] drop-shadow=[0px_5px_10px_rgba(63,50,35,0.15)] drop-shadow-[0px 12px 20px rgba(63,50,35,0.5)]'>
            <h1 className='text-[30px] font-bold font-Playfair-bold  mb-[25px]'>The votes begin in</h1>
            <div className='w-[50%] flex items-center justify-center text-[30px] font-Lato-bold'>
                    <p className={clockStyle} id='days'>{days}</p>
                    <p className='mx-[28px]'>:</p>
                    <p className={clockStyle} id='hours'>{hours}</p>
                    <p className='mx-[28px]'>:</p>
                    <p className={clockStyle} id='minutes'>{minutes}</p>
                    <p className='mx-[28px]'>:</p>
                    <p className={clockStyle} id='second'>{seconds}</p>
            </div>

            <div className='textCompleted w-full h-full flex justify-center items-center'>
                <h1 className='text-[30px] font-bold font-Playfair-bold'>Voting sedang berlangsung!</h1>
            </div>
        </div>
    )
}

export default Clock