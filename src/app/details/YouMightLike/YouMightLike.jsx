import Image from 'next/image';
import React from 'react';
import { BsArrowRightCircle } from "react-icons/bs";
const YouMightLike = () => {
    return (
        <div>
            <div className='mt-20 mb-16'>
            <h1 className='text-3xl font-semibold uppercase pb-3 flex items-center'>You Might Also Like <span className='ps-2'><BsArrowRightCircle/></span></h1>
           
            <div className="carousel carousel-end rounded-box">
  <div className="carousel-item me-6">
    <div>
    <Image
      src="https://images.unsplash.com/photo-1679284393460-fbaecec5fcab?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fG5pa2UlMjBhaXIlMjBmb3JjZSUyMDElMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D"
      alt="image"
      width={420} // Set an appropriate width value
      height={350} // Set an appropriate height value
      sizes="100vw"
      className='rounded-xl'
    />
    <p className='text-2xl font-semibold mt-3'>Air Jordan 1 Low</p>
    <p className='text-2xl mt-1'>Women's Shoes</p>
    <p className='text-2xl font-semibold mt-1'>$115</p>
    </div>
 
  </div> 

  <div className="carousel-item me-6">
    <div>
    <Image
      src="https://images.unsplash.com/photo-1656164061663-3dc536192fcb?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fG5pa2UlMjBhaXIlMjBmb3JjZSUyMDElMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D"
      alt="image"
      width={420} // Set an appropriate width value
      height={350} // Set an appropriate height value
      sizes="100vw"
      className='rounded-xl'
    />
    <p className='text-2xl font-semibold mt-3'>Air Jordan 1 Low</p>
    <p className='text-2xl mt-1'>Women's Shoes</p>
    <p className='text-2xl font-semibold mt-1'>$115</p>
    </div>
 
  </div> 

  <div className="carousel-item me-6">
    <div>
    <Image
      src="https://images.unsplash.com/photo-1656896402555-f606bb9b7d18?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8"
      alt="image"
      width={420} // Set an appropriate width value
      height={350} // Set an appropriate height value
      sizes="100vw"
      className='rounded-xl'
    />
    <p className='text-2xl font-semibold mt-3'>Air Jordan 1 Low</p>
    <p className='text-2xl mt-1'>Women's Shoes</p>
    <p className='text-2xl font-semibold mt-1'>$115</p>
    </div>
 </div> 

 <div className="carousel-item me-6">
    <div>
    <Image
      src="https://images.unsplash.com/photo-1552066344-2464c1135c32?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"
      alt="image"
      width={420} // Set an appropriate width value
      height={350} // Set an appropriate height value
      sizes="100vw"
      className='rounded-xl'
    />
    <p className='text-2xl font-semibold mt-3'>Air Jordan 1 Low</p>
    <p className='text-2xl mt-1'>Women's Shoes</p>
    <p className='text-2xl font-semibold mt-1'>$115</p>
    </div>
 </div> 

 <div className="carousel-item me-6">
    <div>
    <Image
      src="https://images.unsplash.com/photo-1679284392805-1b7f8e2e3f21?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5pa2UlMjBhaXIlMjBmb3JjZSUyMDElMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D"
      alt="image"
      width={420} // Set an appropriate width value
      height={350} // Set an appropriate height value
      sizes="100vw"
      className='rounded-xl'
    />
    <p className='text-2xl font-semibold mt-3'>Air Jordan 1 Low</p>
    <p className='text-2xl mt-1'>Women's Shoes</p>
    <p className='text-2xl font-semibold mt-1'>$115</p>
    </div>
 </div> 

 <div className="carousel-item me-6">
    <div>
    <Image
      src="https://images.unsplash.com/photo-1679284392387-250597360be3?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5pa2UlMjBhaXIlMjBmb3JjZSUyMDElMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D"
      alt="image"
      width={420} // Set an appropriate width value
      height={350} // Set an appropriate height value
      sizes="100vw"
      className='rounded-xl'
    />
    <p className='text-2xl font-semibold mt-3'>Air Jordan 1 Low</p>
    <p className='text-2xl mt-1'>Women's Shoes</p>
    <p className='text-2xl font-semibold mt-1'>$115</p>
    </div>
 </div> 


</div>


      </div> 
        </div>
    );
};

export default YouMightLike;