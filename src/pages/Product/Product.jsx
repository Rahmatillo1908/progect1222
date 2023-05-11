import React, { useState } from 'react'
import "./Prodect.scss"

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0)
  const images = [
    "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
    "https://images.unsplash.com/photo-1682872872619-fc9f3f0a2ed9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  ]
  const [quentity, setQuentity] = useState(1)
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} onClick={e => setSelectedImg(0)} alt="" />
          <img src={images[1]} onClick={e => setSelectedImg(1)} alt="" />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price' >$199</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officia a id perferendis quidem quisquam, accusantium quam nesciunt impedit! Possimus aliquam dolorem blanditiis expedita! Tempore dolor aliquid quod quisquam asperiores.</p>
        <div className="quentity">
          <button onClick={() => setQuentity((prev) => prev === 1 ? 1 : prev - 1)} >-</button>
          {quentity}
          <button onClick={() => setQuentity((prev) => prev + 1)} >+</button>
        </div>
        <button className="add">
          ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            ADD TO WISH LIST
          </div>
          <div className="item">
            ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div >
  )
}

export default Product