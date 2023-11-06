import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div>
           <div className="relative" >
      <Image
      src="https://images.unsplash.com/flagged/photo-1553802922-2eb2f7f2c65b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      width={800} // Set an appropriate width value
      height={600} // Set an appropriate height value
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }} 
      className='rounded-xl'
    />
    
    <div className="absolute bottom-0 left-0 w-full  text-white p-6 mb-10 ms-8">
    <p className="text-8xl font-extrabold pb-6 font-[Poppins] ">Winter 2023-2024</p>
    <p className="text-5xl font-bold pb-10 ">Curated with stefano pilati</p>

    <div className="flex gap-6 pb-10  ">
    <button className="btn btn-active btn-neutral  h-14 w-1/4 text-xl ">Shop Women</button>
    <button className="btn btn-active btn-neutral h-14 w-1/4 text-xl">Shop Men</button>
    </div>

    </div>
    
   
      </div>  
        </div>
    );
};

export default Banner;