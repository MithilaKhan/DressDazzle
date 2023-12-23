"use client" ;
import React, { useState } from 'react';
import products from "@/data/products.json"
import SingleProduct from '@/app/product/SingleProduct';
import { AiOutlineArrowUp, AiOutlineDown } from "react-icons/ai";
import Price from './Price';
import Color from './Color';
import Sport from './Sport';
import Band from './Band';
import Image from 'next/image';
const ProductPage = () => {
  const [showDetails, setShowDetails] = useState(true);
  const [showGender, setShowGender] = useState(true);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const toggleGender = () => {
    setShowGender(!showGender);
  };
    return (
        <div className='pt-0 '>
          <div>
          <Image
      src="https://images.unsplash.com/photo-1601618752436-7b60b7818699?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      width={800} // Set an appropriate width value
      height={600} // Set an appropriate height value
      sizes="100vw"
      style={{ width: '100%', height: '600px' }} 
      
    />
          </div>
          <div className='grid lg:grid-cols-5 gap-3 sm:grid-cols-2 m-6'>

            <div className='relative'>
            <Image
      src="https://images.unsplash.com/photo-1500840216050-6ffa99d75160?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
      alt="image"
      width={550} // Set an appropriate width value
      height={270} // Set an appropriate height value
      // sizes="100vw"
      style={{ width: '550', height: '270px' }} 
      className='rounded-lg brightness-50'
    />
    <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white '>
      <p className='font-xl text-4xl '>Accessories</p></div>
            </div>

            <div className='relative'>
            <Image
      src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
      alt="image"
      width={550} // Set an appropriate width value
      height={270} // Set an appropriate height value
      // sizes="100vw"
      style={{ width: '550', height: '270px' }} 
      className='rounded-lg brightness-50'
    />
    <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white '>
      <p className='font-xl text-4xl '>Bags</p></div>
            </div>

            <div className='relative'>
            <Image
      src="https://images.unsplash.com/photo-1544280897-ad0b9a599668?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGV5ZSUyMGdsYXNzZXN8ZW58MHx8MHx8fDA%3D"
      alt="image"
      width={550} // Set an appropriate width value
      height={270} // Set an appropriate height value
      // sizes="100vw"
      style={{ width: '550', height: '270px' }} 
      className='rounded-lg brightness-50'
    />
    <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white '>
      <p className='font-xl text-4xl '>Glasses</p></div>
            </div>

            <div className='relative'>
            <Image
      src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8fHww"
      alt="image"
      width={550} // Set an appropriate width value
      height={270} // Set an appropriate height value
      // sizes="100vw"
      style={{ width: '550', height: '270px' }} 
      className='rounded-lg brightness-50'
    />
    <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white '>
      <p className='font-xl text-4xl '>Shoes</p></div>
            </div>

            <div className='relative'>
            <Image
      src="https://images.unsplash.com/photo-1577909238318-66c95a296b57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
      alt="image"
      width={550} // Set an appropriate width value
      height={270} // Set an appropriate height value
      // sizes="100vw"
      style={{ width: '550', height: '270px' }} 
      className='rounded-lg brightness-50'
    />
    <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white '>
      <p className='font-xl text-4xl '>Outerwear</p></div>
            </div>
         
          </div>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col ms-10 m-10">
    <div className='grid lg:grid-cols-3 gap-1'>
    {products.map((band) => <SingleProduct key={band.id} band={band}/>)}
    </div>
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"> </label> 
    <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <div className='flex gap-2 font-semibold text-2xl items-center pt-3'> <p>Pick Up Today  </p> <input type="checkbox" className="toggle" checked /></div>

      <div className="divider"></div> 
      <div className='font-semibold text-xl'>
      <li className=' py-2'>Shoes</li>
      <li className=' pb-2'>Clothing</li>
      <li className=' pb-2'>Jordan</li>
      <li className=' pb-2'>Shorts</li>
      <li className=' pb-2'>Hoodies&Pullovers</li>
      <li className=' pb-2'>pants&Tights</li>
      <li className=' pb-2'>Jackets&Vests</li>
      <li className=' pb-2'>Tops&T-shirt</li>
      <li className=' pb-2'>socks</li>
      </div>
     <div className="divider"></div> 
     <div>
      <div className="flex items-center">
        <h2 className="text-xl font-semibold">Sales & Offers</h2>
        <button onClick={toggleDetails} className="ml-2">
          {!showDetails ? (
            <span><AiOutlineArrowUp/></span> // Up arrow (▲)
          ) : (
            <span><AiOutlineDown/></span> // Down arrow (▼)
          )}
        </button>
      </div>
      {!showDetails && (
        <div className="mt-2  flex gap-2 mb-4">
          <input type="checkbox"  className="checkbox" />
          <p className='text-xl'>Extra 25% Off select Styles</p>
        </div>
      )}
    </div>

    <div className="divider"></div> 

     <div>
      <div className="flex items-center">
        <h2 className="text-xl font-semibold">Gender</h2>
        <button onClick={toggleGender} className="ml-2">
          {!showGender ? (
            <span><AiOutlineArrowUp/></span> 
          ) : (
            <span><AiOutlineDown/></span>
          )}
        </button>
      </div>
      {!showGender  && (<div>
        <div className="mt-2 flex gap-2 mb-4">
          <input type="checkbox"  className="checkbox" />
          <p className='text-xl'>Men</p>
        </div>
        <div className="mt-2 flex gap-2 mb-4">
          <input type="checkbox" className="checkbox" />
          <p className='text-xl'>Women</p>
        </div>
        <div className="mt-2 flex gap-2 mb-4">
          <input type="checkbox"  className="checkbox" />
          <p className='text-xl'>Unisex</p>
        </div>
      </div>
        
      )}
    </div>

<div className="divider"></div> 
 <Price/>
 <div className="divider"></div> 
 <Color/>
 <div className="divider"></div> 
 <Sport/>
 <div className="divider"></div> 
<Band/>
    </div>
  
  </div>
</div>
        </div>
    );
};

export default ProductPage;