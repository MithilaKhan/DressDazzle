import Image from 'next/image';
import React from 'react';
import { BsArrowRightCircle } from "react-icons/bs";
const Trending = () => {
    return (
        <div className='mt-20 mb-16'>
            <h1 className='text-3xl font-semibold uppercase pb-3 flex items-center'>Trending <span className='ps-2'><BsArrowRightCircle/></span></h1>
           
            <div className="carousel carousel-end rounded-box ">
  <div className="carousel-item me-6">
    <div>
    <Image
      src="https://images.unsplash.com/photo-1483181957632-8bda974cbc91?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      width={460} // Set an appropriate width value
      height={400} // Set an appropriate height value
      sizes="100vw"
      className='rounded-xl'
    />
    <p className='text-2xl mt-3'>The Coziest Gifts of All Time</p>
    </div>
 
  </div> 

  <div className="carousel-item me-6">
    <div>
    <Image
      src="https://images.unsplash.com/photo-1485199692108-c3b5069de6a0?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      width={460} // Set an appropriate width value
      height={400} // Set an appropriate height value
      sizes="100vw"
      className='rounded-xl'
    />
    <p className='text-2xl mt-3'>Run All Winter</p>
    </div>
 
  </div> 

  <div className="carousel-item me-6">
    <div>
    <Image
      src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=2073&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      width={460} // Set an appropriate width value
      height={400} // Set an appropriate height value
      sizes="100vw"
      className='rounded-xl'
    />
    <p className='text-2xl mt-3'>NBA City Edition Collection</p>
    </div>
 
  </div> 

  <div className="carousel-item me-6">
    <div>
    <Image
      src="https://images.unsplash.com/flagged/photo-1570733117311-d990c3816c47?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      width={460} // Set an appropriate width value
      height={400} // Set an appropriate height value
      sizes="100vw"
      className='rounded-xl'
    />
    <p className='text-2xl mt-3'>Air Max Pluse Roam</p>
    </div>
 
  </div> 

  <div className="carousel-item me-6">
    <div>
    <Image
      src="https://images.unsplash.com/photo-1484081064812-86e90e107fa8?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      width={460} // Set an appropriate width value
      height={400} // Set an appropriate height value
      sizes="100vw"
      className='rounded-xl'
    />
    <p className='text-2xl mt-3'>New Winter Look</p>
    </div>
 
  </div> 

  <div className="carousel-item me-6">
    <div>
    <Image
      src="https://images.unsplash.com/photo-1538329972958-465d6d2144ed?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      width={460} // Set an appropriate width value
      height={400} // Set an appropriate height value
      sizes="100vw"
      className='rounded-xl'
    />
    <p className='text-2xl mt-3'>Yoga Essentials</p>
    </div>
 
  </div> 


</div>


      </div>
    );
};

export default Trending;