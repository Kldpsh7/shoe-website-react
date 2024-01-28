import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import ItemsList from './components/ItemsList/ItemsList';
import NewArticleFrom from './components/NewArticleForm/NewArticleForm';
import StockProvider from './store/StockProvider';

function App() {

  const [cartVisible,setCartVisible] = useState(false);

  const cartVisibilityHandler = () => {
    setCartVisible(prevState=>prevState===false?true:false);
  }
  return (
    <StockProvider>
      <Header onCartButtonClick={cartVisibilityHandler}/>
      {cartVisible && <Cart onClose={cartVisibilityHandler}/>}
      <NewArticleFrom/>
      <ItemsList/>
    </StockProvider>
  );
}

export default App;
