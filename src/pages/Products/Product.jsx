import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { TbFilter } from "react-icons/tb";
import { ProductCard } from "../../components/ProductsCard/ProductCard";
import { textSearch } from "../../utils/TextSearch";
import "./product.css";
export const Product = () => {

  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [query, setQuery] = useState("");

  const getAlldata=async()=>{
    try {
      fetch(`http://localhost:3001/productdata`)
      .then((d)=>d.json())
      .then((res)=>{
        //console.log("response", res);
        setData(res);
        setFilterData(res)
      })
    } catch (error) {
         return error;
    }
 }

  useEffect(()=>{
    
    getAlldata()
  },[])
 // Search by Search Field

 const handleSearch=()=>{
  let result = textSearch(data,query)
  setData(result)
}
// filter by color 

const handleColorChange=(e)=>{

  const {checked,value}= e.target;
 
 if(checked){
  const match= data.filter((el)=>el.color===value);
  setData(match)
 }else{

   setData(filterData);
 }
}
// Filter By Gender

const handleFilterGender=(e)=>{
  const {checked,value}= e.target;

  if(checked){
      const match= data.filter((el)=>el.gender===value);
      setData(match)
  }else{
      setData(filterData);
  }
}

// Filter by Price

const FilterByPrice=(e)=>{
  const {checked,value}= e.target;
  if(checked){
      let prices= value.trim().split("-");
      if(prices.length>1){
          let match= data.filter((el)=> el.price>=prices[0] && el.price<=prices[1]);
          setData(match)
      }else{
          let match = data.filter((el)=> el.price>=401);
          setData(match)
      }
  }else{
      setData(filterData)
  }
}

// Filter By Type

const FilterByType=(e)=>{
  const {checked,value}= e.target;
  if(checked){
      let match= data.filter((el)=>el.type===value);
      setData(match)
  }else{
      setData(filterData)
  }
}

  return (
    <div>
      <div className="productserachdiv">
        <input type="text" placeholder="Search for products..." onChange={(e)=>setQuery(e.target.value)} />
        <button className="serachbutton"onClick={handleSearch}>
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
            <input type="checkbox"  name='color' value='Red' onChange={handleColorChange} />  <span>Red</span>
            <br />
            <input type="checkbox" name='color'  value='Blue' onChange={handleColorChange} />
            <span>Blue</span>
            <br />
            <input type="checkbox"  name='color' value='Green' onChange={handleColorChange}/>
            <span>Green</span>
           
          </div>
          <div  >
            <h3>Gender</h3>
            <input type="checkbox"value="Men" onChange={handleFilterGender} />
            <span>Men</span>
            <br />
            <input type="checkbox"value="Women" onChange={handleFilterGender} />
            <span>Woman</span>
          </div>
          <div >
            <h3>Price</h3>
            <input type="checkbox"  value='0-250' onChange={FilterByPrice}/>
            <span>0 - Rs250</span>
            <br />
            <input type="checkbox"value='251-400' onChange={FilterByPrice} />
            <span>Rs251 - Rs400</span>
            <br />
            <input type="checkbox" value='450' onChange={FilterByPrice}/>
            <span>Rs450</span>
          </div>
          <div >
            <h3>Type</h3>
            <input type="checkbox" value='Polo' onChange={FilterByType}/>
            <span>Polo</span>
            <br />
            <input type="checkbox"value='Hoodie' onChange={FilterByType} />
            <span>Hoodie</span>
            <br />
            <input type="checkbox"value='Basic' onChange={FilterByType} />
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
