import React from "react";
import { BiCartAlt, BiHeart, BiSearch } from "react-icons/bi";
const Button = () => {
  return <div className=" pt-3 ">
    <div className="mb-3 flex gap-5 items-center">
  <div className=" flex gap-1 w-full items-center ">
  <input type="text" placeholder="Search here" className="input input-bordered input-md w-full max-w-xs" />
<p className="text-2xl"><BiSearch/></p>
    {/* <!--Search icon-->  */}
   
  </div>

  <div className="text-3xl">
  <BiHeart/>
 </div>

  <div className="text-3xl">
  <BiCartAlt/>
 </div>

</div>
 
 
  </div>
};

export default Button;