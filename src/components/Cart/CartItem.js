import './CartItem.css';

const CartItem = (props) => {
    const s=props.item.s;
    const m=props.item.m;
    const l=props.item.l;
    const total = props.item.price*(s+l+m);

    return <div className='cart-item-div'>
        <span className='cart-item-name'>{`${props.item.name}`}</span>
        {s>0 && <span className='quantity'>{`${s} x S`}</span>}
        {m>0 && <span className='quantity'>{`${m} x M`}</span>}
        {l>0 && <span className='quantity'>{`${m} x L`}</span>}
        <span className='cart-item-price'>{total.toFixed(2)}</span>
    </div>
};

export default CartItem;