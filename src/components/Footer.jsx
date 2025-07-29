import React from "react";
import logo from "../assets/logo.png" ;
import {FaXTwitter,FaPinterest,FaLinkedin,FaTiktok,FaYoutube} from "react-icons/fa6";
import {Link} from "react-router-dom";
import {AiFillInstagram} from "react-icons/ai";

const Footer=()=>{
  return (
    <div className="flex flex-col px-4 py-10 bg-white dark:bg-black text-gray-900 dark:text-gray-400">
       {/*Logo  */}
      <div className="mb-4">
        <img 
       src={logo}
       alt="Cosmetica Logo"
       className="h-[60px] w-auto"
       />
      </div>
       
       {/* social icons */}
       <div className="flex flex-wrap gap-6 mb-6">
        <a className="dark:text-gray-400 text-black dark:hover:text-white hover:text-gray-400 text-xl transistion duration-300 "><FaXTwitter className="ml-6"/></a>
        <a className="dark:text-gray-400 text-black dark:hover:text-white hover:text-gray-400  text-xl  transistion duration-300"><AiFillInstagram/></a>
        <a className="dark:text-gray-400 text-black dark:hover:text-white hover:text-gray-400 text-xl transisiton duration-300"><FaPinterest/></a>
        <a className="dark:text-gray-400 text-black dark:hover:text-white hover:text-gray-400 text-xl transistion duration-300"><FaLinkedin/></a>
        <a className="dark:text-gray-400 text-black dark:hover:text-white hover:text-gray-400 text-xl tranisition duration-300"><FaTiktok/></a>
        <a className="dark:text-gray-400 text-black dark:hover:text-white hover:text-gray-400 text-xl tranistion duration=300"><FaYoutube/></a>
       </div>

       <div className="ml-6 mt-4 max-w-md">
        <p>
          Welcome to, your fashion destination. Discover the latest trends, find perfect pieces for your wardrobe,
           and enjoy seamless online shopping.
        </p>
       </div>
       {/* <div className="flex flex-row justify-between  "> */}
        <div className="flex flex-col  sm:flex-row justify-between ">

       <div className="flex flex-col sm:justify-start mt-6 gap-10 ml-6 ">
        <p className="text-white font-bold ">
        Product
        </p>
        <Link className="text-gray-400 " to="/">
       Home
        </Link>
        <Link  className="text-gray-400" to="/blog">
        Blog
        </Link>
        <Link  className="text-gray-400" to="/">
         Promotions
        </Link>
     </div>
     <div className="flex flex-col sm:justify-start mt-6 gap-10 ml-6 ">
        <p className="text-white font-bold ">
       Company
        </p>
        <Link className="text-gray-400 " to="/contact">
           Contact
        </Link>
        <Link  className="text-gray-400" to="/blog">
           Blog
        </Link>
        <Link  className="text-gray-400" to="/faq">
         FAQ
        </Link>
     </div>

          <div className="flex flex-col sm:justify-start mt-6 gap-10 ml-6 ">
        <p className="text-white font-bold ">
          Legal
        </p>
        <Link className="text-gray-400 " to="/privacy">
           Privacy
        </Link>
        <Link  className="text-gray-400" to="/terms">
           Terms
        </Link>
        <Link  className="text-gray-400" to="/">
         404
        </Link>
     </div>
     </div>



    </div>
  )
}
export default  Footer;
