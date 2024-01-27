import { useContext } from 'react';
import './Cart.css';
import StockContext from '../../store/stock-context';
import CartItem from './CartItem';

const Cart = (props)=>{

    const stockCtx = useContext(StockContext);
    const cartItems = stockCtx.cartItems;

    return <div>
        <div>
            {cartItems.map(item=><CartItem item={item}/>)}
        </div>
        <div>
            <span>Total Amount = </span>
            <span>{stockCtx.cartTotal.toFixed(2)}</span>
        </div>
        <div>
            {stockCtx.itemsInCart>0 && <button>Order</button>}
            <button>Close</button>
        </div>
    </div>
};

export default Cart;