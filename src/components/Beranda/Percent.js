import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { RingProgress } from '@ant-design/plots';
import axios from 'axios';



export default function Percent () {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios({
            baseURL: process.env.REACT_API_URL || "https://env-1613447.user.cloudjkt01.com",
            method: "GET",
            url:`/departemen`,
          })
          .then((response) => {
            setData(response?.data?.rows);
      
          })
          .catch((error) => {
            if (error.response) {
              console.log(error.response)
              console.log(error.response.status)
              console.log(error.response.headers)
              }
          });
    }, []);
    const DemoRingProgress = () => {
        const database = (data[8]?.Count/data[8]?.Jumlah).toFixed(2);
        // console.log(database);
       const config = {
         autoFit: false,
         percent: database,
         color: ['#8A2D2D', '#BFB196'],
         statistic: {
             title: {
                 style: {
                     color: '#8A2D2D',
                 },
                 formatter: () => `${database}%`,
               },
               content:false,
           },
       };
       return <RingProgress {...config} style={{height:"14vw", width:"full"}}/>;
     };
    //  console.log(data)
    return(
        <div className="h-[50vh] w-full lg:mt-[5vh] xl:mt-[20vh]">
            <div className='xl:w-2/3 lg:w-4/5 w-full mx-auto h-[60vh] mt-[5vh]'>
                <div className='w-full h-full bg-no-repeat bg-contain 2xl:bg-cover pt-1' style={{ backgroundImage: "url(Beranda/Percent/Presentase.png)" }}>
                    <div className='justify-item-center place-content-center lg:mt-[5vh] mt-[2vh]'>
                        <p className='font-Playfair text-white font-semibold md:text-2xl lg:text-3xl text-base text-center '>Live Presentase Jumlah Pemilih</p>
                    </div>
                    <div className='flex flex-row justify-center mt-[3vw] ml-4'>
                        <div className='lg:text-3xl md:text-xl text-sm lg:w-[11vw] w-[20vw]'>
                            <DemoRingProgress  /> 
                        </div>
                        <div className='md:ml-5 ml-1 text-[9px] sm:text-base md:text-xl lg:text-2xl text-white font-Lato font-semibold mt-4 2xl:text-4xl 2xl:ml-11 xl:mt-12'>
                            <p>Total</p>
                            <p>Votes</p>
                            <p>({String(data[8]?.Count).padStart(4, '0')})</p>
                        </div>
                        <div className='ml-2 sm:ml-5 h-[16vw] lg:h-[12vw] bg-[#CACACA] w-[1px] mx-2 sm:mx-6 2xl:mx-14'/>
                        <div className='text-white font-Lato text-[9px] sm:text-xs md:text-base lg:text-sm xl:text-base 2xl:text-lg'>
                            <div className='flex flex-row gap-x-2 md:gap-x-6 mb-6'>
                                {
                                    data?.map((item, index) => {
                                        if(index<4){
                                            return(
                                                <div>
                                                    <p className='font-bold'>
                                                        {(item?.Count/item.Jumlah*100).toFixed(2)}% ({item.Count})
                                                    </p>
                                                    <p className=''>
                                                        {item?.Name}
                                                    </p>
                                                </div>
                                            )
                                        }else{
                                            return null;
                                        }
                                    })
                                }    
                            </div>
                            <div className='flex flex-row'>
                            <div className='flex flex-row gap-x-2 md:gap-x-6'>
                            {
                                    data?.map((item, index) => {
                                        if(index<8 && index>3){
                                            return(
                                                <div>
                                                    <p className='font-bold'>
                                                        {(item?.Count/item.Jumlah*100).toFixed(2)}% ({item.Count})
                                                    </p>
                                                    <p className=''>
                                                        {item?.Name}
                                                    </p>
                                                </div>
                                            )
                                        }else{
                                            return null;
                                        }
                                    })
                                }            
                            </div>                             
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}