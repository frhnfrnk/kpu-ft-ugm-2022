import { NavLink } from "react-router-dom";
import MenuItems from "../Header/MenuItem";


export default function Footer(){

    const titleStyle = "text-[#949FAF] font-bold font-Lato text-[1rem] lg:text-[1.5rem]"
    const unorderedListStyle = "text-[#fefefe] font-normal flex flex-col text-[12px] lg:text-[16px]"
    const listStyle = "my-[5px] hover:text-[#BFB196] hover:font-bold"

    return (
        <>
            <footer className="w-full bg-[#35455D] h-auto lg:h-[275px] flex flex-col-reverse lg:flex-row p-[20px] lg:p-0 lg:px-[150px] lg:justify-between lg:items-center">
                <div className="flex flex-col w-full lg:w-[40%]">
                    <h1 className="text-[20px] lg:text-[30px] font-Playfair text-[#fefefe] font-medium">Komisi Pemilihan Umum 2022<br/> Fakultas Teknik<br/> Universitas Gadjah Mada</h1>
                    <p className="text-[#949FAF] text-[14px] font-Lato mt-[10px] lg:mt-[20px]">Jl. Grafika No.2, Senolowo, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 5528</p>
                </div>
                <div className="flex flex-row w-full lg:w-[60%] h-full mb-[25px] lg:mb-0 items-start justify-between  lg:justify-end">
                    <div className="h-full lg:pt-[45px] lg:w-[25%]">
                        <h3 className={titleStyle}>Sitemap</h3>
                        <ul className={unorderedListStyle}>
                            {MenuItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink to={item.url} end 
                                        // className={({isActive}) => (isActive ? activeLink : normalLink)}
                                        >
                                            <div className={listStyle} >{item.label}</div>
                                        </NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="h-full lg:pt-[45px] lg:w-[25%]">
                        <h3 className={titleStyle}>Kontak</h3>
                        <ul className={unorderedListStyle}>
                            <li className={listStyle}>02193129831</li>
                            <li className={listStyle}>kpuft@gmail.com</li>
                        </ul>
                    </div>
                    <div className="h-full lg:pt-[45px] lg:w-[25%]">
                        <h3 className={titleStyle}>Sosial Media</h3>
                        <ul className={unorderedListStyle}>
                            <li className={listStyle}>Instagram</li>
                            <li className={listStyle}>Facebook</li>
                        </ul>
                    </div>
                </div> 
                
            </footer>
        </>
        
    );
}
