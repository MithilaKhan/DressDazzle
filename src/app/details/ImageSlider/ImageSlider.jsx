
import Image from 'next/image';
import React from 'react';
import { BsArrowDownCircleFill } from 'react-icons/bs';

const ImageSlider = () => {

    return (
        <div>
            <div className="h-96 carousel carousel-vertical rounded-box">
  <div className="carousel-item h-full w-full relative">
    <Image
      src="https://images.unsplash.com/photo-1641792669610-83e23d551bec?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG5pa2UlMjBhaXIlMjBmb3JjZSUyMDF8ZW58MHx8MHx8fDA%3D"
      alt="image"
      width={300} // Set an appropriate width value
      height={110} // Set an appropriate height value
      sizes="100vw"
      style={{width: '100%', height: 'auto' }} 
      className=''
    />
     <div className="absolute bottom-0 left-0    p-6  ms-8">
    <p className="text-4xl font-bold  font-[Poppins] "><BsArrowDownCircleFill/></p>
</div> 
  </div> 

  <div className="carousel-item h-full w-full relative">
  <Image
      src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
      alt="image"
      width={300} // Set an appropriate width value
      height={110} // Set an appropriate height value
      sizes="100vw"
      style={{width: '100%', height: 'auto' }} 
      className=''
    />
     <div className="absolute bottom-0 left-0    p-6  ms-8">
    <p className="text-4xl font-bold  font-[Poppins] "><BsArrowDownCircleFill/></p>
</div> 

  </div> 
  <div className="carousel-item h-full w-full relative">
    
    <Image
      src="https://images.unsplash.com/photo-1641745899178-021fafbb2317?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fG5pa2UlMjBhaXIlMjBmb3JjZSUyMDF8ZW58MHx8MHx8fDA%3D"
      alt="image"
      width={300} // Set an appropriate width value
      height={110} // Set an appropriate height value
      sizes="100vw"
      style={{width: '100%', height: 'auto' }} 
      className=''
    />
    <div className="absolute bottom-0 left-0    p-6  ms-8">
    <p className="text-4xl font-bold  font-[Poppins] "><BsArrowDownCircleFill/></p>
</div> 
  </div> 
  <div className="carousel-item h-full w-full relative">
  <Image
      src="https://images.unsplash.com/photo-1626379637476-f78d1d86b9f3?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fG5pa2UlMjBhaXIlMjBmb3JjZSUyMDF8ZW58MHx8MHx8fDA%3D"
      alt="image"
      width={300} // Set an appropriate width value
      height={110} // Set an appropriate height value
      sizes="100vw"
      style={{width: '100%', height: 'auto' }} 
      className=''
    />
     <div className="absolute bottom-0 left-0    p-6  ms-8">
    <p className="text-4xl font-bold font-[Poppins] "><BsArrowDownCircleFill/></p>
</div> 
  </div> 
  <div className="carousel-item h-full w-full">
  <Image
      src="https://images.unsplash.com/photo-1614860957837-d8cf8798cb25?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG5pa2UlMjBhaXIlMjBmb3JjZSUyMDF8ZW58MHx8MHx8fDA%3D"
      alt="image"
      width={300} // Set an appropriate width value
      height={110} // Set an appropriate height value
      sizes="100vw"
      style={{width: '100%', height: 'auto' }} 
      className=''
    />
  </div> 

</div>   
<div className='p-12 ps-0 me-5'>
  <div className='flex gap-3 mb-8'>
  <Image
      src="https://images.unsplash.com/photo-1656230259229-aa2634e3352c?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
      alt="image"
      width={300} // Set an appropriate width value
      height={110} // Set an appropriate height value
      sizes="100vw"
      style={{width: '380px', height: '450px' }} 
      className='rounded-lg'
    />
     <Image
      src="https://images.unsplash.com/photo-1656164753657-8ff832063a71?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
      alt="image"
      width={300} // Set an appropriate width value
      height={110} // Set an appropriate height value
      sizes="100vw"
      style={{width: '380px', height: '450px'}} 
      className='rounded-lg'
    />
  </div>

  <div>
  <Image
      src="https://images.unsplash.com/photo-1656164061663-3dc536192fcb?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fG5pa2UlMjBhaXIlMjBmb3JjZSUyMDElMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D"
      alt="image"
      width={300} // Set an appropriate width value
      height={110} // Set an appropriate height value
      sizes="100vw"
      style={{width: '100%', height: '350px' }} 
      className='rounded-lg'
    />
  </div>
  </div> 
        </div>
    );
};

export default ImageSlider;