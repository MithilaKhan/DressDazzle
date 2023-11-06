"use client" ;
import React, { useState } from 'react';
import products from "@/data/products.json"
import SingleProduct from '@/app/product/SingleProduct';
import { AiOutlineArrowUp, AiOutlineDown } from "react-icons/ai";
import Price from './Price';
import Color from './Color';
import Sport from './Sport';
import Band from './Band';
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
        <div>
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