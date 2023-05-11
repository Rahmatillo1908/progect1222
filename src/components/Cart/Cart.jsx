import React from 'react'
import './Cart.scss'
import { AiOutlineDelete } from "react-icons/ai"
const Cart = () => {

   const data = [
      {
         id: 1,
         img: "https://plus.unsplash.com/premium_photo-1682795706664-248cbb76f1c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
         img2: "https://images.unsplash.com/photo-1682809462112-0a74b3384aea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
         price: 12,
         title: "NEW",
         desc: "NEW",
         oldPrice: 20,
      }
   ]
   return (
      <div className='cart'>
         <h1>Products in your cart</h1>
         {data?.map(item => (
            <div className='item' key={item.id} >
               <img src={item.img} alt="" />
               <div className="details">
                  <h1>{item.title}</h1>
                  <p>{item.desc?.substring(0, 100)}</p>
                  <div className="price">
                     1 x $19.9
                  </div>
               </div>
               <AiOutlineDelete className='delete' />
            </div>
         ))}
         <div className="total">
            <span>Subtotal</span>
            <span>$123</span>
         </div>
         <button>PROCED TO CHACKOUT</button>

      </div>
   )
}

export default Cart