import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';


import Logo from '../../assets/Logo/logo_nav.png'
import Hamburger from '../../assets/Icon/Harmburger.svg'
import CloseBtn from '../../assets/Icon/close.svg'
import MenuItems from './MenuItem';


export default function Header(){

    

    const [isScroll, setIsScroll] = useState(false)
    const [activeLink, setActiveLink] = useState("")
    const [normalLink, setNormalLink] = useState("")

    const [isOpen, setIsOpen] = useState(false);
    const [navStyle, setNavStyle] = useState('menu h-[auto] absolute top-[-200px] transition-all duration-500 bg-[#35455D] w-full -z-0 lg:hidden');

    const menuStyle = 'h-10 flex justify-center items-center py-6 text-[#e8e4e3] text-sm active:bg-[#E1DAD1] active:text-[#8A2d2d]'
    const menuStyle2 = 'menu-nav text-sm  hover:text-[#8A2d2d] mx-6'

    // text-[#2a374a]

    window.addEventListener('scroll', () => {
        if(window.scrollY > 0){
            setIsScroll(true)
        }else{
            setIsScroll(false)
        }
    })


    useEffect(() => {
        if(isScroll){
            setActiveLink("text-[#E1DAD1] font-bold")
            setNormalLink("text-[#949FAF] font-normal")
        }
        else {
            setActiveLink("text-[#8A2d2d] font-bold")
            setNormalLink("text-[#2A374A] font-normal")
        }
    }, [isScroll])

    useEffect(() => {
        if(isOpen){
            setNavStyle("menu h-[auto] absolute top-[64px] transition-all duration-500 bg-[#35455D] w-full -z-0 lg:hidden")
        }
        else{
            setNavStyle("menu h-[auto] absolute top-[-200px] transition-all duration-500 bg-[#35455D] w-full -z-0 lg:hidden")
        }



    }, [isOpen])

    return (
        <>
            <header className={`h-auto w-full bg-[#35455D] font-Lato lg:flex z-50 lg:justify-between lg:items-center lg:px-[150px] fixed transition-all ${isScroll ? "lg:bg-[35455D]" : "lg:bg-transparent"}`}>
                <div className='h-16 flex justify-between px-5 '>
                    <div className='flex justify-center items-center'>
                        <img src={Logo} className="h-7 pr-2"/>
                        <h1 className={` text-[#e8e4e3] font-bold  text-xs ${isScroll ? "lg:text-[#E1DAD1]" : "lg:text-[#2a374a]"}`}>KPUFT UGM 2022</h1>
                    </div>
                    <div 
                        onClick={()=>setIsOpen(!isOpen)}  
                        className='hamburger h-5 my-auto flex flex-col justify-around px-5 cursor-pointer transition-all duration-500 lg:hidden'>
                        {
                            isOpen ? <img src={CloseBtn} /> : <img src={Hamburger} />
                        }
                    </div>
                </div>
                <div className={navStyle}>
                {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={item.url} end className={({isActive}) => (isActive ? activeLink : normalLink)} >
                                        <div className={menuStyle} id={item.id}>{item.label}</div>
                                    </NavLink>
                                </li>
                            )
                        })}
                </div>

                <div className="hidden lg:flex">
                    <ul className='flex flex-row'>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={item.url} end className={({isActive}) => (isActive ? activeLink : normalLink)}>
                                        <div className={`${menuStyle2}`} id={item.id}>{item.label}</div>
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </header>
            

        </>
        
    );
}
