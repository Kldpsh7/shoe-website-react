import { useContext } from 'react';
import './Cart.css';
import StockContext from '../../store/stock-context';
import CartItem from './CartItem';
import Modal from '../UI/Input/Modal';

const Cart = (props)=>{

    const stockCtx = useContext(StockContext);
    const cartItems = stockCtx.cartItems;

    return <Modal>
            <div>
                {cartItems.map(item=><CartItem item={item} key={item.id}/>)}
            </div>
            <hr></hr>
            <div className='total-div'>
                <span>Total Amount: ₹</span>
                <span>{stockCtx.cartTotal.toFixed(2)}</span>
            </div>
            <div className='cart-button-div'>
                {stockCtx.itemsInCart>0 && <button className='order-btn'>Order</button>}
                <button className='close-btn' onClick={props.onClose}>Close</button>
            </div>
        
    </Modal>
};

export default Cart;