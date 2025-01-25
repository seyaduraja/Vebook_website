import React from 'react'
import foot from "../assets/goodimg.jpg"
import '../css/Header.css'
import cricket from "../assets/cricket.jpg"
import football from "../assets/football.jpg"
import tennis from "../assets/tennis.jpg"
import swimming from "../assets/swimming.jfif"

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Header() {
  return (
    <>


      <div className='titleimage' >

        {/* <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={1}
      loop = {true}
      // navigation
      // pagination={{ clickable: true }} 
      autoplay={{
        delay: 2000,
        
      }}


    >

      <SwiperSlide className='flex justify-center items-center' >
        <div className='relative flex justify-center items-center'>
        <div className='bg-gradient-to-b from-transparent to-[#001F4D] opacity-[0.8] absolute w-[100%] h-[100vh]'> </div>
             <img className='w-[100%] h-[100vh] object-cover  '  src= {football} alt="" />
        </div>
        </SwiperSlide>


      <SwiperSlide className='flex justify-center items-center'>
      <div className='relative flex justify-center items-center'>
        <div className='bg-gradient-to-b from-transparent to-[#001F4D] opacity-[0.8] absolute w-[100%] h-[100vh]'> </div>
             <img className='w-[100%] h-[100vh] object-cover flex justify-center items-center '  src= {cricket} alt="" />
        </div>
      </SwiperSlide>


      <SwiperSlide className='flex justify-center items-center'>        
        <div className='relative flex justify-center items-center'>
        <div className='bg-gradient-to-b from-transparent to-[#001F4D] opacity-[0.8] absolute w-[100%] h-[100vh]'> </div>
             <img className='w-[100%] h-[100vh] object-cover flex justify-center items-center '  src= {tennis} alt="" />
        </div>
        </SwiperSlide>


      <SwiperSlide className='flex justify-center items-center'>
      <div className='relative flex justify-center items-center'>
        <div className='bg-gradient-to-b from-transparent to-[#001F4D] opacity-[0.8] absolute w-[100%] h-[100vh]'> </div>
             <img className='w-[100%] h-[100vh] object-cover flex justify-center items-center '  src= {swimming} alt="" />
        </div>
      </SwiperSlide>

 
      
    </Swiper> */}
        <div className='relative flex justify-center items-center'>
          <div className='bg-gradient-to-b from-transparent to-[#001F4D] opacity-[0.8] absolute w-[100%] h-[100vh]'> </div>
          <img className='w-[100%] h-[100vh] object-cover flex justify-center items-center ' src={football} alt="" />
        </div>

        <div className='titletext'>
          <svg width="600" height="100" viewBox="0 0 506 97" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M53.248 95H36.352L0.384 5.52799H17.28L44.8 72.344L72.32 5.52799H89.216L53.248 95ZM164.761 67.224H111.385C111.726 72.1733 113.988 76.184 118.169 79.256C122.35 82.2427 127.129 83.736 132.505 83.736C141.038 83.736 147.524 81.048 151.961 75.672L160.153 84.632C152.814 92.2267 143.257 96.024 131.481 96.024C121.924 96.024 113.774 92.8667 107.033 86.552C100.377 80.152 97.049 71.6187 97.049 60.952C97.049 50.2 100.462 41.6667 107.289 35.352C114.116 29.0373 122.137 25.88 131.353 25.88C140.654 25.88 148.548 28.696 155.033 34.328C161.518 39.8747 164.761 47.5547 164.761 57.368V67.224ZM111.385 55.96H150.425C150.425 50.2427 148.633 45.848 145.049 42.776C141.465 39.704 137.028 38.168 131.737 38.168C126.532 38.168 121.838 39.7893 117.657 43.032C113.476 46.1893 111.385 50.4987 111.385 55.96ZM223.15 95H183.982V5.52799H218.798C224.857 5.52799 230.062 6.25333 234.414 7.70399C238.851 9.15466 242.137 11.1173 244.27 13.592C248.366 18.2 250.414 23.4053 250.414 29.208C250.414 36.2053 248.195 41.4107 243.758 44.824C242.137 46.0187 241.027 46.7867 240.43 47.128C239.833 47.384 238.766 47.8533 237.23 48.536C242.777 49.7307 247.171 52.248 250.414 56.088C253.742 59.8427 255.406 64.536 255.406 70.168C255.406 76.3973 253.273 81.9013 249.006 86.68C243.971 92.2267 235.353 95 223.15 95ZM199.086 42.648H218.286C229.209 42.648 234.67 38.936 234.67 31.512C234.67 27.2453 233.347 24.1733 230.702 22.296C228.057 20.4187 223.961 19.48 218.414 19.48H199.086V42.648ZM199.086 81.048H222.766C228.313 81.048 232.537 80.1947 235.438 78.488C238.425 76.696 239.918 73.368 239.918 68.504C239.918 60.568 233.561 56.6 220.846 56.6H199.086V81.048ZM289.589 77.08C293.685 81.176 298.848 83.224 305.077 83.224C311.306 83.224 316.426 81.176 320.437 77.08C324.533 72.8987 326.581 67.5227 326.581 60.952C326.581 54.3813 324.533 49.048 320.437 44.952C316.426 40.7707 311.306 38.68 305.077 38.68C298.848 38.68 293.685 40.7707 289.589 44.952C285.578 49.048 283.573 54.3813 283.573 60.952C283.573 67.5227 285.578 72.8987 289.589 77.08ZM330.677 85.912C323.85 92.6533 315.317 96.024 305.077 96.024C294.837 96.024 286.304 92.6533 279.477 85.912C272.65 79.0853 269.237 70.7653 269.237 60.952C269.237 51.1387 272.65 42.8613 279.477 36.12C286.304 29.2933 294.837 25.88 305.077 25.88C315.317 25.88 323.85 29.2933 330.677 36.12C337.504 42.8613 340.917 51.1387 340.917 60.952C340.917 70.7653 337.504 79.0853 330.677 85.912ZM374.497 77.08C378.593 81.176 383.756 83.224 389.985 83.224C396.214 83.224 401.334 81.176 405.345 77.08C409.441 72.8987 411.489 67.5227 411.489 60.952C411.489 54.3813 409.441 49.048 405.345 44.952C401.334 40.7707 396.214 38.68 389.985 38.68C383.756 38.68 378.593 40.7707 374.497 44.952C370.486 49.048 368.481 54.3813 368.481 60.952C368.481 67.5227 370.486 72.8987 374.497 77.08ZM415.585 85.912C408.758 92.6533 400.225 96.024 389.985 96.024C379.745 96.024 371.212 92.6533 364.385 85.912C357.558 79.0853 354.145 70.7653 354.145 60.952C354.145 51.1387 357.558 42.8613 364.385 36.12C371.212 29.2933 379.745 25.88 389.985 25.88C400.225 25.88 408.758 29.2933 415.585 36.12C422.412 42.8613 425.825 51.1387 425.825 60.952C425.825 70.7653 422.412 79.0853 415.585 85.912ZM457.869 95H443.533V0.0239944H457.869V55.832L485.517 26.904H503.949L478.093 53.912L505.869 95H488.461L468.237 65.176L457.869 75.672V95Z" fill="white" />
          </svg>
          <h1 className='text-white text-[30px]'>Book. <span className='text-[#004FFF]'>Play.</span> Excel. </h1>
        </div>

      </div >





    </>
  )
}

export default Header