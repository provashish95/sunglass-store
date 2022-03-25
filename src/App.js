
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Product from './components/Header/Product/Product';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  console.log(products);
  //products.map(product => <img src={product.picture}></img>);

  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <div className="row mt-5 d-flex">
          <div className="col-12 col-md-8 col-lg-8 bg-info order-md-1 order-2 ">
            <div className="row g-3">
              {
                products.map(product => <Product product={product}></Product>)
              }
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4 bg-success order-md-2 order-1">
            <h1 >This is cart box</h1>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
