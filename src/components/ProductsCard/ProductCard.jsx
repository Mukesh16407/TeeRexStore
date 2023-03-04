import React from 'react'

export const ProductCard = ({item}) => {

  const {imageURL,name,price}= item;

  return (
    <div style={{backgroundColor:'#f2f2f2', padding:'10px 20px'}}>
      <h3 style={{position:'absolute', zIndex:'auto'}}>{name}</h3>
      <img src={imageURL} alt="imageurl" width='100%' height='200px'/>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <h3>Rs {price}</h3>
        <button style={{width:'100px', height:'30px', backgroundColor:'black',color:'white',cursor:'pointer', marginTop:'15px'}}
            
            >Add to Cart</button>
      </div>
    </div>
  )
}
