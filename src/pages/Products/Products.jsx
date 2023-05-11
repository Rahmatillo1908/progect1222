import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Products.scss"
const Products = () => {
  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)
  return (
    <div className='products' >
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id='1' value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='2' value={2} />
            <label htmlFor="2">Skirt</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='3' value={3} />
            <label htmlFor="3">Coats</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" onChange={(e) => setMaxPrice(e.target.value)} min={0} max={1000} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" name="price" value="asc" id="asc" />
            <label htmlFor="asc">Price (Lowest First)</label>
          </div>
          <div className="inputItem">
            <input type="radio" name="price" value="desc" id="desc" />
            <label htmlFor="desc">Price (High First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          className="cartImg" />
        {/* <List maxPrice={maxPrice} sort={sort} catId={catId}  /> */}
      </div>
    </div>
  )
}

export default Products