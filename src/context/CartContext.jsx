import { createContext, useState } from "react";


export const CartContext= createContext();

export const CartContextProvider=({children})=>{
    const [product, setProduct] = useState([]);
    return(
        <CartContext.Provider value={{product,setProduct}}>
            {children}
        </CartContext.Provider>
    )
}

