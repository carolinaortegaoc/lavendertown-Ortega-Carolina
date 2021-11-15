import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import  ItemDetailContainer  from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "../src/components/Context/CartContext";


function App() {
  return (
    <div className="App">
     <CartProvider>
<BrowserRouter>
<header >
  <Navbar />
</header>
<Switch>
  <Route exact path="/">
    <section >
      <ItemListContainer />
    </section>
  </Route>
  <Route path="/category/:catId">
    <section >
      <ItemListContainer />
    </section>
  </Route>
  <Route path="/item/:id">
  <section >
    <ItemDetailContainer />
    </section>
  </Route>
</Switch>
</BrowserRouter>
      </CartProvider>
</div>
);
}

export default App;
