import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleProduct = ({band}) => {
    return (
        <div>
            <div className="card  w-96  mb-10 ">
 <Image
      src={band.img1}
      alt="image"
      width={225} // Set an appropriate width value
      height={110} // Set an appropriate height value
      sizes="100vw"
      style={{width: '100%', height: '230px' }} 
      className=''
    />
  <div className="pt-5">
    <Link href="/details">
    <h2 className="card-title pb-2 text-xl text-orange-700">{band.sellerType}</h2>
    <p className='pb-1 text-xl font-semibold'>{band.dressTitle} </p>
    <p className='pb-1 text-xl'>{band.dressCategory} </p>
    <p className='pb-1 text-xl'>Color:{band.color} </p>
    <p className='pb-1 text-xl text-orange-700'> ${band.price}</p> 
    </Link>
   
  </div>
            </div>
       
        
        </div>
    );
};

export default SingleProduct;