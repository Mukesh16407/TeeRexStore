import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { TbFilter } from "react-icons/tb";
import { ProductCard } from "../../components/ProductsCard/ProductCard";
import "./product.css";
export const Product = () => {

  const [data, setData] = useState([]);
  //https://geektrust/catalogue.json 

  useEffect(()=>{
    fetch('http://localhost:3001/productdata')
    .then((d)=>d.json())
    .then((res)=>{
      //console.log("response", res);
      setData(res)
    })
  },[])

  console.log(data)
  return (
    <div>
      <div className="productserachdiv">
        <input type="text" placeholder="Search for products..." />
        <button className="serachbutton">
          <AiOutlineSearch />
        </button>
        <button className="filterBtn">
          <TbFilter />
        </button>
      </div>
      <div className="productHomediv">
        <div className="filterDiv">
          <div >
            <h3>Colour</h3>
            <input type="checkbox" />  <span>Red</span>
            <br />
            <input type="checkbox" />
            <span>Blue</span>
            <br />
            <input type="checkbox" />
            <span>Green</span>
           
          </div>
          <div  >
            <h3>Gender</h3>
            <input type="checkbox" />
            <span>Men</span>
            <br />
            <input type="checkbox" />
            <span>Woman</span>
          </div>
          <div >
            <h3>Price</h3>
            <input type="checkbox" />
            <span>0 - Rs250</span>
            <br />
            <input type="checkbox" />
            <span>Rs251 - Rs400</span>
            <br />
            <input type="checkbox" />
            <span>Rs450</span>
          </div>
          <div >
            <h3>Type</h3>
            <input type="checkbox" />
            <span>Polo</span>
            <br />
            <input type="checkbox" />
            <span>Hoodie</span>
            <br />
            <input type="checkbox" />
            <span>Basic</span>
          </div>
        </div>
        <div className="mainProductdiv">
          {data.length > 0 ?data.map((item)=>{
            return(
              <ProductCard key={item.id} item={item}/>
            )
          
          }):<h3>No Matching Items Found</h3>}
         
        </div>
      </div>
    </div>
  );
};
