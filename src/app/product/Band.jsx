"use client"
import React, { useState } from 'react';
import { AiOutlineArrowUp, AiOutlineDown } from "react-icons/ai";

const Band = () => {
    const [showPrice, setShowPrice] = useState(true);

    const togglePrice = () => {
        setShowPrice(!showPrice);
      };
    return (
        <div>
             <div>
      <div className="flex items-center">
        <h2 className="text-xl font-semibold">Brand</h2>
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
          <p className='text-xl'>Nike Sportswear</p>
        </div>
        <div className="mt-2 flex gap-2 mb-4">
          <input type="checkbox" className="checkbox" />
          <p className='text-xl'> Jordan</p>
        </div>
        <div className="mt-2 flex gap-2 mb-4">
          <input type="checkbox"  className="checkbox" />
          <p className='text-xl'>Nike By You</p>
        </div>
        <div div className="mt-2 flex gap-2 mb-4">
          <input type="checkbox"  className="checkbox" />
          <p className='text-xl'>Converse</p>
        </div>
        <p className='text-xl'>+More</p>
      </div>
        
      )}
    </div>  
        </div>
    );
};

export default Band;