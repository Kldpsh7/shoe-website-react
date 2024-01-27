import React from "react";

const StockContext = React.createContext({
    items:[],
    cartItems:[],
    cartTotal:0,
    itemsInCart:0,
    addToCart:()=>{},
    addItem:()=>{}
})

export default StockContext;