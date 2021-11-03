import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import  ItemDetailContainer  from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
<header>
        <Navbar/>
        <ItemDetailContainer />
      </header>

    </div>
  );
}

export default App;
