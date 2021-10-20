
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
<header>
        <Navbar/>
        <ItemListContainer greeting="Hola! Estamos en construccion, pronto podras ver todos nuestros productos."/>
      </header>
      <div>
      <h1>Crema</h1>
      <ItemCount initial={1} stock={10} />
      </div>
    </div>
  );
}

export default App;
