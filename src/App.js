
import './App.css';
import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
<header>
        <Navbar/>
        <ItemListContainer greeting="Hola! Estamos en construccion, pronto podras ver todos nuestros productos."/>
      </header>
    </div>
  );
}

export default App;
