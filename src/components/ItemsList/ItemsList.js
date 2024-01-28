import { useContext } from 'react';
import './ItemsList.css';
import StockContext from '../../store/stock-context';
import ItemListItem from './ItemListItem';

const ItemsList = (props) => {
    
    const stockCtx = useContext(StockContext);
    const items=stockCtx.items;

    return <>
        {items.length>0 && <div className='items-list'>
            {items.map(item=>{
                return <ItemListItem
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    s={item.s}
                    m={item.m}
                    l={item.l}
                    key={item.id}
                />
            })}
        </div>}
    </>
}

export default ItemsList;