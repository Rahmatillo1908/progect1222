import React from 'react';
import { FaFacebook, FaGoogle, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import "./Contact.scss";
const Contact = () => {
   return (
      <div className='contact'>
         <div className="wrapper">
            <span>BE IN TOUCH WITH US;</span>
            <div className="mail">
               <input type="text" placeholder='Enter Your e-mail...' />
               <button>JOIN US</button>
            </div>
            <div className="icons">
               <FaFacebook />
               <FaInstagram />
               <FaTwitter />
               <FaGoogle />
               <FaPinterest />
            </div>
         </div>
      </div>
   )
}

export default Contact