import React, { useState } from 'react'
import { IoIosArrowDown, IoIosBasket, IoMdHeartEmpty, IoMdPerson, IoMdSearch } from "react-icons/io"
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import "./Navbar.scss"
const Navbar = () => {
  const [open, setOpen] = useState(true)
  return (
    <div className='navbar' >
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/en.png" alt="" />
            <IoIosArrowDown />
          </div>
          <div className="item">
            <span>USD</span>
            <IoIosArrowDown />
          </div>
          <div className="item">
            <Link className='link' to="/product/1" >Women</Link>
          </div>
          <div className="item">
            <Link className='link' to="/product/2" >Men</Link>
          </div>
          <div className="item">
            <Link className='link' to="/product/3" >Children</Link>
          </div>
        </div>
        <div className="center">
          <Link className='link' to="/" >Lamastore</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className='link' to="/" >Homepage</Link>
          </div>
          <div className="item">
            <Link className='link' to="/" >About</Link>
          </div>
          <div className="item">
            <Link className='link' to="/" >Contact</Link>
          </div>
          <div className="item">
            <Link className='link' to="/" >Store</Link>
          </div>
          <div className="icons">
            <IoMdSearch />
            <IoMdPerson />
            <IoMdHeartEmpty />
            <div className="cartIcon" onClick={() => setOpen(!open)} >
              <IoIosBasket />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  )
}

export default Navbar