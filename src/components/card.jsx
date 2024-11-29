import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import "../css/Card.css"



function card() {
  return (
    <>
    {/* headline text */}
    <div className='mt-[50px] flex flex-col '>
      <h1 className='text-[30px] md:text-[50px] lg:text-[60px] text-white text-center font-semibold  tracking-wide ' id='autoshow'>Redefining how you <span className='text-[#004FFF]'>connect</span> <br /> <span>with the game you love.</span> </h1>
    
    </div>
    

    {/* card section */}
    <div className='flex justify-center  gap-[80px] lg:justify-around lg:gap-0 items-center my-[50px] flex-col lg:flex-row '>
        {/* card 1 */}
        <div id='block' className="bg-[#00050e] h-[400px] w-[320px] rounded-xl  shadow-sm outline-offset-4 shadow-slate-900 flex flex-col justify-center items-center gap-[10px]">
              <DotLottieReact
                src="https://lottie.host/89e786d8-85fe-4d01-8661-5cfb4b24b3d3/OTifFcPUOI.lottie"
                loop
                autoplay
                className='h-[200px] w-[150px]'/>
              <h2 className='text-[40px] text-white text-center font-semibold leading-8 tracking-wide '>Premium Turf</h2>
              <p className='text-[15px] text-white text-center font-medium tracking-wide px-[5px]'>
              Experience professional-grade turf and facilities that elevate your game to the next level.
              </p>
        </div>     

      {/* card2 */}
      <div id='block' className="bg-[#00050e] h-[400px] w-[320px] rounded-xl shadow-sm shadow-slate-900 flex flex-col justify-center items-center gap-[10px]">
        <DotLottieReact
          src="https://lottie.host/0c277c11-2869-4beb-a422-161dca8e7cc4/8flkI519Sz.lottie"
          loop
          autoplay
          className='h-[200px] w-[320px]'/>      
        <h2 className='text-[40px] text-white text-center font-semibold leading-8 tracking-wide '>Lights, Action</h2>
        <p  className='text-[15px] text-white text-center font-semibold  tracking-wide'>
           With world-class floodlights, your game shines as bright as your passion, day or night.</p>    
      </div>

       {/* card3 */}
       <div id='block' className="bg-[#00050e] h-[400px] w-[320px] rounded-xl  shadow-sm shadow-slate-900 flex flex-col justify-center items-center gap-[10px]">
          <DotLottieReact
              src="https://lottie.host/baa13ab0-ee22-4c3d-b1b4-715e055b7a1a/EjgVBSIupZ.lottie"
              loop
              autoplay
              className='h-[200px] w-[300px]' />
          <h2 className='text-[40px] text-white text-center font-semibold leading-8 tracking-wide'>Game Zone</h2>
          <p className='text-[15px] text-white text-center font-medium  tracking-wide px-[5px]'>
            Step onto a field where every inch is crafted for competitive play and unforgettable moments</p>
       </div>


    </div> 
    {/* entire card div */}
    </>
  )
}

export default card