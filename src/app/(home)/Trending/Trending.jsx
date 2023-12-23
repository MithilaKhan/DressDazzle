"use client";
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Trending = () => {
    return (
        <div className='mt-20 mb-16'>
            <h1 className='lg:text-3xl text-xl font-semibold uppercase pb-3 flex items-center'>Trending</h1>
<div className="swiper-container">
<Swiper
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 1024px (large devices)
            1024: {
              slidesPerView: 4,
            },
            // when window width is >= 640px (mobile devices)
            640: {
              slidesPerView: 2,
            },
          }}
      >
        {/* 1 slider  */}
        <SwiperSlide>
        <div>
        <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.1 }}
    >
    <Image
      src="https://images.unsplash.com/photo-1483181957632-8bda974cbc91?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      width={390} // Set an appropriate width value
      height={360} // Set an appropriate height value
      sizes="100vw"
      className='rounded'
    />
    </motion.div>
    <p className='text-2xl mt-3'>The Coziest Gifts of All Time</p>
    </div> 
        </SwiperSlide>

{/* 2 slider  */}
        <SwiperSlide> <div>
        <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.1 }}
    >
    <Image
      src="https://images.unsplash.com/photo-1485199692108-c3b5069de6a0?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      width={390} // Set an appropriate width value
      height={360} // Set an appropriate height value
      sizes="100vw"
      className='rounded'
    />
    </motion.div>
    <p className='text-2xl mt-3'>Run All Winter</p>
    </div></SwiperSlide>

{/* 3 no  */}
        <SwiperSlide><div>
        <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.1 }}
    >
    <Image
      src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=2073&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      width={390} // Set an appropriate width value
      height={360} // Set an appropriate height value
      sizes="100vw"
      className='rounded'
    /></motion.div>
    <p className='text-2xl mt-3'>NBA City Edition Collection</p>
    </div></SwiperSlide>

{/* 4 num */}
        <SwiperSlide><div>
        <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.1 }}
    >
    <Image
      src="https://images.unsplash.com/flagged/photo-1570733117311-d990c3816c47?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      width={390} // Set an appropriate width value
      height={360} // Set an appropriate height value
      sizes="100vw"
      className='rounded'
    /></motion.div>
    <p className='text-2xl mt-3'>Air Max Pluse Roam</p>
    </div></SwiperSlide>

{/* 5 no */}
        <SwiperSlide><div>
        <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.1 }}
    >
    <Image
      src="https://images.unsplash.com/photo-1484081064812-86e90e107fa8?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      width={390} // Set an appropriate width value
      height={360} // Set an appropriate height value
      sizes="100vw"
      className='rounded'
    /></motion.div>
    <p className='text-2xl mt-3'>New Winter Look</p>
    </div></SwiperSlide>

{/* 6 no  */}
        <SwiperSlide><div>
        <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.1 }}
    >
    <Image
      src="https://images.unsplash.com/photo-1538329972958-465d6d2144ed?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      width={390} // Set an appropriate width value
      height={360} // Set an appropriate height value
      sizes="100vw"
      className='rounded-xl'
    /></motion.div>
    <p className='text-2xl mt-3'>Yoga Essentials</p>
    </div></SwiperSlide>

      </Swiper>
</div>
            


      </div>
    );
};

export default Trending;