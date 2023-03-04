import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';

export const ProductCard = ({item}) => {

  const {product,setProduct}= useContext(CartContext);
  const {imageURL,name,price}= item;

  const AddToCart=()=>{
    let newprod={
      id: item.id,
      imageURL,
      name,
      price,
      quantity:1,
      availableqty: item.quantity
    }
    const Exist = product?.filter((prod)=> prod.id===item.id);

    if(Exist.length<1 && item.quantity>0){
      setProduct([...product,newprod])
    }
    // This Condition will check if the product quantity already out of stock
    else if(item.quantity===0){
      alert("Product is Out of Stock!!!")
    }
  }
  const Existcart= product.filter((prod)=> prod.id===item.id);
 
  const handleCount = (id, amount) => {
    let updatedqty = product.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + amount
        };
      } else {
        return item;
      }
    })
    setProduct(updatedqty);
  }
  const handleIncrementAndAlert=()=>{
    
    if(Existcart[0].quantity>=item.quantity){
      alert('You Reached Maximum Limit')
    }else{
      handleCount(item.id, +1)
    }
  }
  return (
    <div style={{backgroundColor:'#f2f2f2', padding:'10px 20px'}}>
      <h3 style={{position:'absolute', zIndex:'auto'}}>{name}</h3>
      <img src={imageURL} alt="imageurl" width='100%' height='200px'/>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <h3>Rs {price}</h3>
        {Existcart.length<1 ? 
        <button style={{width:'100px', height:'30px', backgroundColor:'black',color:'white',cursor:'pointer', marginTop:'15px'}}
        onClick={AddToCart}
        >Add to Cart</button>: <div style={{color: 'black', marginTop:'15px'}}>
 <button
              style={{width:'35px',height:'30px', backgroundColor:'black',color:'white',cursor:'pointer'}}
              onClick={()=>handleCount(item.id,-1)}
              disabled={Existcart[0].quantity===1}>-</button>
              <span style={{padding:'6px 7px', backgroundColor:'black',color:'white'}}>{Existcart[0].quantity}</span>
              <button
              style={{width:'35px',height:'30px', backgroundColor:'black',color:'white',cursor:'pointer'}}
              onClick={handleIncrementAndAlert}>+</button>
          </div>}
        
      </div>
    </div>
  )
}
