import React from 'react'
import player from "../assets/final_player.png"
import location from "../assets/final_location.png"
import '../css/Detail.css'

function Detail() {
  return (

    <div>

    <div  className='container1'>
         <img id='slider1' src= {player} alt=""  className=' h-[200px] w-[350px] md:h-[300px] md:w-[600px] pr-[20px] md:pr-0' />
         <div  className='flex flex-col gap-[10px] w-[350px] md:w-[550px] ' >
         <h2 className='text-[40px] md:text-[50px] lg:text-[55px]  text-white font-semibold  tracking-wide'>Why <span className='text-[#004FFF]'>choose</span>  <br /> <span>VeBook?</span> </h2>
         <p className='text-[14px] md:text-[18px] text-white text-justify font-normal tracking-wide '>Discover a wide range of sports venues at your fingertips with a hassle-free booking process, 
          flexible time slots to fit your schedule, and exclusive deals and discounts to enhance your experience</p>
          </div>
    </div>

    <div  className='container2 ' >
      
    <div className='flex flex-col gap-[20px] w-[350px] md:w-[550px]   '>
         <h2 className='text-[40px] md:text-[50px] lg:text-[55px] text-white font-semibold  tracking-wide '>Find  <span className='text-[#004FFF]' >amazing venues</span> <br /> <span>near you!</span> </h2>
         <p className='text-[14px] md:text-[18px] text-white text-justify font-normal tracking-wide'>With VeBook, you can explore and book top-rated sports venues across Chennai city.
           Whether it’s a quick game with friends or a tournament, we’ve got you covered</p>
          </div>
         <img id='slider2'  src= {location} alt=""  className=' h-[200px] w-[350px] md:h-[300px] md:w-[600px] ' />
    </div>
    

    </div>
  
  )
}

export default Detail