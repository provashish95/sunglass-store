import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  console.log(products);
  products.map(product => <img src={product.picture}></img>);

  return (
    <div className="App">
      <h1>Sunglass Store</h1>
      {
        products.map(product => <img src={product.picture}></img>)
      }
    </div>
  );
}

export default App;
