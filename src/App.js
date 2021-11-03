import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import  ItemDetailContainer  from './components/ItemDetailContainer/ItemDetailContainer';
import  ItemDetail  from './components/ItemDetail/ItemDetail';
import  ItemCount  from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
<header>
        <Navbar/>
        <ItemDetailContainer itemId={1} />
      </header>
      <div>
      <ItemDetail />
      <ItemCount initial={1} stock={10} />
      </div>
    </div>
  );
}

export default App;
