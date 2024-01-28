import { useState } from "react";
import StockContext from "./stock-context";

const StockProvider = (props) => {

    const [stockState,setStockState] = useState({items:[]});
    const [cartState,setCartState] = useState({items:[],cartTotal:0,itemsInCart:0});

    const addToStockHandler = (item) => {
        setStockState({items:[...stockContext.items,{
            id:item.id,
            name:item.name,
            description:item.description,
            price:Number(item.price).toFixed(2),
            s:+item.s,
            m:+item.m,
            l:+item.l
        }]})
    };

    const addToCartHandler = (id,size) => {
        const itemStockIndex = stockContext.items.findIndex(item=>item.id===id);
        if(stockContext.items[itemStockIndex][size]===0){
            return
        }else{
            const itemIndexInCart = stockContext.cartItems.findIndex(item=>item.id===id);
            if(itemIndexInCart>=0){
                stockContext.cartItems[itemIndexInCart][size]+=1
            }else{
                const newItemForCart = {
                    id:id,
                    name:stockContext.items[itemStockIndex].name,
                    price:stockContext.items[itemStockIndex].price,
                    s:0,
                    m:0,
                    l:0
                };
                newItemForCart[size]+=1;
                stockContext.cartItems.push(newItemForCart);
            }
            stockContext.items[itemStockIndex][size]-=1;
            stockContext.cartTotal+=+stockContext.items[itemStockIndex].price;
            stockContext.itemsInCart++;
            setCartState({
                items:stockContext.cartItems,
                cartTotal:stockContext.cartTotal,
                itemsInCart:stockContext.itemsInCart
            });
            setStockState({items:stockContext.items});
        }
    };

    const stockContext = {
        items:stockState.items,
        cartItems:cartState.items,
        cartTotal:cartState.cartTotal,
        itemsInCart:cartState.itemsInCart,
        addToCart:addToCartHandler,
        addItem:addToStockHandler
    };

    return <StockContext.Provider value={stockContext}>
        {props.children}
    </StockContext.Provider>
};

export default StockProvider;