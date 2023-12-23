import Image from 'next/image';
import React from 'react';

const Featured = () => {
    return (
        <div className='mt-16'>
            <h1 className='lg:text-3xl text-xl font-semibold uppercase pb-3'>Featured</h1>
           <div className='grid lg:grid-cols-2 gap-5'>
            {/* first image  */}
            <div>
           <div className="relative" >
      <Image
      src="https://images.unsplash.com/photo-1674081974659-f51b4dc2a253?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      width={800} // Set an appropriate width value
      height={400} // Set an appropriate height value
      sizes="100vw"
      style={{ width: '100%', height: '400px' }} 
      className='rounded-xl'
    />
    
    <div className="absolute bottom-0 left-0 w-full  text-white p-6 lg:mb-3 lg:ms-8">
    <p className="lg:text-4xl text-2xl font-bold pb-6 font-[Poppins] ">Women's Air Jordan 11'Neapolitan'</p>
   

    <div className="flex lg:flex-row flex-col lg:gap-6 gap-2  ">
    <button
  type="button"
  className="inline-block  lg:h-12  rounded bg-neutral-50 lg:px-6 pb-2 pt-2.5 lg:text-lg font-semibold uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]">
  Get Notified
</button>

    <button
  type="button"
  className="inline-block  lg:h-12  rounded bg-neutral-50 px-6 pb-2 pt-2.5 lg:text-lg font-semibold uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]">
 Shop AJ11 Collection
</button>
    
    </div>
  </div>
      </div>  
        </div>

        {/* Second img  */}
        <div>
           <div className="relative" >
      <Image
      src="https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      width={800} // Set an appropriate width value
      height={400} // Set an appropriate height value
      sizes="100vw"
      style={{ width: '100%', height: '400px' }} 
      className='rounded-xl'
    />
    
    <div className="absolute bottom-0 left-0 w-full  text-white p-6 mb-3 lg:ms-8">
    <p className="lg:text-4xl text-2xl font-bold lg:pb-6 font-[Poppins]  mb-3">LeBorn XXI'Tahitian'</p>
  

    <button
  type="button"
  className="inline-block  lg:h-12 lg:w-1/4 w-1/3  rounded bg-neutral-50 lg:px-6 pb-2 pt-2.5 lg:text-lg font-semibold uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]">
 shop
</button>
   

    </div>
    
   
      </div>  
        </div>
            </div> 
        </div>
    );
};

export default Featured;