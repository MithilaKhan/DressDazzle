import Image from 'next/image';
import React from 'react';

const WinterOffer = () => {
    return (
        <div>
            <h1 className='text-3xl font-semibold uppercase pb-3'>Happening Now</h1>
            <div className=''>
            <Image
      src="https://images.unsplash.com/photo-1572584642822-6f8de0243c93?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      width={800} // Set an appropriate width value
      height={400} // Set an appropriate height value
    //   sizes="100vw"
      style={{ width: '100%', height: '500px' }} 
      className=''
    />
    {/* <div className='absolute left-36 ms-60 bottom-8 pb-24 w-full'>
    <button className="btn btn-active btn-neutral  h-14 w-1/6 text-xl ">Shop Now</button>
    </div> */}
            </div>
           
        </div>
    );
};

export default WinterOffer;