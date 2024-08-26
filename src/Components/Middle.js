import React from "react";

const Middle = ({creations}) => {
    return(
        <section className=" bg-white pb-20 ">
            <article className=" px-6 py-40 flex flex-col md:flex-row md:px-28">
                <div>
                    <img src="/mobile/image-interactive.jpg" alt=" Image-interactive" />
                </div>

                <div className=" mt-14 md:mt-36 md:absolute md:left-[550px] p-10 mb-10 md:w-[600px] bg-white">
                    <h2 className=" text-black text-5xl text-center md:text-left mb-10">THE LEADER IN INTERACTIVE VR</h2>
                    <p className=" text-darkgray font-bold text-2xl md:text-xl md:text-left text-center leading-loose ">Founded in 2011 Loopstudios has been producing world-class 
                        virtual reality projects for some of the leading companies around the globe.
                        Our award-winning creations has transformed businesses through digital experiences 
                        that bind to their brand.
                    </p>
                </div>
            </article>

            <article className=" mb-20 md:mb-0 mx-10 md:mx-0">
                <div className=" md:flex md:flex-row md:px-40 mb-24 md:mb-20">
                    <h2 className=" text-5xl text-center font-thin mr-auto md:text-left">OUR CREATIONS</h2>
                    <button className=" hidden md:block w-44 border-4 border-veryDarkGray text-xl p-2">SEE ALL</button>
                </div>
                <div className=" grid md:grid-cols-4 gap-10 md:gap-6 md:px-40 ">
                    {creations.map((creation, index) => (
                        <div className=" relative ">
                            <img
                                src={creation.imgMobile}
                                alt={creation.title}
                                className=" md:hidden"
                            
                            />
                            <img
                                src={creation.imageDesktop}
                                alt={creation.title}
                                className=" hidden md:block w-80"
                            
                            />
                            <div className=" text-white w-72 md:w-28 text-5xl font-thin md:text-2xl absolute bottom-12 left-8 z-30 ">{creation.title}</div>
                        </div>
                    ))}

                </div>
                <div className=" flex flex-row justify-center mt-20"> 
                    <button className=" md:hidden border-4 border-veryDarkGray w-56 p-3 text-2xl font-bold tracking-wider ">SEE MORE</button>

                </div>
            </article>
        </section>
    )
};

export default Middle