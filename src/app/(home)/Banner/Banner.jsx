"use client"
import Image from 'next/image';
import "./style.css"
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
    }
  
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
    return (
        <div>
           <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
       

        <SwiperSlide>  <div className="relative" > 
      <Image
      src="https://images.unsplash.com/photo-1615217482184-5ace6e36686a?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      width={800} // Set an appropriate width value
      height={600} // Set an appropriate height value
      sizes="100vw"
      style={{ width: '100%' , height:"600px"}} 
      // className='ImageClass'
    />
    
    <div className="absolute bottom-0 left-0 w-full   p-6 lg:mb-10 ms-8  ">
    <p className="lg:text-7xl text-2xl text-black  lg:font-extrabold font-bold lg:pb-6 font-[Poppins] lg:ms-16 "><span className='lg:ms-12'>Discover</span>  <br /> Your Beauty <br /><span className='lg:ms-12'>Canvas</span> </p>
    <p className=" text-gray-600 lg:text-lg text-sm lg:font-bold font-semibold lg:pb-10 leading-loose">Indulge in the artistry of makeup and unveil the masterpiece within you.<br /> Our curated collection  of premium cosmetics and beauty   essentials awaits,<br /> designed to enhance your natural allure and empower your confidence.  </p>

    <div className="lg:ms-24  lg:pb-10  ">
    <button className="button-89  ">Shop Now</button>   
    </div>

    </div>
    
   
      </div> </SwiperSlide> 


        <SwiperSlide>  <div className="relative" >  
      <Image
      src="https://images.unsplash.com/photo-1659318926374-a2a4ded9709d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      width={800} // Set an appropriate width value
      height={600} // Set an appropriate height value
      sizes="100vw"
      style={{ width: '100%' , height:"600px"}} 
      className=''
    />
    
    <div className="absolute bottom-0 left-0 w-full   p-6 lg:mb-10 ms-8  ">
    <p className="lg:text-7xl text-2xl  text-gray-900  lg:font-extrabold font-bold lg:pb-6 font-[Poppins] "> <span className='text-gray-600'>Unleash</span> Your Style <br /> <span className='lg:ms-10'>Revolution </span> </p>
    <p className="lg:text-xl text-sm lg:font-bold text-white font-semibold lg:pb-10 ">Dive into a world where fashion becomes a statement, and  <br /> your  wardrobe  transforms  into an expression of individuality. <br /> Discover the allure of trends that defy the ordinary. </p>

    <div className="lg:ms-14  ">
   
    <button className="button-49  ">Explore Now</button>
    
    </div>

    </div>
    
   
      </div> </SwiperSlide>

      <SwiperSlide>  <div className="relative" > 
      <Image
      src="https://images.unsplash.com/flagged/photo-1553802922-2eb2f7f2c65b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      width={800} // Set an appropriate width value
      height={600} // Set an appropriate height value
      sizes="100vw"
      style={{ width: '100%' , height:"600px"}} 
      className=''
    />
    
    <div className="absolute bottom-0 left-0 w-full  text-white lg:p-6 lg:mb-10 lg:ms-8 lg:text-center  m-4 ">
    <p className="lg:text-7xl text-2xl  lg:font-extrabold font-bold lg:pb-6 font-[Poppins] "><span className='lg:ms-14 '>Elevate Your Style,</span> <br /> Embrace Your Elegance..</p>
    <p className="lg:text-xl  text-sm lg:font-bold font-semibold lg:pb-10 pb-3 ">Discover a world where fashion meets individuality. Our curated collection reflects the essence of <br /> self-expression, embracing   uniqueness in every stitch  and thread. Unleash your style potential with <br /> exclusive designs that speak volumes without saying a word.</p>

    <div className="flex lg:flex-row flex-col lg:mx-96 lg:px-20 lg:gap-6 gap-2 lg:pb-10   ">
    <button className="button-86  ">Shop Women</button>
    <button className="button-86 ">Shop Men</button>
    </div>

    </div>
    
   
      </div> </SwiperSlide>
        
        <div className="autoplay-progress" slot="container-end">
         
          <span ref={progressContent}></span>
        </div>
      </Swiper>

          
        </div>
    );
};

export default Banner;