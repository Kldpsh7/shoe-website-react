import { useContext } from 'react';
import './HeaderCartButton.css';
import StockContext from '../../store/stock-context';

const HeaderCartButton = (props) => {

    const stockCtx = useContext(StockContext);

    return <div className='header-cart-button' onClick={props.onClick}><p className='cart-icon'>🛒</p><p className='cart-quantity'>{stockCtx.itemsInCart}</p></div>
}

export default HeaderCartButton;