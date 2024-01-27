import { useContext } from 'react';
import Input from '../UI/Input/Input';
import './NewArticleForm.css';
import StockContext from '../../store/stock-context';

const NewArticleFrom = (props) => {

    const stockCtx = useContext(StockContext);
    console.log(stockCtx.items)

    const formSubmitHandler = e=>{
        e.preventDefault()
        console.log(e.target.name.value,e.target.L.value)
        stockCtx.addItem({
            id:Math.random(),
            name:e.target.name.value,
            description:e.target.description.value,
            price:e.target.price.value,
            s:e.target.S.value,
            m:e.target.M.value,
            l:e.target.L.value
        })
    }

    return (
        <form className='new-article-form' onSubmit={formSubmitHandler}>
            <Input label='Shoe Name' input={{
                type:'text',
                id:'name',
                name:'name',
            }}/>
            <Input label='Description' input={{
                type:'text',
                id:'description',
                name:'description',
            }}/>
            <Input label='Price' input={{
                type:'number',
                id:'price',
                name:'price',
            }}/>
            <div>
                <p>Quantity Available</p>
                <div className='form-quantity-div'>
                    <Input label='S' input={{
                        type:'number',
                        id:'S',
                        name:'S',
                    }}/>
                    <Input label='M' input={{
                        type:'number',
                        id:'M',
                        name:'M',
                    }}/>
                    <Input label='L' input={{
                        type:'number',
                        id:'L',
                        name:'L',
                    }}/>
                </div>
            </div>
            <button type='submit'>Add Item</button>
        </form>
    )
}

export default NewArticleFrom;