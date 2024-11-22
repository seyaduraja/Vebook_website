import React from 'react'
import player from "../assets/final_player.png"
import location from "../assets/final_location.png"
import '../css/Detail.css'

function Detail() {
  return (

    <div>

    <div  className='container1'>
         <img src= {player} alt="" className=' h-[300px] w-[600px]' />
         <div className='flex flex-col gap-[10px] w-[400px]   md:w-[650px] '>
         <h2 className='text-[30px] md:text-[50px] lg:text-[60px]  text-white font-semibold  tracking-wide'>Why Choose VeBook?</h2>
         <p className='text-[18px] text-white text-justify font-semibold tracking-wide '>Discover a wide range of sports venues at your fingertips with a hassle-free booking process, 
          flexible time slots to fit your schedule, and exclusive deals and discounts to enhance your experience</p>
          </div>
    </div>

    <div  className='container2'>
    <div className='flex flex-col gap-[10px] w-[400px] md:w-[650px] '>
         <h2 className='text-[30px] md:text-[50px] lg:text-[60px] text-white font-semibold  tracking-wide'>Find Venues Near You!</h2>
         <p className='text-[18px] text-white text-justify font-semibold tracking-wide'>With VeBook, you can explore and book top-rated sports venues across Chennai city.
           Whether it’s a quick game with friends or a tournament, we’ve got you covered</p>
          </div>
         <img src= {location} alt=""  className=' h-[300px] w-[600px] '/>
    </div>

    </div>
  
  )
}

export default Detail