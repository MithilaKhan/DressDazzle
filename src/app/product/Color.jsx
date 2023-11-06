"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineArrowUp, AiOutlineDown } from "react-icons/ai";

const Color = () => {
    const [showPrice, setShowPrice] = useState(true);

    const togglePrice = () => {
        setShowPrice(!showPrice);
      };
    return (
        <div>
           <div>
      <div className="flex items-center">
        <h2 className="text-xl font-semibold">Color</h2>
        <button onClick={togglePrice} className="ml-2">
          {!showPrice ? (
            <span><AiOutlineArrowUp/></span> 
          ) : (
            <span><AiOutlineDown/></span>
          )}
        </button>
      </div>
      {!showPrice  && (<div className='grid grid-cols-3 gap-2'>
        <div className="mt-2 mb-4">
        <div className="avatar">
  <div className="w-10 rounded-full">
    <Image src="https://images.unsplash.com/flagged/photo-1593005510509-d05b264f1c9c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={20} height={20} alt='image' />
  </div>
</div>
<p className='text-xl'>Red</p>
        </div>

        <div className="mt-2 mb-4">
        <div className="avatar">
  <div className="w-10 rounded-full">
    <Image src="https://images.unsplash.com/photo-1557682268-e3955ed5d83f?auto=format&fit=crop&q=80&w=1700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={20} height={20} alt='image' />
  </div>
</div>
          <p className='text-xl'>Purple</p>
        </div>

        <div className="mt-2 mb-4">
        <div className="avatar">
  <div className="w-10 rounded-full">
    <Image src="https://images.unsplash.com/photo-1618853606877-f172eff9f8b7?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBjb2xvcnxlbnwwfHwwfHx8MA%3D%3D" width={20} height={20} alt='image' />
  </div>
</div>
 <p className='text-xl'>Black</p>
        </div>

        <div className="mt-2 mb-4">
        <div className="avatar">
  <div className="w-10 rounded-full">
    <Image src="https://images.unsplash.com/photo-1530982011887-3cc11cc85693?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwY29sb3VyfGVufDB8fDB8fHww" width={20} height={20} alt='image' />
  </div>
</div>
<p className='text-xl'>Orange</p>
        </div>

        <div className="mt-2 mb-4">
        <div className="avatar">
  <div className="w-10 rounded-full">
    <Image src="https://images.unsplash.com/photo-1541256942802-7b29531f0df8?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ymx1ZSUyMGNvbG91cnxlbnwwfHwwfHx8MA%3D%3D" width={20} height={20} alt='image' />
  </div>
</div>
 <p className='text-xl'>Blue</p>
        </div>

        <div className="mt-2 mb-4">
        <div className="avatar">
  <div className="w-10 rounded-full">
    <Image src="https://images.unsplash.com/photo-1516642898673-edd1ced08e87?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBpbmslMjBjb2xvdXJ8ZW58MHx8MHx8fDA%3D" width={20} height={20} alt='image' />
  </div>
</div>
<p className='text-xl'>Pink</p>
        </div>

        <div className="mt-2 mb-4">
        <div className="avatar">
  <div className="w-10 rounded-full">
    <Image src="https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2hpdGUlMjBjb2xvdXJ8ZW58MHx8MHx8fDA%3D" width={20} height={20} alt='image' />
  </div>
</div>
 <p className='text-xl'>White</p>
        </div>

        <div className="mt-2 mb-4">
        <div className="avatar">
  <div className="w-10 rounded-full">
    <Image src="https://images.unsplash.com/photo-1585990470300-93963c55dfaf?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnJvd24lMjBjb2xvdXJ8ZW58MHx8MHx8fDA%3D" width={20} height={20} alt='image' />
  </div>
</div>
<p className='text-xl'>Brown</p>
        </div>

        <div className="mt-2 mb-4">
        <div className="avatar">
  <div className="w-10 rounded-full">
    <Image src="https://images.unsplash.com/photo-1622310505762-a813a1c2e0bf?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JlZW4lMjBjb2xvdXJ8ZW58MHx8MHx8fDA%3D" width={20} height={20} alt='image' />
  </div>
</div>
<p className='text-xl'>Green</p>
        </div>

        <div className="mt-2 mb-4">
        <div className="avatar">
  <div className="w-10 rounded-full">
    <Image src="https://images.unsplash.com/photo-1551117814-56f86aa5cac7?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JleSUyMGNvbG91cnxlbnwwfHwwfHx8MA%3D%3D" width={20} height={20} alt='image' />
  </div>
</div>
<p className='text-xl'>Grey</p>
        </div>

        <div className="mt-2 mb-4">
        <div className="avatar">
  <div className="w-10 rounded-full">
    <Image src="https://images.unsplash.com/photo-1436262513933-a0b06755c784?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHllbGxvdyUyMGNvbG91cnxlbnwwfHwwfHx8MA%3D%3D" width={20} height={20} alt='image' />
  </div>
</div>
          <p className='text-xl'>Yellow</p>
        </div>

        <div className="mt-2 mb-4">
        <div className="avatar">
  <div className="w-10 rounded-full">
    <Image src="https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fG11bHRpJTIwY29sb3VyfGVufDB8fDB8fHww" width={20} height={20} alt='image' />
  </div>
</div>
          <p className='text-xl'>Multi</p>
        </div>
      
      </div>
        
      )}
    </div>    
        </div>
    );
};

export default Color;