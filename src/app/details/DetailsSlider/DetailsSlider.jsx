"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineArrowUp, AiOutlineDown } from "react-icons/ai";
import { BiHeart } from 'react-icons/bi';
import { GoDotFill } from "react-icons/go";
const DetailsSlider = () => {
    const [showShipping, setShowShipping] = useState(true);

    const toggleShipping = () => {
        setShowShipping(!showShipping);
      };
    return (
        <div>
           <h1 className='text-4xl font-semibold'>Air Jordan 1 Low</h1> 
           <p className='text-2xl font-semibold py-2'>Women's Shoes</p>
           <p className='text-2xl font-semibold pb-2'>$115</p>
           <div className='flex gap-2'>

           <Image
      src="https://images.unsplash.com/photo-1641792669610-83e23d551bec?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG5pa2UlMjBhaXIlMjBmb3JjZSUyMDF8ZW58MHx8MHx8fDA%3D"
      alt="image"
      width={300} // Set an appropriate width value
      height={110} // Set an appropriate height value
      sizes="100vw"
      style={{width: '90px', height: '80px' }} 
      className='border-2 border-red-700'
    />

           <Image
      src="https://images.unsplash.com/photo-1626379625260-7111605463e8?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG5pa2UlMjBhaXIlMjBmb3JjZSUyMDF8ZW58MHx8MHx8fDA%3D"
      alt="image"
      width={300} // Set an appropriate width value
      height={110} // Set an appropriate height value
      sizes="100vw"
      style={{width: '90px', height: '80px' }} 
      className='border-2 border-blue-700'
    />

           <Image
      src="https://images.unsplash.com/photo-1641745899178-021fafbb2317?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fG5pa2UlMjBhaXIlMjBmb3JjZSUyMDF8ZW58MHx8MHx8fDA%3D"
      alt="image"
      width={300} // Set an appropriate width value
      height={110} // Set an appropriate height value
      sizes="100vw"
      style={{width: '90px', height: '80px' }} 
      className='border-2 border-yellow-700'
    />

           <Image
      src="https://images.unsplash.com/photo-1626379637476-f78d1d86b9f3?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fG5pa2UlMjBhaXIlMjBmb3JjZSUyMDF8ZW58MHx8MHx8fDA%3D"
      alt="image"
      width={300} // Set an appropriate width value
      height={110} // Set an appropriate height value
      sizes="100vw"
      style={{width: '90px', height: '80px' }}  
      className='border-2 border-pink-700'
    />

           <Image
      src="https://images.unsplash.com/photo-1614860957837-d8cf8798cb25?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG5pa2UlMjBhaXIlMjBmb3JjZSUyMDF8ZW58MHx8MHx8fDA%3D"
      alt="image"
      width={300} // Set an appropriate width value
      height={110} // Set an appropriate height value
      sizes="100vw"
      style={{width: '90px', height: '80px' }} 
      className='border-2 border-purple-700'
    />
           </div>
<div className='flex text-2xl font-semibold justify-evenly mt-5'>
    <p>Select Size</p>
    <p>Size Guide</p>
</div>
           <div className='grid grid-cols-3 mt-3 gap-3  justify-items-stretch'>
<div className='border-2  rounded-md'>
    <p className='text-2xl font-semibold p-5'>W 5 / M 3.5</p>
</div>
<div className='border-2  rounded-md'>
    <p className='text-2xl font-semibold p-5'>W 5.5 / M 4</p>
</div>
<div className='border-2  rounded-md'>
    <p className='text-2xl font-semibold p-5'>W 6 / M 4.5</p>
</div>
<div className='border-2  rounded-md'>
    <p className='text-2xl font-semibold p-5'>W 7 / M 5.5</p>
</div>
<div className='border-2  rounded-md'>
    <p className='text-2xl font-semibold p-5'>W 8 / M 6.5</p>
</div>
<div className='border-2  rounded-md'>
    <p className='text-2xl font-semibold p-5'>W 5 / M 3.5</p>
</div>
<div className='border-2  rounded-md'>
    <p className='text-2xl font-semibold p-5'>W 8.5 / M 7</p>
</div>
<div className='border-2  rounded-md'>
    <p className='text-2xl font-semibold p-5'>W 5 / M 3.5</p>
</div>
<div className='border-2  rounded-md'>
    <p className='text-2xl font-semibold p-5'>W 5 / M 3.5</p>
</div>
           </div>

           <p className='text-xl text-center mt-5'>4 interest-free payments of $28.75 with <br /> <span className='font-semibold'>Klarna.</span>  <span className='underline'>Learn More</span></p>

           <div className='  text-center mt-4  '>
           <button className="btn btn-neutral mb-3 w-2/4 h-14 rounded-xl">Add to Bag</button>
           <button className="btn btn-active w-2/4 h-14 mx-auto rounded-xl flex items-center">Favorite <span><BiHeart/></span></button>
           </div>
           <p className='text-xl mt-10'>Shipping* <br />
To get accurate shipping information Edit <span className='underline'>Location</span> </p>
           <p className='text-xl mt-7'>Free Pickup <br />
<span className='underline'>Find a Store</span> </p>

<p className='text-xl mt-7'>Always in, always fresh. The Air Jordan 1 Low sets you up with a piece of Jordan history and heritage that's comfortable all day. Choose your colors, then step out in the iconic profile that's built with a high-end mix of materials and encapsulated Air in the heel. </p>

<ul className='mt-3'>
    <li className='flex gap-1 text-xl items-center'><span><GoDotFill/></span>Shown: White/Aluminum/Wolf Grey</li>
    <li className='flex gap-1 text-xl items-center'> <span><GoDotFill/></span>Style: DC0774-105</li>
</ul>

<p className='text-xl underline mb-6'>View Product Details</p>

<div className='divider mb-4'></div>

<div>
      <div className="flex items-center">
        <h2 className="text-xl font-semibold">Shipping & Returns</h2>
        <button onClick={toggleShipping} className="ml-2">
          {!showShipping ? (
            <span><AiOutlineArrowUp/></span> 
          ) : (
            <span><AiOutlineDown/></span>
          )}
        </button>
      </div>
      {!showShipping  && (<div>
        <p className='text-xl mt-7'>Free standard shipping on orders $50+ and free 60-day returns for Nike Members <br />
<span className='underline'> Learn more. Return policy exclusions apply.</span> </p>

<p className='text-xl mt-4 underline'>Pick-up available at select Nike Stores.</p>
      </div>
        
      )}
    </div> 
        </div>
    );
};

export default DetailsSlider;