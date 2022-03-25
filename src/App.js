
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

  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <div className="row mt-5 d-flex justify-content-end">
          <div className="col-12 col-md-8  order-2 order-md-1">
            <div className="row g-4">
              {
                products.map(product => <Product key={product.id} product={product}></Product>)
              }
            </div>
          </div>
          <div className="col-12 col-md-4  order-1 order-md-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
