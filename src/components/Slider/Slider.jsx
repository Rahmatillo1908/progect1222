import React from 'react'
import "./Slider.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { useState } from 'react';
const Slider = () => {

   const [currentSlider, setcurrentSlider] = useState(0)
   const data = [
      "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
   ]
   const prevSlide = () => {
      setcurrentSlider(currentSlider === 0 ? 2 : (prev) => prev - 1);
   }
   const nextSlide = () => {
      setcurrentSlider(currentSlider === 2 ? 0 : (prev) => prev + 1);
   }

   return (
      <div className='slider' >
         <div className="container" style={{ transform: `translateX(-${currentSlider * 100}vw)` }} >
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
         </div>
         <div className="icons">
            <div className="icon" onClick={prevSlide} >
               <FaArrowLeft />
            </div>
            <div className="icon" onClick={nextSlide} >
               <FaArrowRight />
            </div>
         </div>
      </div>
   )
}

export default Slider