import Header from './components/Header/Header';
import ItemsList from './components/ItemsList/ItemsList';
import NewArticleFrom from './components/NewArticleForm/NewArticleForm';
import StockProvider from './store/StockProvider';

function App() {
  return (
    <StockProvider>
      <Header/>
      <NewArticleFrom/>
      <ItemsList/>
    </StockProvider>
  );
}

export default App;
