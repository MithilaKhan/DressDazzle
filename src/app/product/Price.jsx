"use client"
import React, { useState } from 'react';
import { AiOutlineArrowUp, AiOutlineDown } from "react-icons/ai";
const Price = () => {
    const [showPrice, setShowPrice] = useState(true);

    const togglePrice = () => {
        setShowPrice(!showPrice);
      };
    return (
        <div>
           <div>
      <div className="flex items-center">
        <h2 className="text-xl font-semibold">Shop By Price</h2>
        <button onClick={togglePrice} className="ml-2">
          {!showPrice ? (
            <span><AiOutlineArrowUp/></span> 
          ) : (
            <span><AiOutlineDown/></span>
          )}
        </button>
      </div>
      {!showPrice  && (<div>
        <div className="mt-2 flex gap-2 mb-4">
          <input type="checkbox"  className="checkbox" />
          <p className='text-xl'>$0-$25</p>
        </div>
        <div className="mt-2 flex gap-2 mb-4">
          <input type="checkbox" className="checkbox" />
          <p className='text-xl'> $25-$50</p>
        </div>
        <div className="mt-2 flex gap-2 mb-4">
          <input type="checkbox"  className="checkbox" />
          <p className='text-xl'>$50-$100</p>
        </div>
        <div div className="mt-2 flex gap-2 mb-4">
          <input type="checkbox"  className="checkbox" />
          <p className='text-xl'>$100-$150</p>
        </div>
        <p className='text-xl'>+More</p>
      </div>
        
      )}
    </div>    
        </div>
    );
};

export default Price;