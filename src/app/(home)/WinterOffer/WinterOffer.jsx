import Image from 'next/image';
import React from 'react';

const WinterOffer = () => {
    return (
        <div>
            <h1 className='text-3xl font-semibold uppercase pb-3'>Happening Now</h1>
            <div className='relative'>
            <Image
      src="https://img.freepik.com/free-psd/sales-banner-template-with-image_23-2148149657.jpg?w=1380&t=st=1699045018~exp=1699045618~hmac=decd1cace08ca140f8e7eacd03fd0da60993e84b494f8806bd3da970cbc29c3e"
      alt="image"
      width={800} // Set an appropriate width value
      height={400} // Set an appropriate height value
      sizes="100vw"
      style={{ width: '100%', height: '600px' }} 
      className='rounded-xl'
    />
    <div className='absolute left-36 ms-60 bottom-8 pb-24 w-full'>
    <button className="btn btn-active btn-neutral  h-14 w-1/6 text-xl ">Shop Now</button>
    </div>
            </div>
           
        </div>
    );
};

export default WinterOffer;