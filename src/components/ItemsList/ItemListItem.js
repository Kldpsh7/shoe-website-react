import { useContext } from 'react';
import './ItemListItem.css';
import StockContext from '../../store/stock-context';

const ItemListItem = (props) => {

    const stockCtx = useContext(StockContext);

    const buyButtonHandler = (e)=>{
        stockCtx.addToCart(props.id,e.target.id);
    }


    return <>
    <div className='list-item'>
        <div className='span-div'>
            <span className='item-name'>{props.name}</span>
            <span className='item-price'>₹{props.price}/-</span>
            <span className='item-description'>{props.description}</span>
        </div>
        <div className='button-div'>
            <button id='s' onClick={buyButtonHandler} className={`button ${props.s===0 && 'out-of-stock'}`} title={props.s===0 && 'Out of Stock'}>{`Buy Small (${props.s})`}</button>
            <button id='m' onClick={buyButtonHandler} className={`button ${props.m===0 && 'out-of-stock'}`} title={props.m===0 && 'Out of Stock'}>{`Buy Medium (${props.m})`}</button>
            <button id='l' onClick={buyButtonHandler} className={`button ${props.l===0 && 'out-of-stock'}`} title={props.l===0 && 'Out of Stock'}>{`Buy Large (${props.l})`}</button>
        </div>
    </div>
    <hr/>
    </>
}

export default ItemListItem;