import React from 'react'
import player from "../assets/final_player.png"
import location from "../assets/final_location.png"
import '../css/Detail.css'

function Detail() {
  return (

    <div className='w-full flex flex-col justify-center items-center'>

      <div className='flex lg:flex-row justify-center items-center md:px-8 px-6 py-12 gap-8 my-[100px] flex-col-reverse' id='container1'>

        <img id='slider1' src={player} alt="" className='  xl:h-[300px] xl:w-[600px] lg:h-[250px] lg:w-[450px] ' loading="lazy" />

        <div className='flex flex-col gap-[20px] ' >
          <h2 className='text-[30px] md:text-[45px] text-white font-semibold text-right tracking-wide'>Why <span className='text-[#004FFF]'>choose</span> <span>VeBook?</span> </h2>
          <p className='text-[14px] md:text-[18px] text-white font-normal text-justify tracking-wide  '>Discover a wide range of sports venues at your fingertips with a hassle-free booking process,
            flexible time slots to fit your schedule, and exclusive deals and discounts to enhance your experience</p>
        </div>
      </div>

      <div className='flex lg:flex-row justify-center items-center md:px-8 px-6 py-12 gap-8 my-[100px] flex-col' id='container2' >

        <div className='flex flex-col gap-[20px]    '>
          <h2 className='text-[30px] md:text-[45px] text-white font-semibold  tracking-wide '>Find  <span className='text-[#004FFF]' >amazing venues</span> <br /> <span>near you!</span> </h2>
          <p className='text-[14px] md:text-[18px] text-white text-justify font-normal tracking-wide  '>With VeBook, you can explore and book top-rated sports venues across Chennai city.
            Whether it’s a quick game with friends or a tournament, we’ve got you covered</p>
        </div>

        <img id='slider2' src={location} alt="" className=' xl:h-[300px] xl:w-[600px] lg:h-[250px] lg:w-[450px] ' loading="lazy" />

      </div>


    </div>

  )
}

export default Detail