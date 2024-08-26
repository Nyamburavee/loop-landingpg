import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const  Hero = () => {
    const [isOpen, Setisopen] = useState(false);

    const menuToggle = () =>{
        Setisopen(!isOpen)
    };

    const menuClose = ()  =>{
        Setisopen(false)

    };

    return(
        <header className=" bg-heroMobile bg-cover md:bg-heroDesktop px-6 py-8 md:px-20 md:py-12">
            <nav className=" flex flex-col md:flex-row">
                <div className=" flex flex-row md:mr-auto ">
                    <img className=" mr-auto" src="logo.svg" alt="logo" />
                    <img src="icon-menu.svg" alt="icon-menu" onClick={menuToggle} className="logo md:hidden" />
                </div>

                <div className={` text-white flex  flex-col md:flex-row gap-5 md:gap-5 ${isOpen ? ' bg-black w-96 px-5 text-2xl h-[600px] font-thin absolute right-0 top-0' : 'hidden md:flex md:gap-6'} `}>
                    {isOpen && (
                        <div className=" flex flex-row mt-8 mb-28 ">
                            <img src=" logo.svg" alt="logo" className=" mr-auto h-6" />
                            <img src="icon-close.svg" alt="icon-close" onClick={menuClose} />
                        </div>
                    ) }

                    <NavLink className=" uppercase md:normal-case " to="/About">About</NavLink>
                    <NavLink className=" uppercase md:normal-case " to="/Careers">Careers</NavLink>
                    <NavLink className=" uppercase md:normal-case" to="/Events">Events</NavLink>
                    <NavLink className=" uppercase  md:normal-case " to="/Products">Products</NavLink>
                    <NavLink className=" uppercase md:normal-case" to="/Support">Support</NavLink>

                </div>


            </nav>
            <div className=" border flex flex-col items-center justify-center
             border-white md:p-6 p-8 w-[400px] md:w-[450px] mt-40 mb-64  md:mb-12 ">
                <p className=" text-white text-6xl font-thin text-left ">IMMERSIVE EXPERIENCES THAT DELIVER</p>
            </div>

        </header>

    )

};

export default Hero

