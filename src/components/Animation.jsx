import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function App() {
  return (
    <>
    <div className='mt-[50px] flex flex-col '>
    <h1 className='text-[30px] md:text-[50px] lg:text-[60px] text-white text-center font-semibold  tracking-wide ' id='autoshow'>Step into this  <span className='text-[#004FFF]'>mini field</span> and play! </h1>
    
    </div>
    <div >
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/Z2a3-ve8FFvFP46E/scene.splinecode" />
      </Suspense>
    </div>
    
    </>
  );
}

