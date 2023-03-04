import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {BsCart3} from 'react-icons/bs';
import './navbar.css'
import { CartContext } from '../../context/CartContext';
export const Navbar = () => {
  const {product} = useContext(CartContext);
  return (
    <div className='mainNavDiv'>
      <div>
            <h3>TeeRex Store</h3>
        </div>
        <div className="cartMainDiv">
            <Link to="/"><h3>Products</h3></Link>
            <div className="cart">
            <Link to="/cart"><BsCart3 style={{width:'40px', height:'20px'}}/></Link>
            <h4>{product.length}</h4>
            </div>
        </div>
    </div>
  )
}
