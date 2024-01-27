import { useContext } from 'react';
import './ItemListItem.css';
import StockContext from '../../store/stock-context';

const ItemListItem = (props) => {

    const stockCtx = useContext(StockContext);

    const buyButtonHandler = (e)=>{
        stockCtx.addToCart(props.id,e.target.id);
    }


    return <div>
        <span>{props.name}</span>
        <span>{props.description}</span>
        <span>{props.price}</span>
        <div>
            <button id='s' onClick={buyButtonHandler} >{`Buy Small (${props.s})`}</button>
            <button id='m' onClick={buyButtonHandler} >{`Buy Medium (${props.m})`}</button>
            <button id='l' onClick={buyButtonHandler} >{`Buy Large (${props.l})`}</button>
        </div>
    </div>
}

export default ItemListItem;