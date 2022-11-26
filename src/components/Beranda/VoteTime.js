import React, { useEffect, useState }  from "react"
import Clock from "./Clock";


function VoteTime() {

  const endTime = new Date('November 30, 2022 17:00:00').getTime();
  const [currentTime,setcurrentTime] = useState(new Date().getTime());
  const gap = endTime - currentTime; //177670892
  

  const seconds = 1000; // in milliseconds
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const remainingDays = Math.floor(gap / days);
  const remainingHours = Math.floor( (gap % days) / hours);
  const remainingMinutes = Math.floor( (gap % hours) / minutes);
  const remainingSeconds = Math.floor( (gap % minutes) / seconds);

  

  useEffect(()=>{
    setTimeout(()=>setcurrentTime(new Date().getTime()),1000);
  },[currentTime]) // 11:30:55

  return (
    <div>
      <center>

        <Clock2 days={remainingDays} 
        hours={remainingHours} minutes={remainingMinutes}
        seconds={remainingSeconds} />

      </center>
    </div>
  )
}

export default Countdown