import { NavLink } from "react-router-dom";
import MenuItems from "../Header/MenuItem";

export default function Footer(){

    return (
        <>
            <footer className="w-full bg-[#35455D] h-[275px] flex flex-row px-[150px] justify-between items-center">
                <div className="flex flex-col w-[45%]">
                    <h1 className="text-[30px] font-Playfair text-[#fefefe] font-medium">Komisi Pemilihan Umum 2022<br/> Fakultas Teknik<br/> Universitas Gadjah Mada</h1>
                    <p className="text-[#949FAF] font-Lato mt-[20px]">Jl. Grafika No.2, Senolowo, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 5528</p>
                </div>
                <div className="flex flex-row w-[55%] h-full items-start  justify-around">
                    <div className="h-full pt-[45px]">
                        <h3 className="text-[#949FAF] font-bold font-Lato text-[24px]">Sitemap</h3>
                        <ul className="text-[#fefefe] font-normal flex flex-col">
                            {MenuItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink to={item.url} end 
                                        // className={({isActive}) => (isActive ? activeLink : normalLink)}
                                        >
                                            <div className="my-[5px]" >{item.label}</div>
                                        </NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="h-full pt-[45px]">
                        <h3 className="text-[#949FAF] font-bold font-Lato text-[24px]">Kontak</h3>
                        <ul className="text-[#fefefe] font-normal flex flex-col">
                            <li className="my-[5px]">02193129831</li>
                            <li className="my-[5px]">kpuft@gmail.com</li>
                        </ul>
                    </div>
                    <div className="h-full pt-[45px]">
                        <h3 className="text-[#949FAF] font-bold font-Lato  text-[24px]">Sosial Media</h3>
                        <ul className="text-[#fefefe] font-normal flex flex-col">
                            <li className="my-[5px]">Instagram</li>
                            <li className="my-[5px]">Facebook</li>
                        </ul>
                    </div>
                </div> 
                
            </footer>
        </>
        
    );
}
