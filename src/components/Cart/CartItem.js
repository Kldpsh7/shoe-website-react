import './CartItem.css';

const CartItem = (props) => {
    const s=props.item.s;
    const m=props.item.m;
    const l=props.item.l;
    const total = props.item.price*(s+l+m);

    return <div>
        <span>{`${props.item.name}`}</span>
        {s>0 && <span>{`[${s} x S]`}</span>}
        {m>0 && <span>{`[${m} x M]`}</span>}
        {l>0 && <span>{`[${m} x L]`}</span>}
        <span>{total.toFixed(2)}</span>
    </div>
};

export default CartItem;