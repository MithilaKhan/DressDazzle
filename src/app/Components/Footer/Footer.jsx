import React from 'react';
import { CiFacebook } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaLocationDot, FaYoutube } from "react-icons/fa6";
import { IconName, MdOutlineFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-black text-neutral-content font-[Poppins]">
  <nav className='font-bold text-white text-xl'>
    <header className="">GIFT CARDS</header> 
    <a clssName="">FIND A STORE</a>
    <a className="">BECOME A MEMBER</a>
    <a className="">OUR JOURNAL</a>
    <a className="">SEND US FEEDBACK</a>
  </nav> 

  <nav>
    <header className="font-bold text-white text-xl">GET HELP</header> 
    <a className="text-lg">Order Status</a>
    <a className="text-lg">Shipping and Delivery</a>
    <a className="text-lg">Returns</a>
    <a className="text-lg">Order Cancellation</a>
    <a className="text-lg">Payment Options</a>
    <a className="text-lg">Gift Card Balance</a>
    <a className="text-lg">Contact Us</a>
  </nav> 

  <nav>
    <header className="font-bold text-white text-xl">ABOUT DressDazzle</header> 
    <a className="text-lg">News</a>
    <a className="text-lg">Careers</a>
    <a className="text-lg">Investors</a>
    <a className="text-lg">Purpose</a>
    <a className="text-lg">Sustainability</a>
  </nav>

  <nav>
    <header className="font-bold text-white text-xl ">PROMOTIONS & DISCOUNTS</header> 
    <a className="text-lg">Student</a>
    <a className="text-lg">Military</a>
    <a className="text-lg">Teacher</a>
    <a className="text-lg">First Responders & Medical Professionals</a>
    <a className="text-lg">Birthday</a>
  </nav>

  <nav className='my-auto'>
    <ul className='flex gap-3'>
        <li className='text-5xl'><MdOutlineFacebook/></li>
        <li className='text-5xl'><AiFillTwitterCircle/></li>
        <li className='text-5xl'><FaYoutube/></li>
        <li className='text-5xl'><FaInstagram/></li>
        
        </ul> 
 
  </nav>
</footer>
<div className='bg-black text-neutral-content font-[Poppins]  pb-7 '>
<nav className="grid grid-flow-col lg:ms-96 lg:ps-96">
    <a className="link link-hover">Sitemap</a> 
    <a className="link link-hover">Legal Notices</a> 
    <a className="link link-hover">Privacy Policy</a> 
    <a className="link link-hover">California Supply Chains Act</a>
    <a className="link link-hover">Accessibility</a>
  </nav>
</div>

<div className='bg-black text-neutral-content font-[Poppins] ps-2 pb-10 '>
<nav className="flex gap-6 ">
    <div className=" flex gap-1 text-white text-lg font-semibold items-center"> <p><FaLocationDot/></p> <p>Dhaka,BanglaDesh</p> </div> 
    <div className=" ">  <p>© 2023 DressDazzle , Inc. All Rights Reserved</p> </div> 
   
  
  
  </nav>
</div>
        </div>
    );
};

export default Footer;