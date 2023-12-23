import Image from 'next/image';
import React from 'react';

const HolidayFrame = () => {
    return (
        <div className='mt-20'>
            <h1 className='lg:text-3xl text-xl font-semibold uppercase pb-3'>Holiday Hall of Frame</h1>
<div className='bg-[#7E1717]  '>
             
           <div className='grid lg:grid-cols-2 grid-cols-1 pt-10 py-4'>

            {/* 1st side  */}
            <div className=' p-8 text-white'>
            <h1 className='lg:text-5xl text-2xl font-bold uppercase py-4'>All The Greatest Gifts</h1>
            <p className='lg:text-xl text-lg'>Explore our most legendary gifts-from coveted kicks to comfy apparel and more.</p>

            <div className="flex lg:flex-row flex-col gap-4 p-5 ps-0  ">
    <button
  type="button"
  className="inline-block   rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-lg font-semibold uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]">
  shop Shoes
</button>

    <button
  type="button"
  className="inline-block   rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-lg font-semibold uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]">
 Shop Clothing
</button>

    <button
  type="button"
  className="inline-block   rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-lg font-semibold uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]">
 Stocking Stuffers
</button>
    
    </div>

            </div>

            {/* 2nd side  */}
            <div className=' images flex lg:flex-row flex-col gap-6 lg:me-10 sm:ms-10 '>
            <Image
      src="https://images.unsplash.com/photo-1636718281461-d6570e49c4b4?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      width={225} // Set an appropriate width value
      height={110} // Set an appropriate height value
      
      style={{ height: '230px' }} 
      className=' border-yellow-600 border-4   '
    />
     <Image
      src="https://images.unsplash.com/photo-1530893608544-cd10fda1ac14?auto=format&fit=crop&q=80&w=1908&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      width={225} // Set an appropriate width value
      height={110} // Set an appropriate height value
      
      style={{ height: '230px' }} 
      className=' border-orange-600 border-4'
    /> 
     <Image
      src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      width={225} // Set an appropriate width value
      height={110} // Set an appropriate height value
      
      style={{ height: '230px' }} 
      className=' border-red-600 border-4'
    />
            </div>
            </div> 
        </div>
        </div>
        
    );
};

export default HolidayFrame;