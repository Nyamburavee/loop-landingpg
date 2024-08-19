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
        <header className=" bg-heroMobile bg-cover md:bg-heroDesktop px-4 py-8">
            <nav className=" flex flex-col md:flex-row">
                <div className=" flex flex-row md:mr-auto ">
                    <img className=" mr-auto" src="logo.svg" alt="logo" />
                    <img src="icon-menu.svg" alt="icon-menu" onClick={menuToggle} className="logo md:hidden" />
                </div>

                <div className={` text-white flex  flex-col md:flex-row md:block md:gap-4 ${isOpen ? ' block bg-black w-96 px-3 text-2xl font-thin absolute right-0 top-0' : 'hidden'} `}>
                    {isOpen && (
                        <div className=" flex flex-row mt-8 mb-28 ">
                            <img src=" logo.svg" alt="logo" className=" mr-auto h-6" />
                            <img src="icon-close.svg" alt="icon-close" onClick={menuClose} />
                        </div>
                    ) }

                    <NavLink className=" uppercase md:lowercase" to="/About">About</NavLink>
                    <NavLink className=" uppercase md:lowercase" to="/Careers">Careers</NavLink>
                    <NavLink className=" uppercase md:lowercase" to="/Events">Events</NavLink>
                    <NavLink className=" uppercase md:lowercase" to="/Products">Products</NavLink>
                    <NavLink className=" uppercase md:lowercase" to="/Support">Support</NavLink>

                </div>


            </nav>
            <div className=" text-white text-4xl border border-white p-6">
                IMMERSIVE EXPERIENCES THAT DELIVER
            </div>

        </header>

    )

};

export default Hero

