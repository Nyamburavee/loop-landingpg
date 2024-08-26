import React from "react";

const Footer = () => {
    return(
        <section className=" bg-black py-28 md:py-14 flex flex-col items-center md:flex-row px-10" >
            <article className=" mb-24 md:mb-0 flex flex-col items-center md:items-start md:mr-auto">
                <img src="logo.svg" alt="footer-logo" />
                <div className=" mt-16 md:mt-8 text-white text-center text-3xl md:text-xl flex flex-col gap-8 md:flex-row">
                    <h4>About</h4>
                    <h4>Careers</h4>
                    <h4>Events</h4>
                    <h4>Products</h4>
                    <h4>Support</h4>
                </div>
            </article>


            <article className=" flex flex-col items-center md:items-end">
                <div className=" flex flex-row mb-8 gap-8 items-center md:items-end">
                        <img className=" w-10 md:w-8" src="icon-facebook.svg" alt="icon-facebook" />
                        <img className=" w-10 md:w-8" src="icon-twitter.svg" alt="icon-twitter" />
                        <img className=" w-10 md:w-8" src="icon-pinterest.svg" alt="icon-pinterest" />
                        <img className=" w-10 md:w-8" src="icon-instagram.svg" alt="icon-instagram" />

                    </div>
                    <div className=" flex flex-row">
                        <div class="flex items-center justify-center  w-18 h-18 rounded-full text-white">
                            &copy;
                        </div>
                        <p className=" ml-1 text-darkgray text-xl">2021 Loopstudios. All rights reserved.</p>
                            
                        
                    </div>

            </article>

        </section>
    )
};

export default Footer